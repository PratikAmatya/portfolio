<template>
  <v-container>
    <v-row no-gutters class="about-me__container">
      <v-col
        class="order-last order-sm-first no-gutters about-me-info__container"
        cols="12"
        md="6"
        sm="6"
      >
        <div class="about-me-title__container">
          <h1 class="headland-one title">Hi, I'm Pratik</h1>
        </div>

        <h2
          class="overpass sub-title pr-responsive mt-responsive"
          style="text-align: center !important"
        >
          a Web Developer
        </h2>

        <div class="pr-responsive mt-responsive">
          <v-row>
            <v-col>
              <v-btn
                block
                rounded="lg"
                :ripple="true"
                size="x-large"
                density="comfortable"
                color="grey-darken-4"
                class="text-none"
                variant="flat"
                style="width: 8em"
                href="#contactMe"
              >
                <span style="color: #f7f7f9 !important" class="space-grotesk">
                  Contact me
                </span>
              </v-btn>
            </v-col>
            <v-col>
              <a
                href="https://drive.google.com/file/d/1cIvACbzDUd1si_qeeJfpSlVWbRfgxKuS/view"
                target="_blank"
              >
                <v-btn
                  block
                  rounded="lg"
                  :ripple="true"
                  size="x-large"
                  density="comfortable"
                  color="grey-darken-4"
                  class="text-none"
                  variant="flat"
                  style="width: 10em"
                >
                  <span style="color: #f7f7f9 !important" class="space-grotesk">
                    See My Resume
                  </span>
                </v-btn>
              </a>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col style="display: flex; justify-content: start; align-items: center">
        <Vue3Lottie
          :animationData="boyAvatarJSON"
          :height="400"
          :width="400"
          :loop="false"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";

import boyAvatarJSON from "@/assets/boyAvatarJSON.json";

export default {
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      boyAvatarJSON,
    };
  },
};
</script>

<style>
.about-me-title__container {
  padding-right: 2rem;
  padding-left: 2.5rem;
  background-color: #ffef5c;
}

.about-me-info__container {
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
}

/* On screens that are 600px wide or less, the background color is olive */
@media screen and (max-width: 600px) {
  .about-me-info__container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .about-me-title__container {
    padding: 0rem;
  }
}
</style>
