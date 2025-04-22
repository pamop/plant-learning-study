<template>
  <div class="container">
    <h2>Native Plants in Tennessee</h2>
    <iframe
      :src="gameURL"
      width="100%"
      height="600px"
      style="border: 1px solid #ccc; border-radius: 8px"
    ></iframe>
    <p>You will be directed to the post-survey in {{ timeLeft }} seconds.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameURL: "*/game/index.html", // local build from Godot
      timeLeft: 6, // 10 minutes
    };
  },
  mounted() {
    const pid = this.$route.params.pid;
    this.timer = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        clearInterval(this.timer);
        this.$router.push(`/post-survey/${pid}`);
      }
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>
