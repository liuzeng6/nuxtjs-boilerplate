<template>
    <canvas id="canvas-1" :width="width" :height="height" ref="c1" class="imgbig"></canvas>
</template>
<script setup>
const props = defineProps({
    src: String,
    // logo: String
})

const width = ref(300);
const height = ref(158);
const c1 = ref('c1');

onMounted(async () => {
    let pel = c1.value.parentElement;
    width.value = pel.offsetWidth
    height.value = pel.offsetHeight

    const ctx = c1.value.getContext("2d");
    const img = document.createElement("img");
    const logo = document.createElement("img");
    img.onload = function () {
        ctx.drawImage(this, 0, 0, width.value, height.value);
        logo.src = props.logo
    }

    logo.onload = function () {
        // setTimeout(() => {
            const w = width.value / 3;
            const h = height.value / 3;
            ctx.drawImage(this, w, h, 100, 100);
        // }, 500);
    }

    img.src = props.src;
})
</script>