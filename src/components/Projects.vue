<template>
  <v-container>
    <div class="projects__title">
      <span class="sub-title overpass">Personal Projects</span>
      <span style="font-size: 6rem; color: #ffef5c">.</span>
    </div>

    <div class="projects">
      <v-row>
        <v-col cols="12" sm="6" v-for="(item, index) in projects" :key="index">
          <v-card
            class="mx-auto elevation-0"
            variant="flat"
            style="
              height: 100%;
              border-left: 4px solid #ffef5c;
              border-radius: 0;
            "
          >
            <v-card-title class="overpass">
              <h3 class="headline font-weight-light" style="font-size: 1.2rem">
                {{ item.title }}
              </h3>
              <div class="ml-n2">
                <v-row no-gutters>
                  <div
                    v-for="(skill, i) in item.technologies"
                    :key="i"
                    class="mt-responsive"
                  >
                    <v-chip class="mr-2 rounded-0">
                      {{ skill }}
                    </v-chip>
                  </div>
                </v-row>
              </div>
            </v-card-title>

            <v-card-text class="inter">
              {{ item.description }}
            </v-card-text>

            <v-card-actions>
              <v-row no-gutters>
                <div
                  v-for="(link, i) in item.links"
                  :key="i"
                  class="mt-responsive"
                >
                  <a :href="link.url" target="_blank" class="mr-2">
                    <v-btn
                      text
                      variant="tonal"
                      :prepend-icon="link.icon"
                      class="text-none text-subtitle-1"
                      style="border-radius: 0"
                    >
                      <span class="inter">{{ link.name }}</span>
                    </v-btn>
                  </a>
                </div>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Kompost API",
          description:
            "a RESTful API created for a composting management system presented at the Ace Ignite 48 hours Hackathon 2022, which allows users to log in, schedule a pickup request, view their pickup history, and check the status of their pickup requests.",
          technologies: ["Express.js", "Sequelize ORM", "MySQL"],
          links: [
            {
              icon: "mdi-github",
              name: "API Repository",
              url: "https://github.com/PratikAmatya/kompost-api",
            },
          ],
        },
        {
          title: "Simple Feedback Form",
          description:
            "This is a Node.js application that verifies the email address provided by the user. The validated email and the feedback are stored in MongoDB.database and a confirmation email to the user notifying them of the feedback received through the SendGrind API.",
          technologies: ["Express.js", "SendGrid API", "MongoDB", "JWT", "EJS"],
          links: [
            {
              icon: "mdi-github",
              name: "App Link",
              url: "https://github.com/PratikAmatya/simple-feedback-form.git",
            },
          ],
        },
        {
          title: "Click Speed Test",
          description:
            " A simple click speed test game created using HTML, CSS, and JavaScript.",
          technologies: ["HTML", "CSS", "JavaScript"],
          links: [
            {
              name: "API Repository",
              icon: "mdi-github",
              url: "https://github.com/PratikAmatya/Click-Speed-Test",
            },
            {
              name: "Deployed App",
              icon: "mdi-application",
              url: "https://pratikamatya.github.io/Click-Speed-Test/",
            },
          ],
        },
        {
          title: "Kipa E-commerce Application",
          description:
            "The application allows customers to browse products, select desired items, add them to a shopping cart, and place orders by providing a delivery address. Additionally, on the admin side, the administrator can perform CRUD functions on product details and view comprehensive information regarding orders received.",
          technologies: ["Express.js", "SendGrid API", "MongoDB", "JWT", "EJS"],
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
        },
      ],
    };
  },
};
</script>

<style></style>
