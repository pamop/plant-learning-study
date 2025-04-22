<template>
  <div class="container">
    <h2>Post-Survey</h2>
    <form @submit.prevent="submit">
      <label>What do you remember about Tennessee native plants?</label>
      <textarea v-model="recall" required></textarea>

      <label>How engaging was the activity?</label>
      <select v-model="engagement" required>
        <option disabled value="">Select</option>
        <option>Not at all</option>
        <option>Somewhat</option>
        <option>Very</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recall: "",
      engagement: "",
    };
  },
  methods: {
    async submit() {
      const pid = this.$route.params.pid;
      const payload = {
        pid,
        stage: "post",
        recall: this.recall,
        engagement: this.engagement,
        timestamp: new Date().toISOString(),
      };

      await fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      this.$router.push("/thanks");
    },
  },
};
</script>
