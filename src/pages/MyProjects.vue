<script setup>
import { ref } from 'vue';
import BaseHeader from '../components/BaseHeader.vue';
import BaseFooter from '../components/BaseFooter.vue';
const indexPage = ref(3);
</script>

<template>
   <div class="wrapper">
        <BaseHeader :indexPage="indexPage" />
        <div class="main projects">
            Projects
        </div>
        <BaseFooter />
    </div>
</template>