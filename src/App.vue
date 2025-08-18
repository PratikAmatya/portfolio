<template>
  <v-app>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <v-main>
      <div class="main--container" id="main-content">
        <AboutMe />
        <WorkExperience />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import AboutMe from "@/components/AboutMe.vue";
import WorkExperience from "./components/WorkExperience.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
/* ↓↓↓ CSS CUSTOM PROPERTIES ↓↓↓ */
:root {
  /* Color System */
  --color-primary: #ffef5c;
  --color-text-primary: #171719;
  --color-text-secondary: #4a4a4a;
  --color-background: #f7f7f9;
  --color-surface: #ffffff;
  --color-selection-bg: #ffef5c;
  --color-selection-text: #000000c9;

  /* Typography Scale - Mobile First */
  --font-size-xs: 0.75rem; /* 12px */
  --font-size-sm: 0.875rem; /* 14px */
  --font-size-base: 1rem; /* 16px */
  --font-size-lg: 1.125rem; /* 18px */
  --font-size-xl: 1.25rem; /* 20px */
  --font-size-2xl: 1.5rem; /* 24px */
  --font-size-3xl: 1.875rem; /* 30px */
  --font-size-4xl: 2.25rem; /* 36px */
  --font-size-5xl: 3rem; /* 48px */
  --font-size-6xl: 3.75rem; /* 60px */

  /* Title Sizes - Responsive */
  --title-size: 1.6rem;
  --subtitle-size: 1.4rem;
  --description-size: 1.2rem;

  /* Spacing System */
  --spacing-xs: 0.25rem; /* 4px */
  --spacing-sm: 0.5rem; /* 8px */
  --spacing-md: 1rem; /* 16px */
  --spacing-lg: 1.5rem; /* 24px */
  --spacing-xl: 2rem; /* 32px */
  --spacing-2xl: 3rem; /* 48px */
  --spacing-3xl: 4rem; /* 64px */

  /* Letter Spacing */
  --letter-spacing-tight: -0.025em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.025em;
  --letter-spacing-wider: 0.05em;
  --letter-spacing-widest: 0.1em;
  --letter-spacing-title: 0.5rem;

  /* Line Heights */
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;
  --line-height-loose: 2;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  /* Transitions */
  --transition-fast: 0.15s ease-in-out;
  --transition-normal: 0.3s ease-in-out;
  --transition-slow: 0.5s ease-in-out;

  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
}

/* Responsive Typography Scaling */
@media screen and (min-width: 600px) {
  :root {
    --title-size: 2rem;
    --subtitle-size: 1.7rem;
    --description-size: 1.4rem;
    --letter-spacing-title: 0.625rem;
  }
}

@media screen and (min-width: 960px) {
  :root {
    --title-size: 2.5rem;
    --subtitle-size: 2rem;
    --description-size: 1.5rem;
    --letter-spacing-title: 0.5rem;
  }
}

@media screen and (min-width: 1264px) {
  :root {
    --title-size: 3rem;
    --subtitle-size: 2.4rem;
    --description-size: 1.6rem;
    --letter-spacing-title: 0.5rem;
  }
}

@media screen and (min-width: 1904px) {
  :root {
    --title-size: 3.5rem;
    --subtitle-size: 2.8rem;
    --description-size: 1.8rem;
    --letter-spacing-title: 0.5rem;
  }
}

