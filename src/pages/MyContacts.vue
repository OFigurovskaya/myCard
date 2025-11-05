<script setup>
import { ref } from 'vue';
import BaseHeader from '../components/BaseHeader.vue';
import BaseFooter from '../components/BaseFooter.vue';
import Contacts from '../components/Contacts.vue';
import ChangeTheme from '@/components/ChangeTheme.vue';

const indexPage = ref(4);
</script>

<template>
    <div class="wrapper">
        <BaseHeader :indexPage="indexPage" />
        <div class="main ">
            <ChangeTheme />
            <div class="contacts">
                <h2>Связаться со мной можно следующим образом:</h2>
                <Contacts />
                <h3> Я буду очень рада, если смогла Вас заинтересовать!
                    Отвечу на все вопросы, при необходимости, расскажу подробнее.</h3>
            </div>
        </div>
        <BaseFooter />
    </div>
</template>