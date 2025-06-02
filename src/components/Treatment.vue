<script>
export default {
  mounted() {
    const pid = this.$route.params.pid;
    const isGame = Math.random() < 0.5;
    const treatment = isGame ? "game" : "article";

    // this.$router.replace(`${isGame ? "/game" : "/article"}/${pid}`);

    // Redirect with query param
    this.$router.replace({
      path: `/${treatment}/${pid}`,
      query: { treatment },
    });
  },
  template: "<div>Redirecting...</div>",
};
</script>
