<template>
  <div id="app">
    <header>
      <h1>Native plants in Tennessee</h1>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: #f9f9f9;
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background: #468966;
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

main {
  flex: 1;
  padding: 2rem;
}

.container {
  max-width: 700px;
  margin: auto;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

label {
  display: block;
  margin-top: 1rem;
  font-weight: 500;
}

input,
select,
textarea {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

button {
  margin-top: 1.5rem;
  background: #468966;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: #356f4e;
}
</style>
