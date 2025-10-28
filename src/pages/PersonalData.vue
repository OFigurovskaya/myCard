<script setup>
import { ref } from 'vue';
import BaseHeader from '../components/BaseHeader.vue';
const indexPage = ref(2);
</script>

<template>
    <div class="wrapper">
        <BaseHeader :indexPage="indexPage" />
        <div class="">
            Personal
        </div>
    </div>
</template>