<script setup>
import { onMounted, ref } from 'vue';

const lightTheme = ref(localStorage.getItem('lightTheme') === 'true');

onMounted(() => {
    const wrapper = document.querySelector('.wrapper');
    if (lightTheme.value) {
        wrapper.classList.add('light');
    } else {
        wrapper.classList.remove('light');
    }
})

const toggleTheme = () => {
    lightTheme.value = !lightTheme.value;
    if (lightTheme.value) {
        document.querySelector('.wrapper').classList.add('light');
        (localStorage.setItem('lightTheme', 'true'));
    } else {
        document.querySelector('.wrapper').classList.remove('light');
        (localStorage.setItem('lightTheme', 'false'));
    }
};
</script>

<template>
    <button id="theme-toggle" aria-pressed="false" aria-label="Переключить тему" @click="toggleTheme">Сменить тему</button>
</template>