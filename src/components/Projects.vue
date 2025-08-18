<template>
  <section class="projects-section" aria-labelledby="projects-title">
    <v-container>
      <div class="projects__title fade-in-up visible" ref="containerRef">
        <h2 class="sub-title overpass" id="projects-title">
          Personal Projects<span class="accent-dot" aria-hidden="true">.</span>
        </h2>
      </div>

      <div
        class="projects-subtitle fade-in-up visible"
        style="transition-delay: 0.1s"
      >
        <p class="inter projects-description">
          A collection of projects showcasing my skills in full-stack
          development, from APIs to interactive web applications.
        </p>
      </div>

      <!-- Featured Project -->
      <div
        class="featured-project fade-in-up visible"
        style="transition-delay: 0.2s"
      >
        <div class="featured-card">
          <div class="featured-header">
            <div class="featured-badge">
              <v-icon size="16">mdi-star</v-icon>
              <span>Featured Project</span>
            </div>
            <div class="project-year">{{ featuredProject.year }}</div>
          </div>

          <div class="featured-content">
            <div class="featured-info">
              <h3 class="featured-title headland-one">
                {{ featuredProject.title }}
              </h3>
              <p class="featured-subtitle overpass">
                {{ featuredProject.subtitle }}
              </p>
              <p class="featured-description inter">
                {{ featuredProject.description }}
              </p>

              <div class="featured-features">
                <h4 class="features-title overpass">Key Features</h4>
                <div class="features-grid">
                  <div
                    v-for="(feature, index) in featuredProject.features"
                    :key="index"
                    class="feature-item"
                  >
                    <v-icon size="14" color="#ffef5c">mdi-check-circle</v-icon>
                    <span class="inter">{{ feature }}</span>
                  </div>
                </div>
              </div>

              <div class="featured-tech">
                <v-chip
                  v-for="(tech, i) in featuredProject.technologies"
                  :key="i"
                  class="featured-tech-chip"
                  size="small"
                >
                  {{ tech }}
                </v-chip>
              </div>

              <div class="featured-links">
                <a
                  v-for="(link, i) in featuredProject.links"
                  :key="i"
                  :href="link.url"
                  target="_blank"
                  class="featured-link"
                  :aria-label="`Open ${link.name} for ${featuredProject.title} in new tab`"
                  rel="noopener noreferrer"
                >
                  <v-btn
                    variant="text"
                    :prepend-icon="link.icon"
                    class="text-none featured-btn touch-target"
                    size="large"
                    tabindex="-1"
                  >
                    <span class="inter">{{ link.name }}</span>
                  </v-btn>
                </a>
              </div>
            </div>

            <div class="featured-visual">
              <div class="project-mockup">
                <div class="mockup-browser">
                  <div class="browser-header">
                    <div class="browser-dots">
                      <span class="dot red"></span>
                      <span class="dot yellow"></span>
                      <span class="dot green"></span>
                    </div>
                    <div class="browser-url">
                      {{
                        featuredProject.title.toLowerCase().replace(/\s+/g, "")
                      }}.com
                    </div>
                  </div>
                  <div class="browser-content">
                    <div class="content-placeholder">
                      <v-icon size="80" color="#ffef5c">mdi-shopping</v-icon>
                      <div class="placeholder-text">
                        <div class="placeholder-line long"></div>
                        <div class="placeholder-line medium"></div>
                        <div class="placeholder-line short"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Projects Carousel -->
      <div
        class="other-projects fade-in-up visible"
        style="transition-delay: 0.4s"
      >
        <h3 class="other-projects-title overpass" id="other-projects-title">
          Other Projects
        </h3>

        <div
          class="carousel-container"
          @mouseenter="stopAutoPlay"
          @mouseleave="startAutoPlay"
        >
          <div
            class="carousel-track"
            :style="{ transform: `translateX(-${currentProject * 100}%)` }"
          >
            <div
              v-for="(project, index) in otherProjects"
              :key="index"
              class="carousel-slide"
              role="tabpanel"
              :id="`project-${index}`"
              :aria-hidden="currentProject !== index"
            >
              <div class="carousel-card">
                <div class="carousel-header">
                  <div
                    class="project-status"
                    :class="project.status.toLowerCase().replace(/\s+/g, '-')"
                  >
                    {{ project.status }}
                  </div>
                  <div class="project-year">{{ project.year }}</div>
                </div>

                <h4 class="carousel-title overpass">{{ project.title }}</h4>
                <p class="carousel-description inter">
                  {{ project.description }}
                </p>

                <div class="carousel-tech">
                  <v-chip
                    v-for="(tech, i) in project.technologies"
                    :key="i"
                    class="carousel-tech-chip"
                    size="x-small"
                  >
                    {{ tech }}
                  </v-chip>
                </div>

                <div class="carousel-links">
                  <a
                    v-for="(link, i) in project.links"
                    :key="i"
                    :href="link.url"
                    target="_blank"
                    class="carousel-link"
                    :aria-label="`Open ${link.name} for ${project.title} in new tab`"
                    rel="noopener noreferrer"
                  >
                    <v-btn
                      variant="text"
                      :prepend-icon="link.icon"
                      class="text-none carousel-btn touch-target"
                      size="small"
                      tabindex="-1"
                    >
                      {{ link.name }}
                    </v-btn>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="carousel-indicators"
            role="tablist"
            aria-label="Project navigation"
          >
            <button
              v-for="(project, index) in otherProjects"
              :key="index"
              class="indicator touch-target"
              :class="{ active: currentProject === index }"
              @click="goToProject(index)"
              role="tab"
              :aria-selected="currentProject === index"
              :aria-controls="`project-${index}`"
              :aria-label="`View ${project.title} project`"
            >
              <span class="indicator-label">{{ project.title }}</span>
            </button>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const containerRef = ref(null);
