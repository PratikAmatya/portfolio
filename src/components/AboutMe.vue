<template>
  <section
    class="hero-section"
    ref="containerRef"
    role="banner"
    aria-label="Introduction"
  >
    <v-container fluid class="hero-container">
      <v-row no-gutters class="hero-content" align="center">
        <v-col
          class="order-last order-sm-first hero-text"
          cols="12"
          md="6"
          sm="6"
        >
          <div
            class="hero-title-container slide-in-left"
            :class="{ visible: titleVisible }"
          >
            <h1 class="headland-one hero-title">Hi, I'm Pratik</h1>
          </div>

          <h2
            class="overpass hero-subtitle slide-in-left"
            :class="{ visible: subtitleVisible }"
          >
            a Web Developer
          </h2>

          <div
            class="hero-buttons slide-in-left"
            :class="{ visible: buttonsVisible }"
          >
            <v-row>
              <v-col>
                <v-btn
                  rounded="lg"
                  size="x-large"
                  density="comfortable"
                  color="grey-darken-4"
                  class="text-none hero-btn touch-target"
                  variant="flat"
                  @click="scrollToFooter"
                  aria-label="Scroll to contact section"
                >
                  <span style="color: #f7f7f9 !important" class="space-grotesk">
                    Contact me
                  </span>
                </v-btn>
              </v-col>
              <v-col>
                <a
                  href="https://drive.google.com/file/d/1kCx-W4X4Q5NJMs8GNsnbk6B_TjBBMUx7/view?usp=sharing"
                  target="_blank"
                  aria-label="Open resume in new tab"
                  rel="noopener noreferrer"
                >
                  <v-btn
                    rounded="lg"
                    size="x-large"
                    density="comfortable"
                    color="grey-darken-4"
                    class="text-none hero-btn touch-target"
                    variant="flat"
                    tabindex="-1"
                  >
                    <span
                      style="color: #f7f7f9 !important"
                      class="space-grotesk"
                    >
                      See My Resume
                    </span>
                  </v-btn>
                </a>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col
          class="hero-animation slide-in-right"
          :class="{ visible: animationVisible }"
          cols="12"
          md="6"
          sm="6"
        >
          <div class="animation-container">
            <Vue3Lottie
              v-if="boyAvatarJSON"
              :animationData="boyAvatarJSON"
              :height="400"
              :width="400"
              :loop="false"
              @error="handleAnimationError"
            />
            <div v-else class="animation-fallback">
              <div class="developer-icon">
                <v-icon size="120" color="#ffef5c">mdi-code-tags</v-icon>
                <div class="icon-text">
                  <span class="space-grotesk">Developer</span>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Scroll Down Indicator -->
    <div
      class="scroll-indicator"
      :class="{ visible: buttonsVisible }"
      @click="scrollToNextSection"
      role="button"
      tabindex="0"
      aria-label="Scroll to next section"
      @keydown.enter="scrollToNextSection"
      @keydown.space="scrollToNextSection"
    >
      <div class="scroll-text">
        <span class="space-grotesk">Scroll Down</span>
      </div>
      <div class="scroll-arrow">
        <v-icon size="24" color="#4a4a4a">mdi-chevron-down</v-icon>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import { ref, onMounted } from "vue";

const boyAvatarJSON = ref(null);

const titleVisible = ref(false);
const subtitleVisible = ref(false);
const buttonsVisible = ref(false);
const animationVisible = ref(false);

// Initialize animations after component mounts
onMounted(async () => {
  // Try to load Lottie animation
  try {
    const animation = await import("@/assets/boyAvatarJSON.json");
    boyAvatarJSON.value = animation.default;
  } catch (error) {
    console.warn("Lottie animation not found, using fallback");
    boyAvatarJSON.value = null;
  }

  // Trigger hero animations immediately
  setTimeout(() => {
    titleVisible.value = true;
  }, 200);

  setTimeout(() => {
    subtitleVisible.value = true;
  }, 400);

  setTimeout(() => {
    buttonsVisible.value = true;
  }, 600);

  setTimeout(() => {
    animationVisible.value = true;
  }, 300);
});

