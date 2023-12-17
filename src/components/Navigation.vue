<template>
  <q-list class="flex">
    <q-item clickable>
      <q-item-section>
        <q-item-label>
          <router-link to="/">
            Inicio
          </router-link>
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const active = ref(false);

const isActive = computed(() => {
  return active.value ? 'active' : '';
});

const toggle = () => {
  active.value = !active.value;
}
</script>
