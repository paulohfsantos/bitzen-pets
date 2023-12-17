<template>
  <q-list class="flex">
    <q-item clickable :class="{ 'router-link-exact-active': !activeClass, [activeClass]: activeClass }">
      <q-item-section>
        <q-item-label>
          <router-link to="/" :active-class="activeClass ? 'sss' : 'sdd'">
            Início
          </router-link>
        </q-item-label>
      </q-item-section>
    </q-item>

    <!-- <q-item clickable :class="{ 'router-link-exact-active': !activeClass, [activeClass]: activeClass }">
      <q-item-section>
        <q-item-label>
          <router-link to="/pets" :active-class="activeClass ? 'sss' : 'sdd'">
            pets
          </router-link>
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-item clickable :class="{ 'router-link-exact-active': !activeClass, [activeClass]: activeClass }">
      <q-item-section>
        <q-item-label>
          <router-link to="/profile" :active-class="activeClass ? 'sss' : 'sdd'">
            profile
          </router-link>
        </q-item-label>
      </q-item-section>
    </q-item> -->
  </q-list>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const active = ref(false);

const isActive = computed(() => {
  return active.value ? 'link-exact' : '';
});

const activeClass = computed(() => {
  let { name } = useRoute();
  return name === 'Index' ? 'custom-active' : '';
});
</script>

<style scoped lang="scss">
.router-link-exact-active {
  &[exact] {
    /* Your custom class here, e.g. custom-active */
    background-color: #333;
  }
}
</style>
