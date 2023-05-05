<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button class="btn btn-primary" @click="goToDaybook()">Primary</button>
    <button class="btn btn-secondary">Scondary</button>
    <button class="btn btn-success">Success</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods: {
    goToDaybook() {
      this.$router.push("daybook");
    },
  },
};
</script>
