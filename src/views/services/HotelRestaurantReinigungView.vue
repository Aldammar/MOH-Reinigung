<template>
  <section class="section">
    <div class="container">
      <SectionHeader title="Hotel und Restaurant Reinigung" subtitle="Umfassende Reinigung für Hotellerie und Gastronomie" />

      <div class="service-detail">
        <div class="service-image-container">
          <img src="" alt="Hotel und Restaurant Reinigung" class="service-detail-image" />
        </div>
        <p>Unsere spezialisierte Reinigung für Hotels und Restaurants sorgt für höchste Hygiene- und Sauberkeitsstandards. Von Gästezimmern bis zur professionellen Küche – wir übernehmen alles.</p>
        
        <h3>Unsere Leistungen:</h3>
        <ul>
          <li>Gästezimmerreinigung</li>
          <li>Küchen- und Speisesaalreinigung</li>
          <li>Desinfektion von Sanitärbereichen</li>
          <li>Reinigung von Gemeinschaftsräumen</li>
          <li>Regelmäßige Qualitätskontrollen</li>
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