const projectsRef = ref(null);

const currentProject = ref(0);
const isAutoPlaying = ref(true);
let autoPlayInterval = null;

const featuredProject = {
  title: "Kipa E-commerce Application",
  subtitle: "Full-Stack E-commerce Platform",
  description:
    "A comprehensive e-commerce solution featuring customer shopping experience and admin management dashboard. Built with modern web technologies and scalable architecture.",
  longDescription:
    "The application allows customers to browse products, select desired items, add them to a shopping cart, and place orders by providing a delivery address. Additionally, on the admin side, the administrator can perform CRUD functions on product details and view comprehensive information regarding orders received.",
  technologies: [
    "Express.js",
    "SendGrid API",
    "MongoDB",
    "JWT",
    "EJS",
    "React",
  ],
  features: [
    "User Authentication & Authorization",
    "Product Catalog Management",
    "Shopping Cart & Checkout",
    "Order Management System",
    "Admin Dashboard",
    "Email Notifications",
  ],
  links: [
    {
      name: "API Repository",
      icon: "mdi-github",
      url: "https://github.com/PratikAmatya/Shopping-API",
    },
    {
      name: "React App Repository",
      icon: "mdi-github",
      url: "https://github.com/PratikAmatya/Shopping-React-App",
    },
  ],
  status: "Production Ready",
  year: "2023",
};

const otherProjects = [
  {
    title: "Kompost API",
    description:
      "A RESTful API for composting management system presented at Ace Ignite 48 hours Hackathon 2022. Features user authentication, pickup scheduling, and request tracking.",
    technologies: ["Express.js", "Sequelize ORM", "MySQL"],
    links: [
      {
        icon: "mdi-github",
        name: "Repository",
        url: "https://github.com/PratikAmatya/kompost-api",
      },
    ],
    status: "Hackathon Winner",
    year: "2022",
  },
  {
    title: "Simple Feedback Form",
    description:
      "Node.js application with email verification system. Stores validated feedback in MongoDB and sends confirmation emails via SendGrid API.",
    technologies: ["Express.js", "SendGrid API", "MongoDB", "JWT", "EJS"],
    links: [
      {
        icon: "mdi-github",
        name: "Repository",
        url: "https://github.com/PratikAmatya/simple-feedback-form.git",
      },
    ],
    status: "Complete",
    year: "2022",
  },
  {
    title: "Click Speed Test",
    description:
      "Interactive browser game testing user's clicking speed. Built with vanilla JavaScript featuring real-time scoring and responsive design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        name: "Repository",
        icon: "mdi-github",
        url: "https://github.com/PratikAmatya/Click-Speed-Test",
      },
      {
        name: "Live Demo",
        icon: "mdi-application",
        url: "https://pratikamatya.github.io/Click-Speed-Test/",
      },
    ],
    status: "Live",
    year: "2021",
  },
];

const startAutoPlay = () => {
  if (autoPlayInterval) clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(() => {
    if (isAutoPlaying.value) {
      currentProject.value = (currentProject.value + 1) % otherProjects.length;
    }
  }, 4000);
};

const stopAutoPlay = () => {
  isAutoPlaying.value = false;
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  }
};

