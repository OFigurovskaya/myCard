<script setup>
import { ref } from 'vue';
import BaseHeader from '../components/BaseHeader.vue';
const indexPage = ref(3);
</script>

<template>
   <div class="wrapper">
        <BaseHeader :indexPage="indexPage" />
        <div class="">
            Projects
        </div>
    </div>
</template>