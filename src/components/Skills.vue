<template>
  <section class="skills-section" aria-labelledby="skills-title">
    <v-container>
      <div
        ref="titleRef"
        class="skills-title fade-in-up"
        :class="{ visible: titleVisible }"
      >
        <h2 class="sub-title overpass" id="skills-title">
          Skills<span class="accent-dot" aria-hidden="true">.</span>
        </h2>
      </div>
      <div
        ref="skillsRef"
        class="skills-grid"
        role="list"
        aria-label="Technical skills"
      >
        <div
          v-for="(skill, i) in skills"
          :key="i"
          class="skill-item stagger-item touch-target"
          :class="{ visible: isItemVisible(i) }"
          data-stagger-item
          role="listitem"
          :aria-label="`${skill.text} skill`"
        >
          <v-icon
            color="#171719"
            size="28"
            :icon="skill.icon"
            class="skill-icon"
            :aria-label="`${skill.text} icon`"
          ></v-icon>
          <span class="overpass skill-text">{{ skill.text }}</span>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/composables/useScrollAnimation.js";

// Scroll animations
const { isVisible: titleVisible, elementRef: titleRef } = useScrollAnimation({
  threshold: 0.1,
  rootMargin: "0px 0px -20px 0px",
});

const { isItemVisible, containerRef: skillsRef } = useStaggeredAnimation({
  staggerDelay: 150,
  threshold: 0.1,
  rootMargin: "0px 0px -20px 0px",
});

const skills = [
  { text: "JavaScript", icon: "mdi-language-javascript" },
  { text: "React.js", icon: "mdi-react" },
  { text: "Vue.js", icon: "mdi-vuejs" },
  { text: "Node.js", icon: "mdi-nodejs" },
  { text: "Express.js", icon: "mdi-server" },
  { text: "MySQL", icon: "mdi-database" },
  { text: "Docker", icon: "mdi-docker" },
  { text: "GitHub Actions", icon: "mdi-github" },
];

onMounted(() => {
  // Scroll animations are handled by the composables
});
</script>

<style scoped>
.skills-section {
  padding: 4rem 0;
  margin: 4rem 0;
  background-color: var(--color-background);
}

.skills-title {
  text-align: center;
  margin-bottom: 3rem;
}

.skills-title h2 {
  white-space: nowrap;
  display: inline-block;
}

.accent-dot {
  font-size: 6rem;
  color: #ffef5c;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(255, 239, 92, 0.3);
  white-space: nowrap;
  display: inline-block;
}

.skills-grid {
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  justify-items: center;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  width: 100%;
  max-width: 150px;
  min-height: 130px;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  will-change: transform;
  transform: translate3d(0, 0, 0);
}

.skill-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 239, 92, 0.1) 0%,
    rgba(255, 239, 92, 0.05) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.skill-item:hover {
  transform: translate3d(0, -6px, 0) scale(1.02);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  border-color: #ffef5c;
  will-change: auto;
}

.skill-item:hover::before {
  opacity: 1;
}

.skill-icon {
  margin-bottom: 0.75rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
}

.skill-item:hover .skill-icon {
  transform: scale(1.15) rotate(5deg);
  color: #ffef5c !important;
  filter: drop-shadow(0 2px 4px rgba(255, 239, 92, 0.3));
}

.skill-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: #171719;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  line-height: 1.2;
}

.skill-item:hover .skill-text {
  color: #171719;
  transform: translate3d(0, -2px, 0);
  font-weight: 700;
}

/* Mobile Responsive */
@media screen and (max-width: 599px) {
  .skills-section {
    padding: 3rem 0;
  }

  .skills-title {
    margin-bottom: 2rem;
  }

  .accent-dot {
    font-size: 4rem;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .skill-item {
    padding: 1.25rem 0.75rem;
    max-width: 130px;
    min-height: 120px;
  }

  .skill-text {
    font-size: 0.85rem;
  }
}

/* Tablet */
@media screen and (min-width: 600px) and (max-width: 959px) {
  .skills-section {
    padding: 3.5rem 0;
  }

  .accent-dot {
    font-size: 5rem;
  }

  .skills-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }

  .skill-item {
    max-width: 140px;
    min-height: 125px;
  }
}

/* Desktop */
@media screen and (min-width: 960px) {
  .skill-item {
    max-width: 150px;
    min-height: 130px;
  }
}
</style>
