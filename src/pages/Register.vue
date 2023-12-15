<template>
  <q-page padding>
    <div class="q-pa-md q-mx-none" style="max-width: 950px; margin: auto;">
      <div class="full-width">
        <q-btn
          color="primary"
          flat
          to="/"
          class="q-mr-md q-pa-none"
        >
          <q-icon class="q-mr-md" name="arrow_back" />
          <span class="primary">Voltar</span>
        </q-btn>
      </div>
      <div>
        <h4 class="text-weight-bold">Cadastre-se</h4>

        <div>
          <span>já possui uma conta?</span>
          <span class="text-primary">
            <q-btn to="/login" dense flat label="Entrar na plataforma" />
          </span>
        </div>
      </div>

      <register-form />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import RegisterForm from 'src/components/RegisterForm.vue';
</script>
