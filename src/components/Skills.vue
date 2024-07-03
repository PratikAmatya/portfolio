<template>
  <v-container>
    <div>
      <span class="sub-title overpass">Skills</span>
      <span style="font-size: 6rem; color: #ffef5c">.</span>
    </div>
    <div>
      <v-row>
        <v-col cols="6" md="3" sm="3" v-for="(skill, i) in skills" :key="i">
          <v-icon color="#2d2a2e" size="22" :icon="skill.icon"></v-icon>
          <span class="overpass ml-1">{{ skill.text }}</span>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    skills: [
      { text: "JavaScript", icon: "mdi-language-javascript" },
      { text: "Node.js", icon: "mdi-nodejs" },
      { text: "Express.js", icon: "mdi-alpha-e-circle" },
      { text: "Sequelize", icon: "mdi-cube-outline" },
      { text: "React", icon: "mdi-react" },
      { text: "React Native", icon: "mdi-react" },
      { text: "Vue.js", icon: "mdi-vuejs" },
      { text: "MySQL", icon: "mdi-database-search" },
    ],
  }),
};
</script>

<style></style>