/* ↓↓↓ GLOBAL RESET AND BASE STYLES ↓↓↓ */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--color-text-primary);
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body,
html {
  background-color: var(--color-background);
  scroll-behavior: smooth;
  line-height: var(--line-height-normal);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

/* ↓↓↓ FONT WEIGHT ↓↓↓ */
.regular {
  font-weight: 400 !important;
}

.text-align-right-responsive {
  justify-content: start;
}

.text-align-left--responsive {
  text-align: left;
}
.medium {
  font-weight: 500 !important;
}

.semi-bold {
  font-weight: 600 !important;
}

.bold {
  font-weight: 700 !important;
}

.v-field__input {
  border: none !important;
}

/* ↓↓↓ selectors for different page views ↓↓↓ */

.about-me-container,
.register-container,
.support-container {
  height: 8vh !important;
  margin: 0px !important;
  padding: 0px !important;
}

/* ↓↓↓ RESPONSIVE TYPOGRAPHY CLASSES ↓↓↓ */
.title {
  font-size: var(--title-size) !important;
  letter-spacing: var(--letter-spacing-title) !important;
  font-weight: 500 !important;
  line-height: var(--line-height-tight);
  transition: font-size var(--transition-normal);
}

.sub-title {
  font-weight: 600;
  font-size: var(--subtitle-size);
  line-height: var(--line-height-tight);
  transition: font-size var(--transition-normal);
}

.description {
  font-size: var(--description-size);
  line-height: var(--line-height-normal);
  transition: font-size var(--transition-normal);
}

/* ↓↓↓ RESPONSIVE LAYOUT AND SPACING ↓↓↓ */
.main--container {
  width: 100%;
  margin-inline: auto;
  padding: 0 var(--spacing-md);
  transition: all var(--transition-normal);
}

.mt-responsive {
  margin-top: var(--spacing-lg);
  transition: margin-top var(--transition-normal);
}

/* Tablet Portrait and up */
@media screen and (min-width: 600px) {
  .main--container {
    width: 90%;
    padding: 0 var(--spacing-lg);
  }

  .mt-responsive {
    margin-top: var(--spacing-md);
  }
}

/* Tablet Landscape and up */
@media screen and (min-width: 960px) {
  .main--container {
    width: 85%;
    padding: 0 var(--spacing-xl);
  }
}

/* Desktop and up */
@media screen and (min-width: 1264px) {
  .main--container {
    width: 80%;
    max-width: 1200px;
    padding: 0 var(--spacing-2xl);
  }
}

/* Large Desktop */
@media screen and (min-width: 1904px) {
  .main--container {
    width: 75%;
    max-width: 1400px;
  }
}

/* ↓↓↓ ENHANCED SELECTION STYLING ↓↓↓ */
::selection {
  color: var(--color-selection-text);
  background-color: var(--color-selection-bg);
  text-shadow: none;
}

::-moz-selection {
  color: var(--color-selection-text);
  background-color: var(--color-selection-bg);
  text-shadow: none;
}

/* ↓↓↓ MOBILE RESPONSIVE OVERRIDES ↓↓↓ */
@media screen and (max-width: 599px) {
  .pr-responsive {
    padding-right: var(--spacing-xs);
  }

  .mt-responsive {
    margin-top: var(--spacing-xs);
  }

  .text-align-left--responsive {
    justify-content: center;
  }

  .text-align-right-responsive {
    text-align: center;
  }

  .main--container {
    padding: 0 var(--spacing-sm);
  }
}
/* ↓↓↓ TYPOGRAPHY ↓↓↓ */

.inter {
  font-family: "Inter", sans-serif !important;
}

.merriweather {
  font-family: "Merriweather", serif !important;
}

.overpass {
  font-family: "Overpass Mono", monospace !important;
}

.space-grotesk {
  font-family: "Space Grotesk", sans-serif !important;
}

.headland-one {
  font-family: "Headland One", serif !important;
}

/* ↓↓↓ ENHANCED FOCUS AND INTERACTION STATES ↓↓↓ */
*:focus {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

*:focus:not(:focus-visible) {
  outline: none;
}

*:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
  box-shadow: 0 0 0 1px rgba(23, 23, 25, 0.1);
}

/* Enhanced focus for interactive elements */
button:focus-visible,
a:focus-visible,
.v-btn:focus-visible {
  outline: 3px solid var(--color-primary) !important;
  outline-offset: 2px !important;
  box-shadow: 0 0 0 1px rgba(23, 23, 25, 0.1) !important;
}

/* Ensure minimum touch target size */
.touch-target {
  min-width: 44px;
  min-height: 44px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  :root {
    --color-text-primary: #000000;
    --color-text-secondary: #000000;
    --color-background: #ffffff;
  }

  .hero-title-container {
    border: 2px solid #000000;
  }

  .skill-item,
  .timeline-content,
  .featured-card {
    border: 2px solid #000000;
  }
}

/* ↓↓↓ UTILITY CLASSES ↓↓↓ */
.text-primary {
  color: var(--color-text-primary) !important;
}

.text-secondary {
  color: var(--color-text-secondary) !important;
}

.bg-primary {
  background-color: var(--color-primary) !important;
}

.bg-surface {
  background-color: var(--color-surface) !important;
}

.transition-all {
  transition: all var(--transition-normal);
}

.transition-fast {
  transition: all var(--transition-fast);
}

.transition-slow {
  transition: all var(--transition-slow);
}

/* ↓↓↓ SKIP LINK ↓↓↓ */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--color-primary);
  color: var(--color-text-primary);
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  z-index: 9999;
  transition: top 0.3s ease;
}

