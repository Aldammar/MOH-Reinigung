<template>
  <section class="section">
    <div class="container">
      <SectionHeader title="Wohnungsreinigung" subtitle="Gründliche Reinigung für Wohnungen" />

      <div class="service-detail">
        <div class="service-image-container">
          <img src="" alt="Wohnungsreinigung" class="service-detail-image" />
        </div>
        <p>Wir bieten professionelle Wohnungsreinigung für Objektübernahmen, Übergaben und laufende Pflege. Unsere erfahrenen Reinigungskräfte sorgen für hygienische und saubere Wohnräume.</p>
        
        <h3>Unsere Leistungen:</h3>
        <ul>
          <li>Gründliche Bodenreinigung</li>
          <li>Reinigung von Küchen und Bädern</li>
          <li>Entstaubung aller Oberflächen</li>
          <li>Fensterreinigung innen</li>
          <li>Endreinigung vor Einzug/Auszug</li>
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