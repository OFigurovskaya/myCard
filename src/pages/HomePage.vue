<script setup>
import { ref } from 'vue';
import getPhotos from '../stores/photos.js';
import BaseHeader from '../components/BaseHeader.vue'

const photos = getPhotos();
const indexPage = ref(1);
</script>

<template>
    <div class="wrapper">
        <BaseHeader :indexPage="indexPage" />
        <div class="home">
            <div class="home__photo">
                <div class="photo__left">
                    <svg fill="#ffffff" width="80px" height="80px" viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z" />
                    </svg>
                </div>
                <div v-for="photo in photos.slider" :key="photo">
                    <img :src="photo" alt="Photo" />
                </div>
                <div class="photo__right">
                    <svg fill="#ffffff" width="80px" height="80px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m9 19 8-7-8-7z" />
                    </svg>
                </div>
            </div>
            <div class="home__education"></div>
        </div>
    </div>
</template>