<template>
  <div>
    <h2>Welcome to our study about Tennessee native plants!</h2>
    <p>
      This website was built to deliver a study about Tennessee native plants.
      It compared whether students learned better from playing a game or from
      reading an article.
    </p>
    <p>
      Use the buttons below to check out the Game, Article or surveys that were
      a part of this study.
    </p>

    <div class="button-group">
      <router-link to="/game" class="demo-button">🎮 Play the Game</router-link>
      <router-link to="/article" class="demo-button"
        >📖 Read the Article</router-link
      >
      <router-link to="/pre-survey" class="demo-button"
        >📝 Try the Pre-Survey</router-link
      >
      <router-link to="/post-survey" class="demo-button"
        >📊 Try the Post-Survey</router-link
      >
    </div>
  </div>
</template>

<style scoped>
.landing {
  max-width: 700px;
  margin: 3rem auto;
  text-align: center;
  padding: 1rem;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.demo-button {
  background-color: #468966;
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.demo-button:hover {
  background-color: #356b51;
}
</style>
