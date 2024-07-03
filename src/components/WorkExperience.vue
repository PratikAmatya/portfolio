<template>
  <v-container>
    <div class="work-experience__title">
      <span class="sub-title overpass">Work Experience</span>
      <span style="font-size: 6rem; color: #ffef5c">.</span>
    </div>

    <div class="timeline">
      <v-timeline align="start" side="end" density="compact">
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :dot-color="year.color"
          size="x-small"
        >
          <div>
            <h3 class="mt-n1 headline font-weight-light overpass">
              {{ year.title }}
            </h3>
            <div
              class="font-weight-bold overpass mb-2"
              v-text="year.year"
            ></div>
            <div>
              <span class="inter">{{ year.description }}</span>
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    years: [
      {
        color: "#ffef5c",
        year: "Oct 2021 - Present",
        title: "Full Stack Developer",
        organization: "Beam Lab Pvt. Ltd.",
        description:
          "My responsibilities include developing and maintaining web and mobile applications with React.js, Vue.js, and React Native. I also design and develop the back-end using Express.js for APIs and manage databases.",
      },
      {
        color: "#ffef5c",
        year: "Jun 2021 - Oct 2021",
        title: "Software Developer Intern",
        organization: "Beam Lab Pvt. Ltd.",
        description:
          "As an intern, I developed and maintained front-end web applications using React.js and Vue.js, designed mockups with Figma, and assisted in database development and maintenance.",
      },
    ],
  }),
};
</script>

<style></style>
