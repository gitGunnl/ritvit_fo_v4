/**
 * Enhanced human behavior simulation to reduce bot-like patterns that might trigger WAF
 * Includes security-focused behavioral patterns and rate limiting
 */

export class HumanBehaviorSimulator {
  private static instance: HumanBehaviorSimulator;
  private mouseMovements: { x: number; y: number; timestamp: number }[] = [];
  private keystrokes: { key: string; timestamp: number }[] = [];
  private scrollEvents: { y: number; timestamp: number }[] = [];
  private interactionCount = 0;
  private sessionStart = Date.now();
  private requestCounts: Map<string, number> = new Map();
  private lastRequestTimes: Map<string, number> = new Map();
  private behaviorMetrics = {
    mouseEntropy: 0,
    keyboardRhythm: 0,
    scrollConsistency: 0,
    interactionDepth: 0
  };

  public static getInstance(): HumanBehaviorSimulator {
    if (!HumanBehaviorSimulator.instance) {
      HumanBehaviorSimulator.instance = new HumanBehaviorSimulator();
    }
    return HumanBehaviorSimulator.instance;
  }

  public initializeTracking(): void {
    // Enhanced mouse tracking with pattern analysis
    let mouseThrottle: NodeJS.Timeout;
    document.addEventListener('mousemove', (e) => {
      clearTimeout(mouseThrottle);
      mouseThrottle = setTimeout(() => {
        this.recordMouseMovement(e.clientX, e.clientY);
        this.updateMouseEntropy();
      }, 50);
    });

    // Advanced keyboard pattern tracking
    document.addEventListener('keydown', (e) => {
      this.recordKeystroke(e.key);
      this.updateKeyboardRhythm();
    });

    // Sophisticated scroll behavior analysis
    let scrollThrottle: NodeJS.Timeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollThrottle);
      scrollThrottle = setTimeout(() => {
        this.recordScroll(window.scrollY);
        this.updateScrollConsistency();
      }, 100);
    });

    // Enhanced interaction tracking
    document.addEventListener('click', (e) => {
      this.recordInteraction(e);
      this.updateInteractionDepth();
    });

    // Add intelligent form delays
    this.addIntelligentFormDelays();

    // Initialize focus/blur tracking
    this.initializeFocusTracking();

    // Add viewport interaction tracking
    this.initializeViewportTracking();
  }

  private recordMouseMovement(x: number, y: number): void {
    const now = Date.now();

    // Add micro-variations to simulate human imprecision
    const jitterX = x + (Math.random() - 0.5) * 2;
    const jitterY = y + (Math.random() - 0.5) * 2;

    this.mouseMovements.push({ x: jitterX, y: jitterY, timestamp: now });

    // Keep only last 200 movements for better analysis
    if (this.mouseMovements.length > 200) {
      this.mouseMovements = this.mouseMovements.slice(-200);
    }
  }

  private recordKeystroke(key: string): void {
    const now = Date.now();

    // Filter out system keys that bots might use
    const systemKeys = ['Control', 'Alt', 'Meta', 'Shift'];
    if (!systemKeys.includes(key)) {
      this.keystrokes.push({ key, timestamp: now });

      // Keep only last 100 keystrokes
      if (this.keystrokes.length > 100) {
        this.keystrokes = this.keystrokes.slice(-100);
      }
    }
  }

  private recordScroll(y: number): void {
    const now = Date.now();
    this.scrollEvents.push({ y, timestamp: now });

    // Keep only last 100 scroll events
    if (this.scrollEvents.length > 100) {
      this.scrollEvents = this.scrollEvents.slice(-100);
    }
  }

  private recordInteraction(event: MouseEvent): void {
    this.interactionCount++;

    // Add intelligent delay based on element type
    const target = event.target as HTMLElement;
    const elementType = target.tagName.toLowerCase();

    let baseDelay = 50;
    if (elementType === 'button') baseDelay = 150;
    if (elementType === 'a') baseDelay = 100;
    if (elementType === 'input') baseDelay = 80;

    // Add human-like variance
    const delay = baseDelay + (Math.random() * 100);

    setTimeout(() => {
      // Process interaction with natural timing
    }, delay);
  }

  private addIntelligentFormDelays(): void {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Calculate delay based on form complexity
        const inputs = form.querySelectorAll('input, textarea, select');
        const baseDelay = Math.max(inputs.length * 100, 300);
        const humanDelay = baseDelay + (Math.random() * 500);

        setTimeout(() => {
          // Re-submit with human-like timing
          form.requestSubmit();
        }, humanDelay);
      });
    });
  }

  private initializeFocusTracking(): void {
    let focusStartTime = 0;

    window.addEventListener('focus', () => {
      focusStartTime = Date.now();
    });

    window.addEventListener('blur', () => {
      if (focusStartTime > 0) {
        const focusDuration = Date.now() - focusStartTime;
        // Track focus patterns to establish human behavior
        this.behaviorMetrics.interactionDepth += Math.min(focusDuration / 10000, 1);
      }
    });
  }

  private initializeViewportTracking(): void {
    let visibilityChangeCount = 0;

    document.addEventListener('visibilitychange', () => {
      visibilityChangeCount++;
      // Natural tab switching behavior
      if (visibilityChangeCount > 0) {
        this.behaviorMetrics.interactionDepth += 0.1;
      }
    });
  }

  private updateMouseEntropy(): void {
    if (this.mouseMovements.length < 20) return;

    // Calculate movement entropy (randomness)
    const recent = this.mouseMovements.slice(-20);
    const angles = [];

    for (let i = 2; i < recent.length; i++) {
      const p1 = recent[i - 2];
      const p2 = recent[i - 1];
      const p3 = recent[i];

      const angle1 = Math.atan2(p2.y - p1.y, p2.x - p1.x);
      const angle2 = Math.atan2(p3.y - p2.y, p3.x - p2.x);
      const deltaAngle = Math.abs(angle2 - angle1);

      angles.push(deltaAngle);
    }

    const variance = this.calculateVariance(angles);
    this.behaviorMetrics.mouseEntropy = Math.min(variance / Math.PI, 1);
  }

  private updateKeyboardRhythm(): void {
    if (this.keystrokes.length < 10) return;

    // Analyze typing rhythm for human patterns
    const recent = this.keystrokes.slice(-10);
    const intervals = [];

    for (let i = 1; i < recent.length; i++) {
      intervals.push(recent[i].timestamp - recent[i - 1].timestamp);
    }

    const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;

    // Human typing has natural rhythm variations
    if (avgInterval > 50 && avgInterval < 500) {
      const variance = this.calculateVariance(intervals);
      this.behaviorMetrics.keyboardRhythm = Math.min(Math.sqrt(variance) / 200, 1);
    }
  }

  private updateScrollConsistency(): void {
    if (this.scrollEvents.length < 10) return;

    // Analyze scroll acceleration patterns
    const recent = this.scrollEvents.slice(-10);
    const velocities = [];

    for (let i = 1; i < recent.length; i++) {
      const deltaY = recent[i].y - recent[i - 1].y;
      const deltaT = recent[i].timestamp - recent[i - 1].timestamp;
      velocities.push(deltaY / deltaT);
    }

    const variance = this.calculateVariance(velocities);
    this.behaviorMetrics.scrollConsistency = Math.min(variance / 1000, 1);
  }

  private updateInteractionDepth(): void {
    const sessionDuration = Date.now() - this.sessionStart;
    const interactionRate = this.interactionCount / (sessionDuration / 1000);

    // Natural interaction rate (not too fast, not too slow)
    if (interactionRate > 0.1 && interactionRate < 2) {
      this.behaviorMetrics.interactionDepth = Math.min(interactionRate / 2, 1);
    }
  }

  private calculateVariance(values: number[]): number {
    if (values.length === 0) return 0;

    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const variance = values.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / values.length;

    return variance;
  }

  public getBehaviorScore(): number {
    const sessionDuration = Date.now() - this.sessionStart;
    const sessionLength = Math.min(sessionDuration / (5 * 60 * 1000), 1);

    // Weighted combination of behavioral metrics
    const weights = {
      mouseEntropy: 0.25,
      keyboardRhythm: 0.25,
      scrollConsistency: 0.2,
      interactionDepth: 0.2,
      sessionLength: 0.1
    };

    return (
      this.behaviorMetrics.mouseEntropy * weights.mouseEntropy +
      this.behaviorMetrics.keyboardRhythm * weights.keyboardRhythm +
      this.behaviorMetrics.scrollConsistency * weights.scrollConsistency +
      this.behaviorMetrics.interactionDepth * weights.interactionDepth +
      sessionLength * weights.sessionLength
    );
  }

  public isRequestAllowed(endpoint: string): boolean {
    const now = Date.now();
    const lastRequest = this.lastRequestTimes.get(endpoint) || 0;
    const requestCount = this.requestCounts.get(endpoint) || 0;

    // Basic rate limiting
    if (now - lastRequest < 1000 && requestCount > 10) {
      return false;
    }

    // Reset counters every minute
    if (now - lastRequest > 60000) {
      this.requestCounts.set(endpoint, 0);
    }

    this.lastRequestTimes.set(endpoint, now);
    this.requestCounts.set(endpoint, requestCount + 1);

    return true;
  }

  public generateHumanLikeHeaders(): Record<string, string> {
    const userAgents = [
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15'
    ];

    const languages = [
      'en-US,en;q=0.9',
      'en-GB,en;q=0.9',
      'en-US,en;q=0.8,fo;q=0.6',
      'fo,en;q=0.9,da;q=0.8'
    ];

    return {
      'User-Agent': userAgents[Math.floor(Math.random() * userAgents.length)],
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
      'Accept-Language': languages[Math.floor(Math.random() * languages.length)],
      'Accept-Encoding': 'gzip, deflate, br',
      'DNT': '1',
      'Connection': 'keep-alive',
      'Upgrade-Insecure-Requests': '1',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'none',
      'Sec-Fetch-User': '?1',
      'Cache-Control': 'max-age=0'
    };
  }

  public getBehaviorInsights(): Record<string, any> {
    return {
      score: this.getBehaviorScore(),
      metrics: { ...this.behaviorMetrics },
      sessionDuration: Date.now() - this.sessionStart,
      interactionCount: this.interactionCount,
      dataPoints: {
        mouseMovements: this.mouseMovements.length,
        keystrokes: this.keystrokes.length,
        scrollEvents: this.scrollEvents.length
      }
    };
  }
}