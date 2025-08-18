import { ref, onMounted, onUnmounted } from "vue";

/**
 * Composable for scroll-triggered animations using Intersection Observer
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for intersection observer
 * @param {boolean} options.once - Whether animation should trigger only once
 * @returns {Object} - Reactive refs and methods for scroll animations
 */
export function useScrollAnimation(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    once = true,
  } = options;

  const isVisible = ref(false);
  const elementRef = ref(null);
  let observer = null;

  const createObserver = () => {
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      // Fallback for environments without IntersectionObserver
      isVisible.value = true;
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
            if (once && observer) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            isVisible.value = false;
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (elementRef.value) {
      observer.observe(elementRef.value);
    }
  };

  const startObserving = () => {
    if (elementRef.value && observer) {
      observer.observe(elementRef.value);
    }
  };

  const stopObserving = () => {
    if (observer && elementRef.value) {
      observer.unobserve(elementRef.value);
    }
  };

  onMounted(() => {
    createObserver();
  });

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return {
    isVisible,
    elementRef,
    startObserving,
    stopObserving,
  };
}

/**
 * Composable for staggered animations on multiple elements
 * @param {Object} options - Configuration options
 * @param {number} options.staggerDelay - Delay between each item animation (ms)
 * @param {number} options.threshold - Intersection threshold
 * @returns {Object} - Methods and refs for staggered animations
 */
export function useStaggeredAnimation(options = {}) {
  const {
    staggerDelay = 100,
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
  } = options;

  const visibleItems = ref(new Set());
  const containerRef = ref(null);
  let observer = null;

  const createStaggeredObserver = () => {
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index) || 0;

            setTimeout(() => {
              visibleItems.value.add(index);
            }, index * staggerDelay);

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );
  };

  const observeChildren = () => {
    if (!containerRef.value || !observer) return;

    const children = containerRef.value.querySelectorAll("[data-stagger-item]");
    children.forEach((child, index) => {
      child.dataset.index = index;
      observer.observe(child);
    });
  };

  const isItemVisible = (index) => {
    return visibleItems.value.has(index);
  };

  onMounted(() => {
    createStaggeredObserver();
    // Use nextTick to ensure DOM is ready
    setTimeout(observeChildren, 100);
  });

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return {
    visibleItems,
    containerRef,
    observeChildren,
    isItemVisible,
  };
}
