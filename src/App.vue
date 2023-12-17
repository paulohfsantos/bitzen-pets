<template>
  <q-layout>
    <q-page-container>
      <bitzen-header />
      <!-- still dont know how to use quasar's container so I've made my own :) -->
      <container>
        <router-view />
      </container>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import Loading from './components/Loading.vue';
import BitzenHeader from './components/BitzenHeader.vue';
import Container from './components/Container.vue';
</script>
