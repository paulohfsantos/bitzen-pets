<template>
  <header>
    <div class="header-content">
      <div class="navigation">
        <div class="header-logo" @click="goHome">
          <img src="../assets/images/bitzen_pet.svg" alt="bitzen_logo">
        </div>
        <navigation />
      </div>

      <user-settings />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import UserSettings from './UserSettings.vue';
import Navigation from './Navigation.vue';

const router = useRouter();
const settingsMenuOpen = ref(false);

function goHome() {
  router.push({ name: 'Index' });
}
</script>

<style scoped lang="scss">
header {
  background-color: #fff;
  height: 86px;
  width: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  z-index: 1000;

  .header-content {
    height: 100%;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    .navigation {
      display: flex;
      align-items: center;

      .header-logo {
        cursor: pointer;
        display: flex;
        align-items: center;
        margin-right: 72px;
      }
    }
  }
}
</style>
