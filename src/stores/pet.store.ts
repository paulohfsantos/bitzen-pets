import { defineStore } from "pinia";
import { Pet } from "src/api/models/entities/pet.model";
import { PetService } from "src/api/services/pet.service";
import { computed, ref } from "vue";

export const usePet = defineStore('pet', () => {
  const pet = ref<Pet>();
  const isAuthenticated = computed(() => !!pet.value);
  const isUnauthenticated = computed(() => !pet.value);

  const petService = new PetService();

  function setPet(newPet: Pet) {
    pet.value = newPet;
  }

  return {
    // state
    pet,
    isAuthenticated,
    isUnauthenticated,

    // setters
    setPet,

    // actions
  };
})
