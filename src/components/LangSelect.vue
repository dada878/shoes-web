<template>
    <div class="custom-select" :tabindex="tabindex" @blur="open = false">
        <div class="selected" :class="{ open: open }" @click="open = !open">
            {{ selected }}
        </div>
        <div class="items" :class="{ selectHide: !open }">
            <div v-for="(option, i) of options" :key="i" @click="
    selected = option.title;
open = false;
$emit('update:modelValue', option.value);
            ">
                {{ option.title }}
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        options: {
            type: Array as () => Array<{title: string, value: string}>,
            required: true,
        },
        default: {
            type: String,
            required: false,
            default: null,
        },
        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    data() {
        return {
            selected: this.default
                ? this.default
                : this.options.length > 0
                    ? this.options[0].title
                    : null,
            open: false,
        };
    },
    mounted() {
        this.$emit("input", this.selected);
    },
});
</script>
<style scoped lang="scss">
.custom-select {
    position: relative;
    width: calc(8rem);
    text-align: left;
    outline: none;
    height: 47px;
    line-height: 47px;
    margin-left: auto;
}

.custom-select .selected {
    border: 1px solid transparent;
    transition: 200ms;
    background-color: transparent;
    color: #2c3e50;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
}

.custom-select .selected.open {
    border: 1px solid #2c3e50;
}

.custom-select .selected:after {
    position: absolute;
    content: "";
    top: 22px;
    right: 1em;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-color: #2c3e50 transparent transparent transparent;
}

.custom-select .items {
    color: #2c3e50;
    overflow: hidden;
    border-right: 1px solid #2c3e50;
    border-left: 1px solid #2c3e50;
    border-bottom: 1px solid #2c3e50;
    position: absolute;
    background-color: transparent;
    left: 0;
    right: 0;
    z-index: 1;
    opacity: 1;
    pointer-events: all;
    transition: 200ms;

    &:is(.selectHide) {
        pointer-events: none;
        opacity: 0;
    }
}

.custom-select .items div {
    color: #2c3e50;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
}

.custom-select .items div:hover {
    background-color: #2c3e50;
    color: white;
}
</style>