.skip-link:focus {
  top: 6px;
  outline: 3px solid var(--color-text-primary);
  outline-offset: 2px;
}

/* ↓↓↓ ANIMATION PERFORMANCE OPTIMIZATIONS ↓↓↓ */
.will-change-transform {
  will-change: transform;
}

.will-change-opacity {
  will-change: opacity;
}

.will-change-auto {
  will-change: auto;
}

.transform-gpu {
  transform: translate3d(0, 0, 0);
}

/* Apply performance optimizations to animated elements */
.fade-in-up,
.fade-in,
.slide-in-left,
.slide-in-right,
.scale-in,
.stagger-item {
  will-change: transform, opacity;
  transform: translate3d(0, 0, 0);
}

.fade-in-up.visible,
.fade-in.visible,
.slide-in-left.visible,
.slide-in-right.visible,
.scale-in.visible,
.stagger-item.visible {
  will-change: auto;
}

/* ↓↓↓ SCROLL ANIMATION CLASSES ↓↓↓ */
.fade-in-up {
  opacity: 0;
  transform: translate3d(0, 30px, 0);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in-up.visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.fade-in {
  opacity: 0;
  transform: translate3d(0, 0, 0);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in.visible {
  opacity: 1;
}

.slide-in-left {
  opacity: 0;
  transform: translate3d(-30px, 0, 0);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-in-left.visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.slide-in-right {
  opacity: 0;
  transform: translate3d(30px, 0, 0);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-in-right.visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.scale-in {
  opacity: 0;
  transform: translate3d(0, 0, 0) scale(0.9);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.scale-in.visible {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
}

/* Staggered animation utilities */
.stagger-item {
  opacity: 0;
  transform: translate3d(0, 20px, 0);
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.stagger-item.visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

/* ↓↓↓ ACCESSIBILITY IMPROVEMENTS ↓↓↓ */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
    will-change: auto !important;
  }

  .fade-in-up,
  .fade-in,
  .slide-in-left,
  .slide-in-right,
  .scale-in,
  .stagger-item {
    opacity: 1 !important;
    transform: translate3d(0, 0, 0) !important;
    transition: none !important;
    will-change: auto !important;
  }

  /* Disable hover animations */
  .hero-btn:hover,
  .contact-btn:hover,
  .skill-item:hover,
  .timeline-content:hover,
  .project-card:hover,
  .featured-btn:hover,
  .social-link:hover {
    transform: none !important;
    transition: none !important;
  }

  /* Disable floating animations */
  @keyframes float {
    0%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(0, 0, 0);
    }
  }

  /* Disable pulse animations */
  @keyframes pulse {
    0%,
    50%,
    100% {
      box-shadow: none;
    }
  }
}

/* ↓↓↓ PRINT STYLES ↓↓↓ */
@media print {
  * {
    background: transparent !important;
    color: black !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
}
</style>
