<template>
  <q-form @submit.prevent="register">
    <q-input v-model="form.name" type="text" />

    <q-input v-model="form.email" type="email" />

    <q-input v-model="form.password" type="password" />

    <q-input v-model="form.password_confirmation" type="password" />

    <q-checkbox v-model="terms" required>
      Li e concordo com os Termos de uso e a Política de privacidade do sistema.
    </q-checkbox>

    <q-btn
      type="submit"
      color="primary"
      class="full-width"
      :disable="disabled"
    >
      Criar conta
    </q-btn>
  </q-form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { UserRegisterDto } from 'src/api/models/dtos/register.dto';

const form = ref<UserRegisterDto>({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  document: '',
  phone_number: '',
});

const terms = ref(false);

const disabled = computed(() => {
  return !terms.value;
});

function register() {
  console.log(form.value);
}
</script>
