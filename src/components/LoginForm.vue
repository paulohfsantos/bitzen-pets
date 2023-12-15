<template>
  <q-form @submit.prevent="signIn" class="q-mt-lg q-gutter-md">
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
      >
        Entrar na plataforma
      </q-btn>
    </div>
  </q-form>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue';
import { UserLoginDto } from 'src/api/models/dtos/login.dto';
import { useNotify } from '../composables/useNotify'
import { useAuth } from '../stores/auth.store'
import { useRouter } from 'vue-router';

const router = useRouter();
const { login } = useAuth();
const { message } = useNotify();

const form = ref<UserLoginDto>({
  email: '',
  password: '',
});

const keepConnected = ref(false);

const disabled = computed(() => {
  return !form.value.email && !form.value.password;
});

function signIn() {
  if (disabled.value) {
    message.notify('Preencha os campos corretamente', 'negative');
    return;
  }

  if (!form.value.email.includes('@')) {
    message.notify('E-mail inválido', 'negative');
    return;
  }

  if (form.value.password.length === 0) {
    message.notify('Digite uma senha', 'negative');
    return;
  }

  // implement the "keep connected" later

  login(form.value)
    .then(() => {
      message.notify('Login realizado com sucesso', 'positive');

      router.push({ name: 'Index' });
    })
    .catch((err) => {
      message.notify(err.response.data.message, 'negative');
    });
};
</script>
