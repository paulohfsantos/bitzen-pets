<template>
  <q-spinner
    color="primary"
    size="3em"
    v-if="loading"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
});
</script>
