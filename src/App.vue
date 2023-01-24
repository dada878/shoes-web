<template>
  <nav :class="{active:!isOnTop}">
    <router-link to="/">首頁</router-link>
    <router-link to="/about">關於</router-link>
    <router-link to="/about">關於</router-link>
    <router-link to="/about">關於</router-link>
  </nav>
  <router-view/>
  <PageFooter/>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import PageFooter from './components/PageFooter.vue'
export default defineComponent({
  components: {PageFooter},
  data() {
    return {
      isOnTop: true
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.isOnTop = window.scrollY == 0;
    });
    // alert(`${window.innerWidth} ${window.innerHeight}`)
  }
})

</script>
<style lang="scss">
html, body, #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #c3cfe2;
  height: 100%;
}

::-webkit-scrollbar {
  width: 0.5rem;
}

::-webkit-scrollbar-track {
  // box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
  background: rgba(122, 124, 136, 0.582); 
  border-radius: 10px;
}

nav {
  position: fixed;
  padding: 3.5rem;
  display: flex;
  gap: 2rem;
  z-index: 2;
  width: 100%;
  transition: 200ms;
  background-color: transparent;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration-line: none;
    outline: transparent 1px solid;
    outline-offset: 0.5rem;
    transition: 500ms;
    &.router-link-exact-active {
      outline-color: #2c3e50;
    }
    &:hover {
      color: #687f97;
    }
  }
  &:is(.active) {
    background-color: #d9dee677;
    backdrop-filter: blur(5px);
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
}
</style>
