<template>
  <section class="section">
    <div class="container">
      <SectionHeader title="Außenreinigung" subtitle="Reinigung von Fassaden und Außenbereichen" />

      <div class="service-detail">
        <div class="service-image-container">
          <img src="" alt="Außenreinigung" class="service-detail-image" />
        </div>
        <p>Unsere Außenreinigung umfasst die professionelle Reinigung von Fassaden, Terrassen und Außenanlagen. Wir sorgen für ein attraktives und sauberes Erscheinungsbild Ihres Gebäudes.</p>
        
        <h3>Unsere Leistungen:</h3>
        <ul>
          <li>Fassadenreinigung</li>
          <li>Terrassen- und Balkonreinigung</li>
          <li>Reinigung von Außenanlagen</li>
          <li>Entfernung von Graffiti und Verschmutzungen</li>
          <li>Höhenarbeiten mit Spezialausrüstung</li>
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