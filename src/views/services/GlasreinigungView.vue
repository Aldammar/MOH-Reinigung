<template>
  <section class="section">
    <div class="container">
      <SectionHeader title="Glasreinigung" subtitle="Saubere Fenster und Glasflächen" />

      <div class="service-detail">
        <div class="service-image-container">
          <img src="../../assets/glas-reinigung.jpeg" alt="Glasreinigung" class="service-detail-image" />
        </div>
        <p>Unsere Glasreinigung sorgt für streifenfreie und glänzende Fenster, Glasfassaden und Glasflächen. Wir verwenden professionelle Techniken und Mittel für beste Ergebnisse.</p>
        
        <h3>Unsere Leistungen:</h3>
        <ul>
          <li>Fensterreinigung innen und außen</li>
          <li>Glasfassadenreinigung</li>
          <li>Tür- und Schaufensterreinigung</li>
          <li>Streifenfreie Reinigung</li>
          <li>Höhenarbeiten mit Sicherheitsausrüstung</li>
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