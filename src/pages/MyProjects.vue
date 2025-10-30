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
            <h2 class="projects__header">Мои проекты:</h2>
            <div class="project" v-for="(elem, index) in text" :key="index">
                <div class="project__block" @click="toggleProject(index)">
                    <h3 class="project__name">{{ elem.name }} </h3>
                    <svg :class="{ 'project__plus': true, 'rotate': activeIndex === index }"
                    fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M37,26H26v11h-2V26H13v-2h11V13h2v11h11V26z"/></svg>
                </div>
                <transition name="accordion">
                    <div class="accordion" v-show="activeIndex === index">
                        <p class="project__descr"> {{ elem.descr }}
                        <ul v-for="(elem, index) in elem.func" :key="index">Функционал:
                            <li class="marker">{{ elem }}</li>
                        </ul>
                        </p>
                        <p class="project__stack">Cтек:
                        <ul v-for="(elem, index) in elem.stack" :key="index">
                            <li class="marker">{{ elem }}</li>
                        </ul>
                        </p>
                        <p class="project__link">Ссылка на деплой: <a target="_blank" :href="elem.link">{{ elem.link }}</a>
                        </p>
                        <p class="project__git">Ссылка на проект на гите:<a target="_blank" :href="elem.git">{{ elem.git
                        }}</a>
                        </p>
                        <img class="project__img" :src="elem.img" alt="elem.img">
                    </div>
            </transition>
        </div>
    </div>
    <BaseFooter />
</div></template>