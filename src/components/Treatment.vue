<script>
export default {
  mounted() {
    const pid = this.$route.params.pid;
    const isGame = Math.random() < 0.5;
    this.$router.replace(`${isGame ? "/game" : "/article"}/${pid}`);
  },
  template: "<div>Redirecting...</div>",
};
</script>
