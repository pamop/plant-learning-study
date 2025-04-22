<template>
  <div>
    <h2>Pre-Survey</h2>
    <form @submit.prevent="submit">
      <label>Name (or nickname):</label>
      <input v-model="name" required />
      <label>How familiar are you with Tennessee native plants?</label>
      <select v-model="familiarity" required>
        <option disabled value="">Select</option>
        <option>Not at all</option>
        <option>Somewhat</option>
        <option>Very</option>
      </select>
      <button type="submit">Continue</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      familiarity: "",
    };
  },
  methods: {
    async submit() {
      const pid = this.$route.params.pid;
      const payload = {
        pid,
        stage: "pre",
        name: this.name,
        familiarity: this.familiarity,
        timestamp: new Date().toISOString(),
      };

      await fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
        method: "POST",
        mode: "no-cors", // because it's Apps Script
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      this.$router.push(`/treatment/${pid}`);
    },
  },
};
</script>
