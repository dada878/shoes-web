<template>
  <main class="">
    <HomeBanner></HomeBanner>
    <FeatureCardGroup></FeatureCardGroup>
    <ProductIntroduction></ProductIntroduction>
    <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/9AK_Z4Y8l3w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
    <!-- <section class="users">
        <iframe class="instagram-media" id="instagram-embed-0"
          src="https://www.instagram.com/p/CcK8itSrWaH/embed/captioned/?cr=1&amp;v=14&amp;wp=540&amp;rd=http%3A%2F%2F127.0.0.1%3A5500&amp;rp=%2Fa.html#%7B%22ci%22%3A0%2C%22os%22%3A437.2999999523163%2C%22ls%22%3A56%2C%22le%22%3A333.2000000476837%7D"
          allowtransparency="true" allowfullscreen="true" frameborder="0"
          data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
        <iframe class="instagram-media" id="instagram-embed-0"
          src="https://www.instagram.com/p/CcNflm3DRVE/embed/captioned/?cr=1&amp;v=14&amp;wp=540&amp;rd=http%3A%2F%2F127.0.0.1%3A5500&amp;rp=%2Fa.html#%7B%22ci%22%3A0%2C%22os%22%3A437.2999999523163%2C%22ls%22%3A56%2C%22le%22%3A333.2000000476837%7D"
          allowtransparency="true" allowfullscreen="true" frameborder="0"
          data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
        <iframe class="instagram-media" id="instagram-embed-0"
          src="https://www.instagram.com/p/CcYBETNvyRQ/embed/captioned/?cr=1&amp;v=14&amp;wp=540&amp;rd=http%3A%2F%2F127.0.0.1%3A5500&amp;rp=%2Fa.html#%7B%22ci%22%3A0%2C%22os%22%3A437.2999999523163%2C%22ls%22%3A56%2C%22le%22%3A333.2000000476837%7D"
          allowtransparency="true" allowfullscreen="true" frameborder="0"
          data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
      </section> -->
  </main>
</template>

<script lang="ts">

import HomeBanner from '@/components/HomeBanner.vue';
import { Options, Vue } from 'vue-class-component';
import FeatureCardGroup from '@/components/FeatureCardGroup.vue';
import ProductIntroduction from '@/components/ProductIntroduction.vue';
@Options({
  components: {
    HomeBanner, FeatureCardGroup, ProductIntroduction
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