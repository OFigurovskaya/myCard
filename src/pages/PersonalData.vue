<script setup>
import { ref } from 'vue';
import BaseHeader from '../components/BaseHeader.vue';
import BaseFooter from '../components/BaseFooter.vue';
import getText from '../stores/data.js';
import ChangeTheme from '@/components/ChangeTheme.vue';

const indexPage = ref(2);
const text = getText().personalData;

</script>

<template>
    <div class="wrapper">
        <BaseHeader :indexPage="indexPage" />
        <div class="main ">
            <ChangeTheme />
            <div class="personal">
                <h1 class="personal__header">Подробне обо мне:</h1>
                <p class="personal__text" v-for="elem in text" :key="elem.id">{{ elem }}</p>
            </div>
        </div>
        <BaseFooter />
    </div>
</template>