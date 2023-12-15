<template>
  <q-form @submit.prevent="login" class="q-mt-lg q-gutter-md">

    <div class="form-control">
      <label>E-mail</label>
      <q-input
        v-model="form.email"
        outlined
        placeholder="Insira o seu email"
        dense
        type="email"
        class="q-mx-none"
      />
    </div>

    <div class="form-control">
      <label>Senha</label>
      <q-input
        v-model="form.password"
        outlined
        placeholder="Crie uma senha"
        dense
        type="password"
      />
    </div>

    <div class="form-control">
      <q-btn
        type="submit"
        color="primary"
        class="full-width"
        :disable="disabled"
      >
        Entrar na plataforma
      </q-btn>
    </div>
  </q-form>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { UserLoginDto } from 'src/api/models/dtos/login.dto';
import { useNotify } from '../composables/useNotify'

const { message } = useNotify();

const form = ref<UserLoginDto>({
  email: '',
  password: '',
});

const disabled = computed(() => {
  return !form.value.email && !form.value.password;
});

const login = () => {
  message.notify('Login realizado com sucesso!', 'positive');
};
</script>
