<template>
  <section class="banner ">
    <div class="hero container">
      <div>
        <h1 class="display-2 animate__animated animate__fadeInDown animate__delay-0s">{{ $t("home.title") }}</h1>
        <h3 class="display-6 animate__animated animate__fadeInDown animate__delay-1s">{{ $t("home.subtitle") }}</h3>
      </div>
      <img class="shoes" draggable="false" src="../assets/shoes.png">
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({

});
</script>
<style scoped lang="scss">
@import "../assets/scss/config.scss";

.banner {
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  .hero {
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 3rem;
    height: calc(100vh - 0rem);
    padding-top: 0rem;
    @media ($phone){
      gap: 5rem;
      padding-top: calc(50vh - 30vw - 40px);
      flex-direction: column;
    }

    h1 {
      white-space: nowrap;
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
		transform: translateY(0px);
	}
	50% {
		transform: translateY(-20px);
	}
	100% {
		transform: translateY(0px);
	}
}

</style>