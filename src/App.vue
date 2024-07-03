<template>
  <v-app>
    <v-main>
      <div class="main--container">
        <AboutMe />
        <WorkExperience />
        <Skills />
        <Projects />
        <ContactMe />
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
import ContactMe from "./components/ContactMe.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #171719;
}
body,
html {
  background-color: #f7f7f9;
  scroll-behavior: smooth;
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

.title {
  font-size: 3rem !important;
  letter-spacing: 8px !important;
  font-weight: 500 !important;
}

.sub-title {
  font-weight: 600;
  font-size: 2.4rem;
}

.description {
  font-size: 1.4rem;
}

/* On screens that are 992px wide or less, the background color is blue */
@media screen and (max-width: 992px) {
  .title {
    font-size: 2rem !important;
    letter-spacing: 10px !important;
  }

  .sub-title {
    font-weight: 600;
    font-size: 1.7rem;
  }

  .description {
    font-size: 1.2rem;
  }
}

.mt-responsive {
  margin-top: 0.9em;
}

@media screen and (min-width: 600px) {
  .mt-responsive {
    margin-top: 0.6em;
  }

  .main--container {
    width: 80%;
    margin-inline: auto;
  }
}

.mt-responsive {
  margin-top: 0.9em;
}

::selection {
  color: #000000c9;
  background-color: #ffef5c;
}
/* On screens that are 600px wide or less, the background color is olive */
@media screen and (max-width: 600px) {
  .title {
    font-size: 1.6rem !important;
    letter-spacing: 10px !important;
  }

  .sub-title {
    font-weight: 600;
    font-size: 1.4rem;
  }

  .pr-responsive {
    padding-right: 0.2em;
  }

  .mt-responsive {
    margin-top: 0.2em;
  }

  .text-align-left--responsive {
    justify-content: center;
  }

  .text-align-right-responsive {
    text-align: center;
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
</style>
