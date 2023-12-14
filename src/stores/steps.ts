import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSteps = defineStore('steps', () => {
  const currentStep = ref(1);

  function setStep(step: number) {
    currentStep.value = step;
  }

  function nextStep() {
    if (currentStep.value < 5) {
      currentStep.value ++;
    }
  }

  function prevStep() {
    if (currentStep.value === 1) {
      return;
    }
    if (currentStep.value > 1) {
      currentStep.value --;
    }
  }

  return {
    currentStep,
    setStep,
    nextStep,
    prevStep,
  };
});
