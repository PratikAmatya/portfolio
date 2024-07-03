<template>
  <v-container>
    <div class="projects__title" id="contactMe">
      <span class="sub-title overpass">Contact me</span>
      <span style="font-size: 6rem; color: #ffef5c">.</span>
    </div>

    <div class="project-subtitle mb-4 mt-n4">
      <span class="space-grotesk description"
        >Got a project in mind or just want to connect? Hit me up and let's
        chat!</span
      >
    </div>
    <div class="contact-me__form">
      <v-row align="center" class="text-align-left--responsive">
        <v-col cols="auto">
          <a href="mailto:pratikamatya10@gmail.com" target="_blank">
            <v-btn
              color="#ea4335"
              density="default"
              style="border-radius: 50% !important; height: 4rem; width: 4rem"
            >
              <v-icon color="white" size="34">mdi-email</v-icon>
            </v-btn>
          </a>
        </v-col>

        <v-col cols="auto">
          <a href="https://github.com/PratikAmatya" target="_blank">
            <v-btn
              color="#24292E"
              density="default"
              style="border-radius: 50% !important; height: 4rem; width: 4rem"
            >
              <v-icon color="white" size="34">mdi-github</v-icon>
            </v-btn>
          </a>
        </v-col>

        <v-col cols="auto">
          <a href="https://www.linkedin.com/in/pratikamatya/" target="_blank">
            <v-btn
              color="#0077B5"
              density="default"
              style="border-radius: 50% !important; height: 4rem; width: 4rem"
            >
              <v-icon color="white" size="34">mdi-linkedin</v-icon>
            </v-btn>
          </a>
        </v-col>

        <v-col cols="auto">
          <a
            href="https://discordapp.com/users/857988248823791618"
            target="_blank"
          >
            <v-btn
              icon
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
            >
              <v-img src="@/assets/discord.png" alt="Discord" :width="70" />
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

<script>
export default {};
</script>

<style></style>
