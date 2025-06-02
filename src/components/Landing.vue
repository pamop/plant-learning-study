<template>
  <div>
    <h2>Welcome to our study!</h2>
    <p>
      Thank you for participating in this study on learning methods. This study
      will take around 15 minutes.
    </p>
    <p>If you are on a mobile device, please <b>use a computer</b> instead!</p>
    <p>
      This study starts off with a pre-survey that asks about your current
      knowledge and motivation towards learning about native plants. Then, you
      will do an activity for 10 minutes to learn about different plant types.
      After, you will take a post survey that asks you about the material you
      learned. You don’t need to get a perfect score! The data is only useful if
      we are collecting what you actually know; please don’t get answers from
      other people or your other devices. Thank you!
    </p>
    <p>Click below to begin.</p>
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
