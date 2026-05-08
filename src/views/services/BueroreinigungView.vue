<template>
  <section class="section">
    <div class="container">
      <SectionHeader title="Büroreinigung" subtitle="Saubere Arbeitsplätze und Büroräume" />

      <div class="service-detail">
        <div class="service-image-container">
          <img src="" alt="Büroreinigung" class="service-detail-image" />
        </div>
        <p>Unsere Büroreinigung sorgt für hygienische und produktive Arbeitsumgebungen. Wir reinigen Büros, Konferenzräume und Gemeinschaftsbereiche nach höchsten Standards.</p>
        
        <h3>Unsere Leistungen:</h3>
        <ul>
          <li>Tägliche Büroreinigung</li>
          <li>Reinigung von Arbeitsplätzen</li>
          <li>Hygienische Sanitärreinigung</li>
          <li>Entstaubung von Möbeln und Geräten</li>
          <li>Regelmäßige Desinfektion</li>
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