<template>
  <main class="">
    <HomeBanner></HomeBanner>
    <FeatureCardGroup></FeatureCardGroup>
  </main>
</template>

<script lang="ts">

import HomeBanner from '@/components/HomeBanner.vue';
import { Options, Vue } from 'vue-class-component';
import FeatureCardGroup from '@/components/FeatureCardGroup.vue';
@Options({
  components: {
    HomeBanner, FeatureCardGroup
  },
})
export default class HomeView extends Vue { }
</script>
<style lang="scss">
.users {
  display: flex;
  gap: 2rem;
  padding-left: 5rem;
  padding-right: 5rem;
  &>* {
  border-radius: 10px !important;

  }
}

.instagram-media {
  background: white;
  width: calc(100% - 2px);
  border-radius: 3px;
  border: 1px solid rgb(219, 219, 219);
  box-shadow: none;
  display: block;
  margin: 0px 0px 12px;
  padding: 0px;
  height: 1000px;
}
</style>