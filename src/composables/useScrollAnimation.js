import { ref, onMounted, onUnmounted } from "vue";

export function useScrollAnimation(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    triggerOnce = true,
  } = options;

  const isVisible = ref(false);
  const elementRef = ref(null);
  let observer = null;

  onMounted(() => {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      if (!elementRef.value) {
        // Fallback: make visible if element ref is not available
        isVisible.value = true;
        return;
      }

      // Check if element is already in view
      const rect = elementRef.value.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        isVisible.value = true;
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              isVisible.value = true;
              if (triggerOnce) {
                observer.unobserve(entry.target);
              }
            } else if (!triggerOnce) {
              isVisible.value = false;
            }
          });
        },
        {
          threshold,
          rootMargin,
        }
      );

      observer.observe(elementRef.value);
    }, 100);
  });

  onUnmounted(() => {
    if (observer && elementRef.value) {
      observer.unobserve(elementRef.value);
    }
  });

  return {
    isVisible,
    elementRef,
  };
}

export function useStaggeredAnimation(options = {}) {
  const {
    staggerDelay = 100,
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
  } = options;

  const containerRef = ref(null);
  const visibleItems = ref(new Set());
  let observer = null;

  const isItemVisible = (index) => visibleItems.value.has(index);

  onMounted(() => {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      if (!containerRef.value) return;

      // Check if container is already in view
      const rect = containerRef.value.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        // Trigger staggered animation immediately if in view
        const items = containerRef.value.querySelectorAll(
          "[data-stagger-item]"
        );
        items.forEach((item, index) => {
          setTimeout(() => {
            visibleItems.value.add(index);
            item.classList.add("visible");
          }, index * staggerDelay);
        });
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const items = containerRef.value.querySelectorAll(
                "[data-stagger-item]"
              );
              items.forEach((item, index) => {
                setTimeout(() => {
                  visibleItems.value.add(index);
                  item.classList.add("visible");
                }, index * staggerDelay);
              });
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold,
          rootMargin,
        }
      );

      observer.observe(containerRef.value);
    }, 100);
  });

  onUnmounted(() => {
    if (observer && containerRef.value) {
      observer.unobserve(containerRef.value);
    }
  });

  return {
    isItemVisible,
    containerRef,
  };
}
