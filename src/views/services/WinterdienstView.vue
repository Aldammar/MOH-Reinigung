<template>
  <section class="section">
    <div class="container">
      <SectionHeader title="Winterdienst" subtitle="Räumdienst und Streudienst" />

      <div class="service-detail">
        <div class="service-image-container">
          <img src="" alt="Winterdienst" class="service-detail-image" />
        </div>
        <p>Unser Winterdienst sorgt für sichere Begehbarkeit von Wegen, Parkflächen und Zugängen während der Wintermonate. Wir bieten zuverlässigen Schneeräum- und Streudienst.</p>
        
        <h3>Unsere Leistungen:</h3>
        <ul>
          <li>Schneeräumung von Wegen und Parkplätzen</li>
          <li>Streudienst mit umweltfreundlichen Mitteln</li>
          <li>Eis- und Glättebeseitigung</li>
          <li>24/7 Notfallbereitschaft</li>
          <li>Regelmäßige Kontrollfahrten</li>
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