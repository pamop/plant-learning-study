<template>
  <div class="container">
    <h2>Tennessee Native Plants</h2>
    <iframe
      :src="gameURL"
      width="100%"
      height="600px"
      style="border: 1px solid #ccc; border-radius: 8px"
    ></iframe>
    <div class="time-remaining">
      <p>Time remaining:</p>
      <div class="progress-wrapper">
        <div class="progress-bar" :style="{ width: `${progressWidth}%` }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameURL: "*/game/index.html", // local build from Godot
      totalTime: 6, // in seconds // 10 minutes = 600 seconds // TODO: Update to 600 seconds after testing
      timeLeft: 6, // 10 minutes = 600 seconds
    };
  },
  computed: {
    progressWidth() {
      return (this.timeLeft / this.totalTime) * 100;
    },
  },
  mounted() {
    const pid = this.$route.params.pid;
    this.timer = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft < 0) {
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

<style scoped>
.progress-wrapper {
  width: 100%;
  height: 12px;
  background-color: #eee;
  border-radius: 6px;
  margin-top: 1rem;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background-color: #468966;
  transition: width 1s linear;
}
.time-remaining {
  margin-top: 1.5rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: #555;
}
</style>