const goToProject = (index) => {
  currentProject.value = index;
  stopAutoPlay();
  setTimeout(() => {
    isAutoPlaying.value = true;
    startAutoPlay();
  }, 8000);
};

onMounted(() => {
  setTimeout(() => {
    if (containerRef.value) {
      const elements = containerRef.value.querySelectorAll(
        ".fade-in-up, .stagger-item"
      );
      elements.forEach((el) => el.classList.add("visible"));
    }
  }, 100);

  // Start auto-play for carousel
  startAutoPlay();
});

onUnmounted(() => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
  }
});
</script>

<style scoped>
.projects-section {
  padding: 4rem 0;
  margin: 4rem 0;
  background-color: var(--color-background);
  position: relative;
}

.projects-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 25% 25%,
      rgba(255, 239, 92, 0.03) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 75% 75%,
      rgba(255, 239, 92, 0.02) 0%,
      transparent 50%
    );
  pointer-events: none;
}

.projects__title {
  text-align: center;
  margin-bottom: 1rem;
}

.projects__title h2 {
  white-space: nowrap;
  display: inline-block;
}

.projects-subtitle {
  text-align: center;
  margin-bottom: 3rem;
}

.projects-description {
  font-size: 1.1rem;
  color: #6c757d;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.accent-dot {
  font-size: 6rem;
  color: #ffef5c;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(255, 239, 92, 0.3);
  white-space: nowrap;
  display: inline-block;
}

/* Featured Project Styles */
.featured-project {
  margin-bottom: 4rem;
}

.featured-card {
  background: linear-gradient(145deg, #ffffff 0%, #fafafa 100%);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 239, 92, 0.15);
  position: relative;
  overflow: hidden;
}

.featured-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, #ffef5c 0%, #f0e04a 50%, #ffef5c 100%);
}

.featured-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.featured-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #ffef5c 0%, #f0e04a 100%);
  color: #171719;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 2px 8px rgba(255, 239, 92, 0.3);
}

.project-year {
  background: rgba(108, 117, 125, 0.1);
  color: #6c757d;
  padding: 0.375rem 0.75rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.85rem;
}

.featured-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.featured-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #171719;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.featured-subtitle {
  font-size: 1.2rem;
  color: #6c757d;
  font-weight: 600;
  margin-bottom: 1rem;
}

.featured-description {
  font-size: 1.1rem;
  color: #4a4a4a;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.featured-features {
  margin-bottom: 2rem;
}

.features-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #171719;
  margin-bottom: 1rem;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #495057;
}

.featured-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.featured-tech-chip {
  background: #f8f9fa !important;
  color: #495057 !important;
  font-weight: 500 !important;
  font-size: 0.8rem !important;
  border-radius: 16px !important;
  border: 1px solid #e9ecef !important;
  transition: all 0.3s ease;
  padding: 0.4rem 0.8rem !important;
  height: auto !important;
  box-shadow: none !important;
  text-transform: none;
  letter-spacing: normal;
}

.featured-tech-chip {
  will-change: transform;
}

.featured-tech-chip:hover {
  background: #e9ecef !important;
  color: #343a40 !important;
  transform: translate3d(0, -1px, 0);
  border-color: #dee2e6 !important;
  will-change: auto;
}

.featured-links {
  display: flex;
  gap: 1rem;
}

.featured-link {
  text-decoration: none;
}

.featured-btn {
  color: #171719 !important;
  font-weight: 500 !important;
  transition: all 0.3s ease !important;
  padding: 0.75rem 1.5rem !important;
  will-change: transform;
}

.featured-btn:hover {
  background: rgba(255, 239, 92, 0.1) !important;
  color: #171719 !important;
  transform: translate3d(0, -1px, 0);
  will-change: auto;
}

/* Project Mockup */
.featured-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-mockup {
  width: 100%;
  max-width: 400px;
}

.mockup-browser {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  border: 1px solid #e9ecef;
}

.browser-header {
  background: #f8f9fa;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #e9ecef;
}

.browser-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red {
  background: #ff5f57;
}
.dot.yellow {
  background: #ffbd2e;
}
.dot.green {
  background: #28ca42;
}

.browser-url {
  background: #ffffff;
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  font-size: 0.85rem;
  color: #6c757d;
  border: 1px solid #e9ecef;
  flex: 1;
}

