<template>
  <section class="section">
    <div class="container">
      <SectionHeader title="Gartenpflege" subtitle="Gepflegte Außenanlagen" />

      <div class="service-detail">
        <div class="service-image-container">
          <img src="" alt="Gartenpflege" class="service-detail-image" />
        </div>
        <p>Unsere Gartenpflege sorgt für gepflegte und attraktive Außenanlagen. Von Rasenmähen bis zur saisonalen Pflege bieten wir umfassende Dienstleistungen für Haus- und Grundbesitzer.</p>
        
        <h3>Unsere Leistungen:</h3>
        <ul>
          <li>Rasenmähen und Rasenpflege</li>
          <li>Unkrautentfernung</li>
          <li>Hecken- und Baumschnitt</li>
          <li>Saisonale Gartenarbeiten</li>
          <li>Bewässerungssysteme warten</li>
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