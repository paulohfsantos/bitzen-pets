<template>
  <div
    style="width: 200px; height: 70px;"
    class="bg-purple text-white rounded-borders row flex-center q-mt-md"
  >
    Click me

    <q-menu v-model="showing">
      <q-list style="min-width: 100px">
        <q-item clickable v-close-popup>
          <q-item-section>New tab</q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>New incognito tab</q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable v-close-popup>
          <q-item-section>Recent tabs</q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>History</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showing = ref(false);

const openSettingsMenu = () => {
  showing.value = true;
}
</script>
