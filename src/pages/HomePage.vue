<script setup>
import { ref, onMounted } from 'vue';
import getPhotos from '../stores/photos.js';
import getText from '../stores/data.js'
import BaseHeader from '../components/BaseHeader.vue';
import BaseFooter from '../components/BaseFooter.vue';
import ChangeTheme from '@/components/ChangeTheme.vue';

const photos = ref(getPhotos().slider);
const text = getText();
const indexPage = ref(1);
const hasVisited = ref(localStorage.getItem('visited') !== null);
const showContent = ref(!hasVisited.value);
const currentIndex = ref(0)

onMounted(() => {
    if (!hasVisited.value) {
        localStorage.setItem('visited', 'true');
        setTimeout(() => {
            showContent.value = false; // скрываем приветствие через 3 секунды
        }, 3000);
    }
});

const changeSwitch = () => {
    if (currentIndex.value === 0) {
        currentIndex.value = 1
    } else if (currentIndex.value === 1) {
        currentIndex.value = 0
    }
    return currentIndex.value
};

</script>

<template>
    <div class="wrapper">
        <BaseHeader :indexPage="indexPage" />
        <transition name="fade">
            <div class="animate" v-if="showContent">
                <h1>Добро пожаловать!</h1>
                <h2>Спасибо за то, что зашли</h2>
            </div>
        </transition>
        <div class="main home" v-if="!showContent">
            <ChangeTheme />
            <div class="home__greeting">
                <h3 class="greeting" v-for="elem in text.greeting" :key="elem.id">{{ elem }}</h3>
            </div>
            <div class="home__photo">
                <div class="photo__left" @click="changeSwitch">
                    <button >
                        <svg fill="#ffffff" width="10vw" height="10vh" viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z" />
                        </svg>
                    </button>
                </div>
                <div class="slide">
                    <img :src="photos[currentIndex]" alt="Photo" @touchstart="changeSwitch" />
                </div>
                <div class="photo__right" @click="changeSwitch">
                    <button>
                        <svg fill="#ffffff" width="10vw" height="10vh" viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg" >
                            <path
                                d="M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="home__education">
                <div class="stack">
                    <h2 class="stack__header">Мой стек:</h2>
                    <ul class="stack__item">
                        <li v-for="elem in text.stack" :key="elem.id">{{ elem }}</li>
                    </ul>
                </div>
                <div class="education">
                    <h2 class="education">Мое образование:</h2>
                    <ul class="education__item">
                        <li v-for="elem in text.education" :key="elem.id">{{ elem }}</li>
                    </ul>
                </div>

            </div>
        </div>
        <BaseFooter />
    </div>
</template>