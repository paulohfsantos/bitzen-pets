<template>
  <q-page padding>
    <div class="q-pa-md q-mx-none login-container">
      <div class="full-width">
        <img src="../assets/images/bitzen_pet.svg" alt="bitzen_logo">
      </div>
      <div>
        <div>
          <span>Não tem uma conta?</span>
          <span class="text-primary">
            <q-btn class="primary" to="/register" dense flat label="Cadastre-se gratuitamente" />
          </span>
        </div>
      </div>
      <div>
        <h4 class="text-weight-bold">
          Entrar na plataforma
        </h4>
      </div>
      <login-form />
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import LoginForm from '../components/LoginForm.vue';
</script>

<style scoped lang="css">
.login-container {
  width: 704px;
  height: 696px;
  margin: auto;
}
</style>
