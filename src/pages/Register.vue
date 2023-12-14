<template>
  <q-page padding>
    <div class="q-pa-md" style="max-width: 1200px; margin: auto;">
      <div>
        <q-btn
          color="primary"
          flat
          to="/"
          class="q-mr-md q-pa-none"
        >
          <q-icon class="q-mr-md" name="arrow_back" />
          <span>Voltar</span>
        </q-btn>
      </div>
      <div>
        <h4 class="text-weight-bold">Cadastre-se</h4>

        <small>
          <span>já possui uma conta?</span>
          <span class="text-primary">
            <router-link to="/login">Entrar na plataforma</router-link>
          </span>
        </small>
      </div>

      <register-form />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import RegisterForm from 'src/components/RegisterForm.vue';
</script>
