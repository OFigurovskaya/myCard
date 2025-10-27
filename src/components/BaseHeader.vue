<script setup>
</script>


<template>
    <div class="header">
        <ul class="header__menu">
            <router-link to="/home" class="header__item">
                <li class="header__link">Домашняя страница</li>
            </router-link>
            <router-link to="/personal" class="header__item">
                <li class="header__link">Личные данные</li>
            </router-link>
            <router-link to="/project" class="header__item">
                <li cclass="header__link">Проекты</li>
            </router-link>
            <router-link to="/contacts" class="header__item">
                <li class="header__link">Контакты</li>
            </router-link>
        </ul>
    </div>
</template>

