<script setup>
import { defineProps } from 'vue'
const props = defineProps(['indexPage']);
</script>


<template>
    <div class="header">
        <ul class="header__menu">
            <router-link to="/home" class="header__item" :class="{ header__item_active: indexPage === 1}">
                <li class="header__link">Домашняя страница</li>
            </router-link>
            <router-link to="/personal" class="header__item" :class="{ header__item_active: indexPage === 2}">
                <li class="header__link">Личные данные</li>
            </router-link>
            <router-link to="/project" class="header__item" :class="{ header__item_active: indexPage === 3}">
                <li cclass="header__link">Проекты</li>
            </router-link>
            <router-link to="/contacts" class="header__item" :class="{ header__item_active: indexPage === 4}">
                <li class="header__link">Контакты</li>
            </router-link>
        </ul>
    </div>
</template>

