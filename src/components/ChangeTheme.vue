<script setup>
import { ref } from 'vue';

const ligthTheme = ref(false);

const toggleTheme = () => {
    ligthTheme.value = !ligthTheme.value;
    if(ligthTheme.value === true) {
        document.querySelector('.wrapper').classList.add('light')
    } else {
        document.querySelector('.wrapper').classList.remove('light')
    }
    console.log(ligthTheme.value);
};
</script>

<template>
    <button id="theme-toggle" aria-pressed="false" aria-label="Переключить тему" @click="toggleTheme">Сменить тему</button>
</template>