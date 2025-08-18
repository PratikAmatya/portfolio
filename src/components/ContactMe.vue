<template>
  <v-container>
    <div
      class="projects__title fade-in-up"
      :class="{ visible: isVisible }"
      id="contactMe"
      ref="containerRef"
    >
      <h2 class="sub-title overpass" id="contact-title">Contact me</h2>
      <span style="font-size: 6rem; color: #ffef5c" aria-hidden="true">.</span>
    </div>

    <div
      class="project-subtitle mb-4 mt-n4 fade-in-up"
      :class="{ visible: isVisible }"
      style="transition-delay: 0.2s"
    >
      <span class="space-grotesk description"
        >Got a project in mind or just want to connect? Hit me up and let's
        chat!</span
      >
    </div>
    <div
      class="contact-me__form fade-in-up"
      :class="{ visible: isVisible }"
      style="transition-delay: 0.4s"
    >
      <v-row
        align="center"
        justify="center"
        class="text-align-left--responsive contact-buttons-row"
        ref="buttonsRef"
      >
        <v-col
          cols="auto"
          class="stagger-item"
          :class="{ visible: isItemVisible(0) }"
          data-stagger-item
        >
          <a
            href="mailto:pratikamatya10@gmail.com"
            target="_blank"
            aria-label="Send email to pratikamatya10@gmail.com"
            rel="noopener noreferrer"
          >
            <v-btn
              color="#ea4335"
              density="default"
              class="contact-btn touch-target"
              style="border-radius: 50% !important; height: 4rem; width: 4rem"
              tabindex="-1"
            >
              <v-icon color="white" size="34" aria-hidden="true"
                >mdi-email</v-icon
              >
            </v-btn>
          </a>
        </v-col>

        <v-col
          cols="auto"
          class="stagger-item"
          :class="{ visible: isItemVisible(1) }"
          data-stagger-item
        >
          <a
            href="https://github.com/PratikAmatya"
            target="_blank"
            aria-label="Visit GitHub profile"
            rel="noopener noreferrer"
          >
            <v-btn
              color="#24292E"
              density="default"
              class="contact-btn touch-target"
              style="border-radius: 50% !important; height: 4rem; width: 4rem"
              tabindex="-1"
            >
              <v-icon color="white" size="34" aria-hidden="true"
                >mdi-github</v-icon
              >
            </v-btn>
          </a>
        </v-col>

        <v-col
          cols="auto"
          class="stagger-item"
          :class="{ visible: isItemVisible(2) }"
          data-stagger-item
        >
          <a
            href="https://www.linkedin.com/in/pratikamatya/"
            target="_blank"
            aria-label="Visit LinkedIn profile"
            rel="noopener noreferrer"
          >
            <v-btn
              color="#0077B5"
              density="default"
              class="contact-btn touch-target"
              style="border-radius: 50% !important; height: 4rem; width: 4rem"
              tabindex="-1"
            >
              <v-icon color="white" size="34" aria-hidden="true"
                >mdi-linkedin</v-icon
              >
            </v-btn>
          </a>
        </v-col>

        <v-col
          cols="auto"
          class="stagger-item"
          :class="{ visible: isItemVisible(3) }"
          data-stagger-item
        >
          <a
            href="https://discordapp.com/users/857988248823791618"
            target="_blank"
            aria-label="Contact on Discord"
            rel="noopener noreferrer"
          >
            <v-btn
              icon
              class="contact-btn touch-target"
              style="
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50% !important;
                height: 4rem;
                width: 4rem;
              "
              variant="flat"
              density="default"
              tabindex="-1"
            >
              <v-img
                src="@/assets/discord.png"
                alt="Discord logo"
                :width="70"
              />
            </v-btn>
          </a>
        </v-col>
      </v-row>
    </div>

    <!-- <div class="contact-me__form">
      <v-form>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Name"
              outlined
              dense
              class="v-field__input"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Email"
              outlined
              dense
              class="v-field__input"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              label="Message"
              outlined
              dense
              class="v-field__input"
            ></v-textarea>
          </v-col>
          <v-col cols="12">
            <v-btn color="#ffef5c" class="text-none" style="font-weight: 600"
              >Send</v-btn
            >
          </v-col>
        </v-row>
      </v-form>
    </div> -->
  </v-container>
</template>

<script setup>
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/composables/useScrollAnimation.js";

const { isVisible, elementRef: containerRef } = useScrollAnimation({
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
});

const { isItemVisible, containerRef: buttonsRef } = useStaggeredAnimation({
  staggerDelay: 150,
  threshold: 0.3,
});
</script>

<style scoped>
.contact-btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}

.contact-btn::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease;
}

.contact-btn:hover::before {
  width: 100px;
  height: 100px;
}

.contact-btn:hover {
  transform: translate3d(0, -6px, 0) scale(1.08) rotate(5deg);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
  will-change: auto;
}

.contact-btn:active {
  transform: translate3d(0, -3px, 0) scale(1.05) rotate(2deg);
  transition-duration: 0.1s;
}

.contact-btn .v-icon,
.contact-btn .v-img {
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.contact-btn:hover .v-icon,
.contact-btn:hover .v-img {
  transform: scale(1.1);
}

.contact-buttons-row {
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
}

.contact-buttons-row .v-col {
  flex: 0 0 auto;
}

/* Mobile Responsive */
@media screen and (max-width: 599px) {
  .contact-buttons-row {
    gap: 0.75rem;
    justify-content: center;
  }

  .contact-btn {
    width: 3.5rem !important;
    height: 3.5rem !important;
  }

  .contact-btn .v-icon {
    font-size: 28px !important;
  }

  .contact-btn .v-img {
    width: 60px !important;
  }
}

/* Tablet */
@media screen and (min-width: 600px) and (max-width: 959px) {
  .contact-buttons-row {
    gap: 0.875rem;
  }

  .contact-btn {
    width: 3.75rem !important;
    height: 3.75rem !important;
  }

  .contact-btn .v-icon {
    font-size: 30px !important;
  }

  .contact-btn .v-img {
    width: 65px !important;
  }
}

/* Desktop */
@media screen and (min-width: 960px) {
  .contact-buttons-row {
    gap: 1.25rem;
  }
}
</style>
