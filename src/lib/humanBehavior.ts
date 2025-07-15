
// Utility functions to make client-side behavior appear more human-like

export class HumanBehaviorSimulator {
  private static lastInteractionTime = 0;
  private static interactionCount = 0;

  // Add natural delays between actions
  static async addHumanDelay(minMs: number = 100, maxMs: number = 500): Promise<void> {
    const delay = Math.random() * (maxMs - minMs) + minMs;
    return new Promise(resolve => setTimeout(resolve, delay));
  }

  // Check if interactions are happening too frequently
  static isInteractionTooFrequent(minIntervalMs: number = 1000): boolean {
    const now = Date.now();
    const timeSinceLastInteraction = now - this.lastInteractionTime;
    
    if (timeSinceLastInteraction < minIntervalMs) {
      return true;
    }
    
    this.lastInteractionTime = now;
    this.interactionCount++;
    return false;
  }

  // Throttle function calls to prevent excessive firing
  static throttle<T extends (...args: any[]) => any>(
    func: T,
    limitMs: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    
    return function(this: any, ...args: Parameters<T>) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limitMs);
      }
    };
  }

  // Debounce function calls to group rapid calls
  static debounce<T extends (...args: any[]) => any>(
    func: T,
    waitMs: number
  ): (...args: Parameters<T>) => void {
    let timeoutId: NodeJS.Timeout;
    
    return function(this: any, ...args: Parameters<T>) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), waitMs);
    };
  }

  // Add mouse movement simulation for critical interactions
  static simulateMouseMovement(): void {
    const event = new MouseEvent('mousemove', {
      clientX: Math.random() * window.innerWidth,
      clientY: Math.random() * window.innerHeight,
      bubbles: true
    });
    document.dispatchEvent(event);
  }

  // Validate user interaction patterns
  static validateUserBehavior(): {
    isValid: boolean;
    score: number;
    flags: string[];
  } {
    const flags: string[] = [];
    let score = 100;

    // Check interaction frequency
    if (this.interactionCount > 10) {
      const avgInterval = (Date.now() - this.lastInteractionTime) / this.interactionCount;
      if (avgInterval < 100) {
        flags.push('high_frequency_interactions');
        score -= 30;
      }
    }

    // Check for presence of mouse and keyboard events
    const hasMouseEvents = document.querySelector('[data-mouse-active]') !== null;
    const hasKeyboardEvents = document.querySelector('[data-keyboard-active]') !== null;
    
    if (!hasMouseEvents && !hasKeyboardEvents) {
      flags.push('no_user_input_detected');
      score -= 20;
    }

    return {
      isValid: score > 50,
      score,
      flags
    };
  }
}

// Event listener to track user interactions
export function initializeHumanBehaviorTracking(): void {
  let mouseActivityDetected = false;
  let keyboardActivityDetected = false;

  // Track mouse activity
  document.addEventListener('mousemove', HumanBehaviorSimulator.throttle(() => {
    if (!mouseActivityDetected) {
      document.body.setAttribute('data-mouse-active', 'true');
      mouseActivityDetected = true;
    }
  }, 1000), { passive: true });

  // Track keyboard activity
  document.addEventListener('keydown', HumanBehaviorSimulator.throttle(() => {
    if (!keyboardActivityDetected) {
      document.body.setAttribute('data-keyboard-active', 'true');
      keyboardActivityDetected = true;
    }
  }, 1000), { passive: true });

  // Track scroll activity with throttling
  document.addEventListener('scroll', HumanBehaviorSimulator.throttle(() => {
    document.body.setAttribute('data-scroll-active', 'true');
  }, 500), { passive: true });
}
