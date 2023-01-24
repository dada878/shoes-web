<template>
    <section class="feature-group mx-5">
        <FeatureCard
            :title="'緩解靜脈曲張'"
            :description="'久站/久坐是造成靜脈曲張的主因，ANAN智能雙氣墊鞋有效小腿表層血管壓力全方位守護雙腿肯定是懶人美腿首選'"
        ></FeatureCard>
        <FeatureCard
            :title="'強效預防蘿蔔腿'"
            :description="'小腿肌肉的幾點跟終點是固定的，要雕塑/瘦腿唯有增加輔助力，減少小腿用力'"
        ></FeatureCard>
        <FeatureCard
            :title="'緩解拇指外翻/足底筋膜炎'"
            :description="'ANAN支撐分擔50%以上的體重大幅減輕腳底負擔柔軟好穿僅是標配長庚護士的最愛'"
        ></FeatureCard>
    </section>
    <section class="feature-group mx-5">
        <FeatureCard
            :title="'耐髒易清潔'"
            :description="'小腿肌肉的幾點跟終點是固定的，要雕塑/瘦腿唯有增加輔助力，減少小腿用力'"
        ></FeatureCard>
        <FeatureCard
            :title="'雨天3倍止滑'"
            :description="'久站/久坐是造成靜脈曲張的主因，ANAN智能雙氣墊鞋有效小腿表層血管壓力全方位守護雙腿肯定是懶人美腿首選'"
        ></FeatureCard>
        <FeatureCard
            :title="'久站不腳痛'"
            :description="'ANAN支撐分擔50%以上的體重大幅減輕腳底負擔柔軟好穿僅是標配長庚護士的最愛'"
        ></FeatureCard>
        <FeatureCard
            :title="'抗震減少膝蓋磨損'"
            :description="'ANAN支撐分擔50%以上的體重大幅減輕腳底負擔柔軟好穿僅是標配長庚護士的最愛'"
        ></FeatureCard>
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
