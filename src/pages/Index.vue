<template>
  <q-page padding>
    página inicial

    <q-btn
      @click="() => $router.push({ name: 'Register' })"
      color="primary"
      label="Criar conta"
    />
    <q-btn
      @click="() => signOut()"
      color="secondary"
      label="Sair"
    />
    <!-- <bitzen-header /> -->
  </q-page>
</template>

<script setup lang="ts">
import { useAuth } from '../stores/auth.store'
import { useRouter } from 'vue-router';

import BitzenHeader from '../components/BitzenHeader.vue';

const router = useRouter();
const { logout } = useAuth();

const signOut = () => {
  logout().then(() => {
    router.push({ name: 'Login' });
  });
}
</script>
