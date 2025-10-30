<script setup>
import { defineProps, ref, onMounted, onUnmounted } from 'vue';

const props = defineProps(['indexPage']);

const windowWidth = ref(0);

onMounted(() => {
    windowWidth.value = window.innerWidth;
    console.log(windowWidth.value);

    const onResize = () => {
        windowWidth.value = window.innerWidth;
    };
    window.addEventListener('resize', onResize);

    onUnmounted(() => {
        window.removeEventListener('resize', onResize);
    });
});

const toggleMenu = () => {
    console.log('da!');
}

</script>


<template>
    <div :class="{ 'header': true, 'burger': windowWidth <= 768 }">
        <ul class="header__menu" v-if="windowWidth > 768">
            <router-link to="/home" class="header__item" :class="{ header__item_active: indexPage === 1 }">
                <li class="header__link">Домашняя страница</li>
            </router-link>
            <router-link to="/personal" class="header__item" :class="{ header__item_active: indexPage === 2 }">
                <li class="header__link">Личные данные</li>
            </router-link>
            <router-link to="/project" class="header__item" :class="{ header__item_active: indexPage === 3 }">
                <li cclass="header__link">Проекты</li>
            </router-link>
            <router-link to="/contacts" class="header__item" :class="{ header__item_active: indexPage === 4 }">
                <li class="header__link">Контакты</li>
            </router-link>
        </ul>
        <ul class="burger__menu" v-if="windowWidth <= 768">
            <button class="burger__logo" :class="{ open: isOpen }" @click="toggleMenu" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <router-link to="/home" class="burger__item" :class="{ header__item_active: indexPage === 1 }">
                <li class="burger__link">Домашняя страница</li>
            </router-link>
            <router-link to="/personal" class="burger__item" :class="{ header__item_active: indexPage === 2 }">
                <li class="burger__link">Личные данные</li>
            </router-link>
            <router-link to="/project" class="burger__item" :class="{ header__item_active: indexPage === 3 }">
                <li cclass="burger__link">Проекты</li>
            </router-link>
            <router-link to="/contacts" class="header__item" :class="{ header__item_active: indexPage === 4 }">
                <li class="burger__link">Контакты</li>
            </router-link>
        </ul>
    </div>
</template>

