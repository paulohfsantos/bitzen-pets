<template>
  <q-page class="row items-center justify-evenly bg-gray-200">
    página inicial

    <q-btn
      @click="() => $router.push({ name: 'Register' })"
      color="primary"
      label="Criar conta"
    />
  </q-page>
</template>

<script setup lang="ts"></script>
