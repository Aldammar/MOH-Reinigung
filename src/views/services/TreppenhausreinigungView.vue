<template>
  <section class="section">
    <div class="container">
      <SectionHeader title="Treppenhausreinigung" subtitle="Regelmäßige Pflege von Treppenhäusern" />

      <div class="service-detail">
        <div class="service-image-container">
          <img src="" alt="Treppenhausreinigung" class="service-detail-image" />
        </div>
        <p>Wir bieten regelmäßige Treppenhausreinigung für Vermieter, Hausverwaltungen und Wohnungseigentümergemeinschaften. Saubere Treppenhäuser schaffen ein positives Wohnumfeld.</p>
        
        <h3>Unsere Leistungen:</h3>
        <ul>
          <li>Reinigung von Treppen und Fluren</li>
          <li>Entstaubung von Geländern und Handläufen</li>
          <li>Bodenreinigung</li>
          <li>Reinigung von Briefkästen und Klingelanlagen</li>
          <li>Regelmäßige Wartungstermine</li>
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