<script setup>
import { ref } from 'vue';
import BaseHeader from '../components/BaseHeader.vue';
import BaseFooter from '../components/BaseFooter.vue';
const indexPage = ref(4);
</script>

<template>
   <div class="wrapper">
        <BaseHeader :indexPage="indexPage" />
        <div class="main contacts">
            Contacts
        </div>
        <BaseFooter />
    </div>
</template>