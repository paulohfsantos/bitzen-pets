<template>
  <q-page class="row items-center justify-evenly bg-gray-200">
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
  </q-page>
</template>

<script setup lang="ts">
import { useAuth } from '../stores/auth.store'
import { useRouter } from 'vue-router';

const router = useRouter();
const { logout } = useAuth();

const signOut = () => {
  logout().then(() => {
    router.push({ name: 'Login' });
  });
}
</script>
