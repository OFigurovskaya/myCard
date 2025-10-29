<script setup>
import { ref } from 'vue';
import BaseHeader from '../components/BaseHeader.vue';
import BaseFooter from '../components/BaseFooter.vue';
import getText from '../stores/data.js';

const indexPage = ref(3);
const text = getText().projects;
const textEnd = getText().projectsText;

</script>

<template>
   <div class="wrapper">
        <BaseHeader :indexPage="indexPage" />
        <div class="main projects">
            <h1 class="projects__header">Мои проекты:</h1>
            <div class="project" v-for="elem in text" :key="elem.id">
                <p class="project__name">{{ elem.name }}</p>
                <p class="project__descr">{{ elem.descr }}</p>
                <p class="project__stack">{{ elem.stack }}</p>
                <img class="project__img" :src="elem.img" alt="elem.img">
                <p class="project__link"><a target="_blank" :href="elem.link">{{ elem.link }}</a>
                    </p>
                <p class="project__img"><a target="_blank" :href="elem.git">{{ elem.git }}</a>
                </p>
            </div>
        </div>
        <BaseFooter />
    </div>
</template>