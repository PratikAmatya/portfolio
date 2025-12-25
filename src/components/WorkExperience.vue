<template>
  <section
    class="work-experience-section"
    aria-labelledby="work-experience-title"
  >
    <v-container>
      <div
        ref="titleRef"
        class="work-experience__title fade-in-up"
        :class="{ visible: titleVisible }"
      >
        <h2 class="sub-title overpass" id="work-experience-title">
          Work Experience<span class="accent-dot" aria-hidden="true">.</span>
        </h2>
      </div>

      <div
        ref="timelineRef"
        class="timeline"
        role="list"
        aria-label="Work experience timeline"
      >
        <v-timeline
          align="start"
          side="end"
          density="compact"
          ref="timelineRef"
        >
          <v-timeline-item
            v-for="(year, i) in years"
            :key="i"
            :dot-color="year.color"
            size="x-small"
            class="stagger-item timeline-item"
            :class="{ visible: isItemVisible(i) }"
            data-stagger-item
            role="listitem"
          >
            <div class="timeline-content">
              <div class="timeline-header">
                <h3 class="timeline-title overpass">
                  {{ year.title }}
                </h3>
                <div class="timeline-organization">
                  {{ year.organization }}
                </div>
              </div>

              <div class="timeline-dates">
                <div class="date-range">
                  <span class="start-date">{{ year.startDate }}</span>
                  <span class="date-separator">—</span>
                  <span
                    class="end-date"
                    :class="{ current: year.endDate === 'Present' }"
                  >
                    {{ year.endDate }}
                  </span>
                </div>
                <div class="duration-badge">
                  {{ year.duration }}
                </div>
              </div>

              <div class="timeline-description">
                <span class="inter">{{ year.description }}</span>
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
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

const { isItemVisible, containerRef: timelineRef } = useStaggeredAnimation({
  staggerDelay: 200,
  threshold: 0.1,
  rootMargin: "0px 0px -20px 0px",
});

const years = [
  {
    color: "#ffef5c",
    startDate: "Oct 2021",
    endDate: "Sept 2025",
    duration: "4 years",
    title: "Software Engineer",
    organization: "Beam Lab Pvt. Ltd.",
    description:
      "Built and deployed web and mobile applications using React.js, Vue.js, and Node.js, designed and implemented RESTful APIs and database schemas for production systems, set up CI/CD pipelines with GitHub Actions to automate testing and deployment, and collaborated with interns and engineers during sprint planning and feature delivery.",
  },
  {
    color: "#ffef5c",
    startDate: "Jun 2021",
    endDate: "Oct 2021",
    duration: "4 months",
    title: "Software Engineer Intern",
    organization: "Beam Lab Pvt. Ltd.",
    description:
      "As an intern, I developed and maintained front-end web applications using React.js and Vue.js, designed mockups with Figma, and assisted in database development and maintenance.",
  },
];

onMounted(() => {
  // Scroll animations are handled by the composables
});
</script>

<style scoped>
.work-experience-section {
  padding: 4rem 0;
  margin: 4rem 0;
  background-color: var(--color-background);
}

.work-experience__title {
  margin-bottom: 3rem;
  text-align: center;
}

.work-experience__title h2 {
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

.timeline {
  max-width: 800px;
  margin: 0 auto;
}

.timeline-item {
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  will-change: transform;
  transform: translate3d(0, 0, 0);
}

.timeline-item:hover {
  transform: translate3d(4px, 0, 0);
  will-change: auto;
}

.timeline-content {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-left: 4px solid #ffef5c;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  will-change: transform;
  transform: translate3d(0, 0, 0);
}

.timeline-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 239, 92, 0.02) 0%,
    rgba(255, 239, 92, 0.05) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.timeline-content:hover {
  transform: translate3d(0, -4px, 0) scale(1.01);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  border-left-width: 6px;
  will-change: auto;
}

.timeline-content:hover::before {
  opacity: 1;
}

.timeline-header {
  margin-bottom: 1rem;
}

.timeline-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #171719;
  margin-bottom: 0.25rem;
  line-height: 1.2;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.timeline-content:hover .timeline-title {
  color: #171719;
  transform: translate3d(4px, 0, 0);
}

.timeline-organization {
  font-size: 1rem;
  font-weight: 500;
  color: #6c757d;
  font-family: "Inter", sans-serif;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.timeline-content:hover .timeline-organization {
  color: #495057;
  transform: translate3d(4px, 0, 0);
}

.timeline-dates {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
  gap: 0.75rem;
  position: relative;
  z-index: 1;
}

.date-range {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Overpass Mono", monospace;
  font-weight: 600;
}

.start-date,
.end-date {
  font-size: 0.95rem;
  color: #495057;
  background: rgba(108, 117, 125, 0.1);
  padding: 0.375rem 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(108, 117, 125, 0.2);
  transition: all 0.3s ease;
}

.timeline-content:hover .start-date,
.timeline-content:hover .end-date:not(.current) {
  background: rgba(108, 117, 125, 0.15);
  border-color: rgba(108, 117, 125, 0.3);
  transform: translate3d(0, -1px, 0);
}

.timeline-content:hover .end-date.current {
  transform: translate3d(0, -1px, 0);
}

.end-date.current {
  background: linear-gradient(135deg, #ffef5c 0%, #f0e04a 100%) !important;
  color: #171719 !important;
  border-color: #ffef5c !important;
  font-weight: 700 !important;
  animation: pulse 2s infinite;
}

.date-separator {
  color: #6c757d;
  font-weight: 400;
  font-size: 1.1rem;
}

.duration-badge {
  background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
  color: #495057;
  padding: 0.375rem 0.875rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: "Inter", sans-serif;
  border: 1px solid rgba(108, 117, 125, 0.15);
  transition: all 0.3s ease;
}

.timeline-content:hover .duration-badge {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  transform: translate3d(0, -1px, 0) scale(1.02);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(255, 239, 92, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(255, 239, 92, 0);
  }
}

.timeline-description {
  color: #4a4a4a;
  line-height: 1.6;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.timeline-content:hover .timeline-description {
  color: #343a40;
  transform: translate3d(4px, 0, 0);
}

/* Mobile Responsive */
@media screen and (max-width: 599px) {
  .work-experience-section {
    padding: 3rem 0;
  }

  .work-experience__title {
    margin-bottom: 2rem;
  }

  .accent-dot {
    font-size: 4rem;
  }

  .timeline-content {
    padding: 1.25rem;
  }

  .timeline-title {
    font-size: 1.1rem;
  }

  .timeline-description {
    font-size: 0.9rem;
  }
}

/* Tablet */
@media screen and (min-width: 600px) and (max-width: 959px) {
  .work-experience-section {
    padding: 3.5rem 0;
  }

  .accent-dot {
    font-size: 5rem;
  }
}
</style>
