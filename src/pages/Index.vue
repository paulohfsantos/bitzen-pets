<template>
  <main class="q-pa-md">
    index
  </main>
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
