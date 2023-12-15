<template>
  <q-form @submit.prevent="signUp" class="q-mt-lg q-gutter-md">
    <div class="form-control">
      <label>Nome</label>
      <q-input
        v-model="form.name"
        outlined
        placeholder="Seu nome"
        dense
        type="text"
        class="q-mx-none"
      />
    </div>

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
      <div class="row q-col-gutter-md">
        <div class="col-6">
          <label>CPF</label>
          <q-input
            v-model="form.document"
            outlined
            placeholder="Insira o seu CPF"
            dense
            type="text"
            mask="###.###.###-##"
          />
        </div>

        <div class="col-6">
          <label>Telefone</label>
          <q-input
            v-model="form.phone_number"
            outlined
            placeholder="Insira o seu telefone"
            dense
            type="text"
            mask="(##) #####-####"
          />
        </div>
      </div>
    </div>

    <div class="form-control">
      <div class="row q-col-gutter-md">
        <div class="col-6">
          <label>Senha</label>
          <q-input
            v-model="form.password"
            outlined
            placeholder="Crie uma senha"
            dense
            type="password"
          />
        </div>

        <div class="col-6">
          <label>Confirmar senha</label>
          <q-input
            v-model="form.password_confirmation"
            outlined
            placeholder="Repita a senha"
            dense
            type="password"
            :rules="[matchCurrentPassword]"
          />
        </div>
      </div>
    </div>

    <div class="form-control">
      <q-checkbox v-model="terms" required class="q-mx-none" />
      <span>
        Li e concordo com os
        <span class="pointer primary" @click="redirect">Termos de uso</span> e a
        <span class="pointer primary" @click="redirect">Política de privacidade</span>
        do sistema.
      </span>
    </div>

    <div class="form-control">
      <q-btn
        type="submit"
        class="full-width button-primary"
        :disable="disabled"
      >
        Criar conta
      </q-btn>
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { UserRegisterDto } from 'src/api/models/dtos/register.dto';
import { useNotify } from '../composables/useNotify'
import { useAuth } from '../stores/auth.store'
import { useRouter } from 'vue-router';

const router = useRouter();
const { register } = useAuth();
const { message } = useNotify();

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

const matchCurrentPassword = () => {
  return form.value.password === form.value.password_confirmation;
};

function redirect() {
  // import router btw

  // router.push('/terms');
}

function signUp() {
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

  if (!matchCurrentPassword()) {
    message.notify('As senhas não coincidem', 'negative');
    return;
  }

  // remove dots and - from document
  let document = form.value.document.replace(/\D/g, '');
  let phone = form.value.phone_number.replace(/\D/g, '');

  // fix this data handling later
  if (phone.length < 12) {
    phone = `0${phone}`;
  }

  let data = {
    ...form.value,
    document: document,
    phone_number: phone,
  }

  register(data)
    .then(() => {
      message.notify('Usuário cadastrado com sucesso!', 'positive');

      router.push({ name: 'Index' });
    })
    .catch((err) => {
      message.notify(err.response.data.message, 'negative');
    });
}
</script>

<style scoped lang="css">
.pointer {
  cursor: pointer;
}

.button-primary {
  background-color: #00B8C4;
  color: white;
}
</style>
