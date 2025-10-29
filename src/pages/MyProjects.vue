<script setup>
import { ref } from 'vue';
import BaseHeader from '../components/BaseHeader.vue';
import BaseFooter from '../components/BaseFooter.vue';
import getText from '../stores/data.js';

const indexPage = ref(3);
const text = getText().projects;
const textEnd = getText().projectsText;
const activeIndex = ref(null);

const toggleProject = (index) => {
    if (activeIndex.value === index) {
        activeIndex.value = null;
    } else {
        activeIndex.value = index;
    }
};

</script>

<template>
    <div class="wrapper">
        <BaseHeader :indexPage="indexPage" />
        <div class="main projects">
            <h1 class="projects__header">Мои проекты:</h1>
            <div class="project" v-for="(elem, index) in text" :key="index">
                <h2 class="project__name" @click="toggleProject(index)">{{ elem.name }} </h2>
                <div class="accordion" v-if="activeIndex === index">
                    <p class="project__descr"> {{ elem.descr }}
                    <ul v-for="(elem, index) in elem.func" :key="index">Функционал:
                        <li class="marker">{{ elem }}</li>
                    </ul>
                    </p>
                    <p class="project__stack">Cтек: 
                        <ul v-for="(elem, index) in elem.stack" :key="index">
                        <li class="marker">{{ elem }}</li>
                    </ul></p>
                    <p class="project__link">Ссылка на деплой: <a target="_blank" :href="elem.link">{{ elem.link }}</a>
                    </p>
                    <p class="project__git">Ссылка на проект на гите:<a target="_blank" :href="elem.git">{{ elem.git }}</a>
                    </p>
                    <img class="project__img" :src="elem.img" alt="elem.img">
                </div>
            </div>
        </div>
        <BaseFooter />
</div></template>