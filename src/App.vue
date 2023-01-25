<template>
  <nav :class="{ active: !isOnTop }">
    <router-link to="/">{{ $t("nav.home") }}</router-link>
    <router-link to="/about">{{ $t("nav.about") }}</router-link>
    <LangSelect v-model="locale" :default="localToTitle[locale]" :options="langSelectOption"></LangSelect>
  </nav>
  <router-view />
  <PageFooter />
</template>
<script lang="ts">
import { useI18n } from "vue-i18n";
import { defineComponent } from 'vue';
import PageFooter from './components/PageFooter.vue'
import LangSelect from './components/LangSelect.vue'
import actionAnimeRender from './lib/actionanime';

export default defineComponent({
  components: { PageFooter, LangSelect },
  data() {
    return {
      isOnTop: true
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.isOnTop = window.scrollY == 0;
    });
    actionAnimeRender();
  },
  setup() {
    const { locale } = useI18n();
    const localToTitle: { [key: string]: string } = {
      "zh-TW": "中文繁體",
      "en-US": "English",
      "ja-JP": "日本",
      "zh-CN": "中文简体"
    };
    const langSelectOption: { title: string, value: string }[] = [
      {
        title: "中文繁體",
        value: "zh-TW"
      },
      {
        title: "English",
        value: "en-US"
      },
      {
        title: "日本",
        value: "ja-JP"
      },
      {
        title: "中文简体",
        value: "zh-CN"
      },
    ];
    return {
      locale,
      langSelectOption,
      localToTitle
    };
  },
  watch: {
    locale(newlocale: string) {
      localStorage.setItem("locale", newlocale);
    },
    $route() {
      actionAnimeRender();
    }
  }
})

</script>
<style lang="scss">
html,
body,
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #c3cfe2;
  background-attachment: fixed;
  height: 100%;
}

.lang-select {
  outline: none;
  background-color: transparent;
  margin-left: auto;
  padding: 0.5rem;
  border: transparent 1px solid;
  transition: 200ms;

  &:hover {
    cursor: pointer;
    border: #2c3e50 1px solid;
  }
}

::-webkit-scrollbar {
  width: 0.5rem;
}

::-webkit-scrollbar-track {
  background: rgba(148, 150, 165, 0.582);
}

::-webkit-scrollbar-thumb {
  background: rgba(122, 124, 136, 0.582);
  border-radius: 10px;
}

nav {
  position: fixed;
  padding: 3.5rem;
  display: flex;
  gap: 0.5rem;
  z-index: 2;
  width: 100%;
  transition: 100ms;
  background-color: transparent;

  a {
    color: #000000;
    text-decoration-line: none;
    border: transparent 1px solid;
    padding: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    transition: 500ms;
    vertical-align: middle;
    line-height: 2rem;

    &.router-link-exact-active,
    &:hover {
      border-color: #2c3e50;
    }

    &:hover {
      color: #2c3e50;
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
