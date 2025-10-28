<script setup>
import { ref } from 'vue';
import BaseHeader from '../components/BaseHeader.vue';
import BaseFooter from '../components/BaseFooter.vue';
const indexPage = ref(2);
</script>

<template>
    <div class="wrapper">
        <BaseHeader :indexPage="indexPage" />
        <div class="main personal">
            Personal
        </div>
        <BaseFooter />
    </div>
</template>