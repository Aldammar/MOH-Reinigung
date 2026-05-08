<template>
  <section class="section">
    <div class="container">
      <SectionHeader title="Pflege von Objekten" subtitle="Hygienische Pflege von Immobilien" />

      <div class="service-detail">
        <div class="service-image-container">
          <img src="" alt="Pflege von Objekten" class="service-detail-image" />
        </div>
        <p>Wir bieten professionelle Pflege von Objekten wie Treppenhäusern, Eingangsbereichen und Lagerflächen. Unsere Dienstleistungen sorgen für saubere und gepflegte Immobilien.</p>
        
        <h3>Unsere Leistungen:</h3>
        <ul>
          <li>Treppenhausreinigung</li>
          <li>Eingangsbereiche pflegen</li>
          <li>Lagerflächen reinigen</li>
          <li>Regelmäßige Unterhaltsreinigung</li>
          <li>Sicherheitsinspektionen</li>
        </ul>

        <RouterLink class="button-primary" to="/kontakt">Anfrage stellen</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '../../components/SectionHeader.vue';
import { RouterLink } from 'vue-router';
</script>