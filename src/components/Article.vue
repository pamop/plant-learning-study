<template>
  <div class="container">
    <h2>Native Plants in Tennessee</h2>
    <!-- <iframe
      :src="articleURL"
      width="100%"
      height="500px"
      style="border: 1px solid #ccc; border-radius: 8px"
    ></iframe> -->
    <div class="article-content">
      <h3>Article Title</h3>
      <p>Abstract: This is a brief summary of the article.</p>
      <p>Introduction: This is the introduction to the article.</p>
      <p>Methods: This section describes the methods used in the study.</p>
      <p>Results: This section presents the results of the study.</p>
    </div>
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
      // articleURL: "https://docs.google.com/document/d/your-doc-id/preview", // or published link
      totalTime: 6, // in seconds
      timeLeft: 6, // 10 minutes
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
