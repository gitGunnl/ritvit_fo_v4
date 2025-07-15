
// Human behavior simulation utilities to avoid WAF bot detection

export class HumanBehaviorSimulator {
  private static instance: HumanBehaviorSimulator;
  private interactionTimestamps: number[] = [];
  private lastMouseMove: number = 0;
  private lastScroll: number = 0;

  static getInstance(): HumanBehaviorSimulator {
    if (!HumanBehaviorSimulator.instance) {
      HumanBehaviorSimulator.instance = new HumanBehaviorSimulator();
    }
    return HumanBehaviorSimulator.instance;
  }

  // Add natural delay based on human typing patterns
  getTypingDelay(textLength: number): number {
    // Average human typing: 40 WPM = ~200ms per character
    const baseDelay = textLength * 50; // 50ms per character minimum
    const variance = Math.random() * 100; // Add randomness
    return Math.min(baseDelay + variance, 2000); // Cap at 2 seconds
  }

  // Check if user behavior seems human-like
  isHumanLikeActivity(): boolean {
    const now = Date.now();
    
    // Check for recent mouse/scroll activity
    const hasRecentMouseActivity = now - this.lastMouseMove < 10000; // 10 seconds
    const hasRecentScrollActivity = now - this.lastScroll < 10000;
    
    // Check interaction frequency (not too rapid)
    const recentInteractions = this.interactionTimestamps.filter(
      timestamp => now - timestamp < 5000 // Last 5 seconds
    );
    
    return (hasRecentMouseActivity || hasRecentScrollActivity) && 
           recentInteractions.length < 10; // Max 10 interactions per 5 seconds
  }

  // Record user interaction
  recordInteraction(): void {
    const now = Date.now();
    this.interactionTimestamps.push(now);
    
    // Keep only last 50 interactions
    if (this.interactionTimestamps.length > 50) {
      this.interactionTimestamps = this.interactionTimestamps.slice(-50);
    }
  }

  // Track mouse movement
  trackMouseMove(): void {
    this.lastMouseMove = Date.now();
  }

  // Track scroll events
  trackScroll(): void {
    this.lastScroll = Date.now();
  }

  // Get random user-like delay
  getRandomDelay(min: number = 100, max: number = 500): number {
    return Math.random() * (max - min) + min;
  }

  // Initialize event tracking
  initializeTracking(): void {
    if (typeof window !== 'undefined') {
      // Track mouse movements
      document.addEventListener('mousemove', () => this.trackMouseMove(), { passive: true });
      
      // Track scroll events
      document.addEventListener('scroll', () => this.trackScroll(), { passive: true });
      
      // Track clicks
      document.addEventListener('click', () => this.recordInteraction(), { passive: true });
    }
  }
}

// Utility function to add natural delays
export const addNaturalDelay = async (action: () => Promise<void> | void): Promise<void> => {
  const simulator = HumanBehaviorSimulator.getInstance();
  const delay = simulator.getRandomDelay(150, 400);
  
  await new Promise(resolve => setTimeout(resolve, delay));
  await action();
};

// Request throttling with human-like patterns
export class HumanRequestThrottler {
  private lastRequest: number = 0;
  private requestCount: number = 0;
  private resetTime: number = Date.now();

  async throttleRequest<T>(requestFn: () => Promise<T>): Promise<T> {
    const now = Date.now();
    
    // Reset counter every minute
    if (now - this.resetTime > 60000) {
      this.requestCount = 0;
      this.resetTime = now;
    }
    
    // Ensure minimum time between requests
    const timeSinceLastRequest = now - this.lastRequest;
    const minDelay = 1000; // 1 second minimum
    
    if (timeSinceLastRequest < minDelay) {
      await new Promise(resolve => setTimeout(resolve, minDelay - timeSinceLastRequest));
    }
    
    // Add progressive delay for rapid requests
    if (this.requestCount > 3) {
      const progressiveDelay = Math.min(this.requestCount * 500, 5000);
      await new Promise(resolve => setTimeout(resolve, progressiveDelay));
    }
    
    this.lastRequest = Date.now();
    this.requestCount++;
    
    return await requestFn();
  }
}
