<template>
  <q-form @submit.prevent="login" class="q-mt-lg q-gutter-md">
    <div class="form-control">
      <label>E-mail</label>
      <q-input
        v-model="form.email"
        outlined
        placeholder="Seu email"
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
        placeholder="Sua senha"
        dense
        type="password"
      />
    </div>

    <div class="form-control">
      <div class="row items-center q-mt-md">
        <div class="col-shrink">
          <q-checkbox
            v-model="keepConnected"
            class="q-mr-md"
            label="Manter conectado"
            outlined
            dense
          />
        </div>
        <div class="col-grow">
          <div class="text-right">
            <q-btn
              flat
              label="Esqueceu sua senha?"
              to="/"
              class="q-pa-none primary"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="form-control">
      <q-btn
        type="submit"
        class="full-width button-primary"
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

const keepConnected = ref(false);

const disabled = computed(() => {
  return !form.value.email && !form.value.password;
});

const login = () => {
  message.notify('Login realizado com sucesso!', 'positive');
};
</script>

<style scoped lang="css">
/* .button-primary {
  background-color: #00B8C4;
  color: white;
} */
</style>
