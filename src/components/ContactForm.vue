<template>
  <div>
    <h3>Anfrageformular</h3>
    <form @submit.prevent="submitForm">
      <label>
        Name
        <input v-model="form.name" type="text" placeholder="Ihr Name" />
        <span v-if="errors.name" class="input-error">{{ errors.name }}</span>
      </label>

      <label>
        E-Mail
        <input v-model="form.email" type="email" placeholder="name@beispiel.de" />
        <span v-if="errors.email" class="input-error">{{ errors.email }}</span>
      </label>

      <label>
        Nachricht
        <textarea v-model="form.message" placeholder="Wobei dürfen wir helfen?"></textarea>
        <span v-if="errors.message" class="input-error">{{ errors.message }}</span>
      </label>

      <button class="button-primary" type="submit">Nachricht senden</button>
    </form>

    <div v-if="submitted" class="success-message">
      Danke! Ihre Anfrage wurde aufgenommen. Wir melden uns innerhalb von 24 Stunden.
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const errors = reactive({
  name: '',
  email: '',
  message: ''
});

const submitted = ref(false);

const validateEmail = (value: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

const resetErrors = () => {
  errors.name = '';
  errors.email = '';
  errors.message = '';
};

const submitForm = () => {
  resetErrors();
  let valid = true;

  if (!form.name.trim()) {
    errors.name = 'Bitte geben Sie Ihren Namen ein.';
    valid = false;
  }
  if (!form.email.trim()) {
    errors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
    valid = false;
  } else if (!validateEmail(form.email)) {
    errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    valid = false;
  }
  if (!form.message.trim()) {
    errors.message = 'Bitte schreiben Sie uns kurz, wobei wir helfen können.';
    valid = false;
  }

  if (!valid) {
    return;
  }

  submitted.value = true;
  form.name = '';
  form.email = '';
  form.message = '';
};
</script>
