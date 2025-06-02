<template>
  <div class="container">
    <h2>Tennessee Native Plants</h2>
    <p>
      You have ten minutes to interact with the activity below. You will be
      advanced to the next page automatically when time is up.
    </p>
    <div class="iframe-wrapper">
      <div class="iframe-scaler">
        <iframe
          :src="gameURL"
          class="game-iframe"
          allowfullscreen
          scrolling="no"
          frameborder="0"
        ></iframe>
      </div>
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
      gameURL: `${import.meta.env.BASE_URL}game/index.html`, // local build from Godot
      totalTime: 30, // in seconds // 10 minutes = 600 seconds // TODO: Update to 600 seconds after testing
      timeLeft: 30, // 10 minutes = 600 seconds
    };
  },
  computed: {
    progressWidth() {
      return (this.timeLeft / this.totalTime) * 100;
    },
  },
  mounted() {
    // Add resize observer for the iframe
    this.handleIframeResize();
    window.addEventListener("resize", this.handleIframeResize);

    const pid = this.$route.params.pid;
    const treatment = this.$route.query.treatment;

    this.timer = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft < 0) {
        clearInterval(this.timer);
        // this.$router.push(`/post-survey/${pid}`);
        this.$router.push({
          name: "PostSurvey",
          params: { pid: this.$route.params.pid },
          query: { treatment },
        });
      }
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
    window.removeEventListener("resize", this.handleIframeResize);
  },
  methods: {
    handleIframeResize() {
      const iframe = document.querySelector(".game-iframe");
      if (!iframe) return;

      const wrapper = iframe.closest(".iframe-wrapper");
      const gameAspect = 16 / 9; // Match your Godot game's aspect ratio

      // Calculate scale based on container size
      const containerWidth = wrapper.clientWidth;
      const containerHeight = wrapper.clientHeight;
      const containerAspect = containerWidth / containerHeight;

      let scale;
      if (containerAspect > gameAspect) {
        // Container is wider than game - scale based on height
        scale = containerHeight / 270; // 270 is your game's height
      } else {
        // Container is taller than game - scale based on width
        scale = containerWidth / 480; // 480 is your game's width
      }

      iframe.style.transform = `scale(${scale})`;
      iframe.style.width = `${480}px`; // Original game width
      iframe.style.height = `${270}px`; // Original game height
    },
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
.iframe-wrapper {
  width: 100%;
  max-width: 960px; /* Or whatever max width you want */
  margin: 0 auto;
  aspect-ratio: 16 / 9;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.iframe-scaler {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.game-iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
  transform-origin: 0 0;
}
</style>
