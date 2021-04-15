<template>
  <header class="header">
    <a href="https://embark-studios.com"
      ><img id="logo" src="~/assets/img/logo.png"
    /></a>
    <div>
      <a href="https://embark-studios.com" class="fas fa-globe-americas"></a>
      <a href="https://twitter.com/EmbarkStudios" class="fa fa-twitter"></a>
      <a href="https://github.com/EmbarkStudios" class="fa fa-github"></a>
      <a href="https://discord.gg/8TW9nfF" class="fab fa-discord"></a>
      <a
        href="#"
        class="fa fa-search search-icon"
        @click.prevent="toggleSearch"
      ></a>
    </div>
  </header>
</template>

<script>
export default {
  props: ['project'],
  methods: {
    toggleSearch() {
      this.$root.$emit('toogle-search')
    },
  },
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  color: white;
  margin: 0;
  font-size: 1.5em;
  position: fixed;
  top: 0;
  padding: 0 5%;
  width: 100vw;
  height: 90px;
  z-index: 100;
}

.header * {
  margin: 0;
}

.header a {
  color: white;
  text-decoration: none;
  margin: 0 0.2em;
  display: inline-block;
  transition: all 0.2s ease-in-out;
}

.header .fa:hover,
.header .fab:hover,
.header .fas:hover {
  transform: scale(1.1);
}

#logo {
  width: 200px;
}

.search-icon {
  padding-left: 0.7em;
}
</style>
