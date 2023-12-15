<template>
  <q-header>
    <div class="header-content">
      <div class="header-logo">
        <img src="../assets/images/bitzen_pet.svg" alt="bitzen_logo">
      </div>
      <user-settings />
    </div>
  </q-header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UserSettings from './UserSettings.vue';

const settingsMenuOpen = ref(false);

const openSettingsMenu = () => {
  settingsMenuOpen.value = true;
}
</script>
