<script setup>
import { ref } from 'vue';
import BaseHeader from '../components/BaseHeader.vue';
const indexPage = ref(4);
</script>

<template>
   <div class="wrapper">
        <BaseHeader :indexPage="indexPage" />
        <div class="">
            Contacts
        </div>
    </div>
</template>