<template>
  <div>
    <h2>Welcome to our study about native plant species in Tennessee.</h2>
    <p>This study takes about 15 minutes. Click below to begin.</p>
    <button @click="start">Start</button>
  </div>
</template>

<script>
export default {
  methods: {
    start() {
      const pid = crypto.randomUUID();
      this.$router.push(`/pre-survey/${pid}`);
    },
  },
};
</script>
