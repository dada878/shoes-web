<template>
    <section class="feature-card anime-scroll" anime="animate__fadeInUp" >
        <h1 class="h2">{{title}}</h1>
        <p>{{description}}</p>
    </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        title: String,
        description: String,
    }
});
</script>
<style scoped lang="scss">
.feature-card {
    width: 100%;
    padding: 1.5rem;
    border-radius: 10px;
    background-color: rgba(240, 248, 255, 0.644);
    backdrop-filter: blur(5px);
    transition: 500ms;
    z-index: 1;
    cursor: default;
    &:hover {
        box-shadow: rgba(33, 50, 63, 0.466) 0px 0px 10px;
    }
}
</style>