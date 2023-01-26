<template>
    <section class="feature-group mx-5">
        <FeatureCard
            v-for="i in 3"
            :key="i"
            :title="$t(`home.features[${i-1}].title`)"
            :description="$t(`home.features[${i-1}].description`)"
        />
    </section>
    <section class="feature-group mx-5">
        <FeatureCard
            v-for="i in 4"
            :key="i"
            :title="$t(`home.features[${i+2}].title`)"
            :description="$t(`home.features[${i+2}].description`)"
        />
    </section>
</template>

<script lang="ts">
import FeatureCard from '@/components/FeatureCard.vue';
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {
        FeatureCard
    },
})
export default class HomeView extends Vue { }
</script>
<style lang="scss">
@import "../assets/scss/config.scss";
.feature-group {
    display: flex;
    gap: 1rem;
    padding: 3rem;
    p {
        text-align: left;
    }
    &:nth-child(2) {
        padding-bottom: 0rem;
    }
    &+.feature-group {
        padding-top: 1rem;
    }
    @media ($phone) {
        flex-direction: column;
        padding-left: 0rem;
        padding-right: 0rem;
    }
}
</style>
