<template>
  <section class="section">
    <div class="container">
      <SectionHeader title="Kontakt" subtitle="Senden Sie uns Ihre Anfrage – wir melden uns schnellstmöglich zurück." />

      <div class="contact-grid">
        <article class="contact-card">
          <h3>Kontaktinformationen</h3>
          <p>MOH Reinigung</p>
          <p>Telefon: 0800 1234 567</p>
          <p>E-Mail: kontakt@moh-reinigung.de</p>
          <p>Region: deutschlandweit</p>
        </article>

        <article class="contact-card">
          <ContactForm />
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '../components/SectionHeader.vue';
import ContactForm from '../components/ContactForm.vue';
</script>
