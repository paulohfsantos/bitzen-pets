<template>
  <div class="user_settings_container">
    <q-btn flat round>
      <img :src="user.profile_photo_url" alt="profile_pic">
    </q-btn>

    <q-menu v-model="showing">
      <q-list>
        <q-item clickable v-close-popup>
          <q-item-section>New tab</q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>New incognito tab</q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable v-close-popup>
          <q-item-section>Recent tabs</q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>History</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUser } from '../stores/user.store'
import { User } from 'src/api/models/entities/user.model';

const { getUser } = useUser();
const showing = ref(false);
const user = ref<User>({
  id: 0,
  name: '',
  email: '',
  document: '',
  email_verified_at: '',
  phone_number: '',
  profile_photo_url: '',
  type: {
    id: 0,
    description: '',
  }
});

getUser().then((response) => {
  user.value = response;
});
</script>

<style scoped lang="scss">
.user_settings_container {
  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
}
</style>