.browser-content {
  padding: 2rem;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-placeholder {
  text-align: center;
}

.placeholder-text {
  margin-top: 1rem;
}

.placeholder-line {
  height: 8px;
  background: #e9ecef;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.placeholder-line.long {
  width: 120px;
}
.placeholder-line.medium {
  width: 80px;
}
.placeholder-line.short {
  width: 60px;
}

/* Carousel Styles */
.other-projects {
  margin-top: 4rem;
}

.other-projects-title {
  font-size: 2rem;
  font-weight: 600;
  color: #171719;
  text-align: center;
  margin-bottom: 2rem;
}

.carousel-container {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

.carousel-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-slide {
  min-width: 100%;
  padding: 2rem;
}

.carousel-card {
  max-width: 600px;
  margin: 0 auto;
}

.carousel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.project-status {
  padding: 0.375rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.project-status.hackathon-winner {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  color: white;
}

.project-status.complete {
  background: linear-gradient(135deg, #51cf66 0%, #40c057 100%);
  color: white;
}

.project-status.live {
  background: linear-gradient(135deg, #339af0 0%, #228be6 100%);
  color: white;
}

.project-status.production-ready {
  background: linear-gradient(135deg, #ffef5c 0%, #f0e04a 100%);
  color: #171719;
}

.carousel-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #171719;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.carousel-description {
  font-size: 1.05rem;
  color: #4a4a4a;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.carousel-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.carousel-tech-chip {
  background: #f1f3f4 !important;
  color: #5f6368 !important;
  font-weight: 500 !important;
  font-size: 0.75rem !important;
  border-radius: 12px !important;
  border: 1px solid #e8eaed !important;
  padding: 0.3rem 0.6rem !important;
  height: auto !important;
  box-shadow: none !important;
  text-transform: none;
  letter-spacing: normal;
  transition: all 0.3s ease;
}

.carousel-tech-chip:hover {
  background: #e8eaed !important;
  color: #3c4043 !important;
  transform: translate3d(0, -1px, 0);
  border-color: #dadce0 !important;
}

.carousel-links {
  display: flex;
  gap: 1rem;
}

.carousel-link {
  text-decoration: none;
}

.carousel-btn {
  color: #171719 !important;
  font-weight: 500 !important;
}

.carousel-btn:hover {
  background: rgba(255, 239, 92, 0.1) !important;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  padding: 1rem;
  background: #f8f9fa;
  gap: 0.5rem;
}

.indicator {
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #6c757d;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-height: 44px;
  min-width: 44px;
}

.indicator.active {
  background: #ffef5c;
  color: #171719;
  font-weight: 600;
}

.indicator:hover:not(.active) {
  background: rgba(255, 239, 92, 0.2);
  color: #171719;
}

.indicator-label {
  font-size: 0.75rem;
  white-space: nowrap;
}

/* Responsive Design */
@media (max-width: 599px) {
  .projects-section {
    padding: 3rem 0;
  }

  .projects__title {
    margin-bottom: 2rem;
  }

  .accent-dot {
    font-size: 4rem;
  }

  .featured-card {
    padding: 1.5rem;
  }

  .featured-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .featured-title {
    font-size: 2rem;
  }

  .featured-subtitle {
    font-size: 1rem;
  }

  .featured-description {
    font-size: 1rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .featured-links {
    flex-direction: column;
    gap: 0.75rem;
  }

  .featured-btn {
    width: 100%;
    justify-content: center;
  }

  .other-projects-title {
    font-size: 1.5rem;
  }

  .carousel-slide {
    padding: 1.5rem;
  }

  .carousel-title {
    font-size: 1.4rem;
  }

  .carousel-description {
    font-size: 0.95rem;
  }

  .carousel-links {
    flex-direction: column;
    gap: 0.5rem;
  }

  .indicator {
    padding: 0.375rem 0.75rem;
    font-size: 0.7rem;
  }

  .indicator-label {
    font-size: 0.65rem;
  }
}

@media (min-width: 600px) and (max-width: 959px) {
  .projects-section {
    padding: 3.5rem 0;
  }

  .accent-dot {
    font-size: 5rem;
  }

  .featured-content {
    gap: 2rem;
  }

  .featured-title {
    font-size: 2.2rem;
  }

  .carousel-slide {
    padding: 1.75rem;
  }
}

@media (min-width: 960px) and (max-width: 1263px) {
  .featured-content {
    gap: 2.5rem;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .featured-card,
  .featured-btn,
  .featured-tech-chip,
  .carousel-track,
  .social-link,
  .indicator {
    transition: none !important;
    will-change: auto !important;
  }

  .featured-btn:hover,
  .featured-tech-chip:hover,
  .social-link:hover {
    transform: translate3d(0, 0, 0) !important;
  }

  .carousel-track {
    transition: none !important;
  }
}
</style>
