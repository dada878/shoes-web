<template>
  <section class="banner ">
    <div class="hero container">
      <div>
        <h1 class="display-2 animate__animated animate__fadeInDown animate__delay-0s">智能懶人瘦腿鞋</h1>
        <h3 class="display-6 animate__animated animate__fadeInDown animate__delay-1s">輕 ∙ 軟 ∙ 好穿 ∙ 已屬必然</h3>
      </div>
      <img class="shoes" draggable="false" src="../assets/shoes.png">
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({

})
</script>
<style scoped lang="scss">
@import "../assets/scss/config.scss";

.banner {
  // background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  .hero {
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 3rem;
    height: calc(100vh - 10rem);
    padding-top: 10rem;
    @media ($phone){
      gap: 5rem;
      padding-top: calc(50vh - 30vw - 40px);
      flex-direction: column;
    }
    .shoes {
      width: 50%;
      filter: drop-shadow(30px 30px 40px rgba(33, 50, 63, 0.452));
      animation: float 6s ease-in-out infinite;
      @media ($phone){
        width: 70%;
        filter: drop-shadow(20px 20px 30px rgba(33, 50, 63, 0.452));
      }
    }
    &>div {
      width: 100%;
    }
  }
}

.wave {
  position: absolute;
  left: 0rem;
  right: 0rem;
  top: 100vh;
  width: 100%;
}

@keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
}


// .title-1 {
//   font-size: calc(0.7rem + 3vw);
//   font-weight: 300;
//   line-height: 1.2;
// }
// @media (min-width: 1200px) {
//   .title-1 {
//     font-size: 4.5rem;
//   }
// }
// @media (min-width: 995px) {
//   .title-1 {
//     font-size: calc(1rem + 3.5vw);
//   }
// }


</style>