const handleAnimationError = () => {
  console.warn("Lottie animation failed to load");
  boyAvatarJSON.value = null;
};

const scrollToFooter = () => {
  const footer = document.querySelector(".modern-footer");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToNextSection = () => {
  // Scroll to the next section after AboutMe (likely WorkExperience)
  const nextSection = document.querySelector("section:nth-of-type(2)");
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--color-surface);
  position: relative;
}

.hero-container {
  height: 100%;
  position: relative;
  z-index: 1;
}

.hero-content {
  min-height: 100vh;
  align-items: center;
}

.hero-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
}

.hero-title-container {
  margin-bottom: 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  will-change: transform;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  color: #171719;
  margin: 0;
  line-height: 1.1;
  white-space: nowrap;
  background: linear-gradient(135deg, #ffef5c 0%, #f0e04a 100%);
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  display: inline-block;
  box-shadow: 0 4px 12px rgba(255, 239, 92, 0.3);
}

.hero-subtitle {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 600;
  color: #4a4a4a;
  margin-bottom: 2rem;
  text-align: center;
}

.hero-buttons {
  width: 100%;
  max-width: 500px;
}

.hero-btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  width: 100%;
  height: 56px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}

.hero-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s ease;
}

.hero-btn:hover::before {
  left: 100%;
}

.hero-btn:hover {
  transform: translate3d(0, -3px, 0) scale(1.02);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  will-change: auto;
}

.hero-btn:active {
  transform: translate3d(0, -1px, 0) scale(1.01);
  transition-duration: 0.1s;
}

.hero-animation {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.animation-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  transition: transform 0.3s ease;
  will-change: transform;
  transform: translate3d(0, 0, 0);
}

.animation-container:hover {
  transform: translate3d(0, 0, 0) scale(1.05);
  will-change: auto;
}

.animation-fallback {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.developer-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(255, 239, 92, 0.1) 0%,
    rgba(255, 239, 92, 0.05) 100%
  );
  animation: float 3s ease-in-out infinite;
}

.icon-text {
  font-size: 1.2rem;
  font-weight: 600;
  color: #171719;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Scroll Indicator Styles */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  padding: 1rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.scroll-indicator.visible {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.scroll-indicator:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateX(-50%) translateY(-5px);
}

.scroll-indicator:focus {
  outline: 2px solid #ffef5c;
  outline-offset: 2px;
}

.scroll-text {
  font-size: 0.875rem;
  font-weight: 500;
  color: #4a4a4a;
  text-align: center;
  margin-bottom: 0.25rem;
}

.scroll-arrow {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px);
  }
  60% {
    transform: translateY(-4px);
  }
}

/* Mobile Responsive */
@media screen and (max-width: 599px) {
  .hero-text {
    align-items: center;
    text-align: center;
    padding: 1rem;
  }

  .hero-title-container {
    padding: 0.75rem 1.5rem;
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    margin-bottom: 1.5rem;
  }

  .hero-animation {
    padding: 1rem;
  }

  .animation-container {
    height: 300px;
  }

  .hero-content {
    min-height: 100vh;
    padding: 2rem 0 4rem 0;
  }

  .hero-section {
    min-height: 100vh;
    padding: 0;
  }

  .scroll-indicator {
    bottom: 1.5rem;
    padding: 0.75rem;
  }

  .scroll-text {
    font-size: 0.75rem;
  }
}

/* Tablet */
@media screen and (min-width: 600px) and (max-width: 959px) {
  .hero-text {
    padding: 1.5rem;
  }

  .hero-animation {
    padding: 1.5rem;
  }

  .animation-container {
    height: 350px;
  }
}

/* Desktop */
@media screen and (min-width: 960px) {
  .hero-text {
    align-items: flex-end;
    text-align: right;
  }

  .hero-subtitle {
    text-align: right;
  }

  .hero-buttons {
    align-self: flex-end;
  }

  .hero-title-container {
    align-self: flex-end;
  }
}
</style>
