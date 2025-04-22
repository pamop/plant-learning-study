<template>
  <div class="container">
    <h2>Native Plants in Tennessee</h2>
    <iframe
      :src="articleURL"
      width="100%"
      height="500px"
      style="border: 1px solid #ccc; border-radius: 8px"
    ></iframe>
    <p>You will be directed to the post-survey in {{ timeLeft }} seconds.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleURL: "https://docs.google.com/document/d/your-doc-id/preview", // or published link
      timeLeft: 60, // 10 minutes
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
