<template>
  <section class="section">
    <div class="container">
      <SectionHeader title="Baureinigung" subtitle="Professionelle Reinigung nach Bauarbeiten" />

      <div class="service-detail">
        <div class="service-image-container">
          <img src="../../assets/Baureinigung.jpeg" alt="Baureinigung" class="service-detail-image" />
        </div>
        <p>Unsere Baureinigung sorgt für eine gründliche und professionelle Reinigung nach Bau- oder Renovierungsarbeiten. Wir entfernen Bauschutt, Staub und Rückstände, um Ihre Immobilie in einen sauberen und bezugsfertigen Zustand zu versetzen.</p>
        
        <h3>Unsere Leistungen:</h3>
        <ul>
          <li>Bauschuttentfernung und Entsorgung</li>
          <li>Feinreinigung aller Oberflächen</li>
          <li>Entstaubung von Decken und Wänden</li>
          <li>Reinigung von Fenstern und Türen</li>
          <li>Endreinigung vor Übergabe</li>
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

<style>
.service-image-container {
  width: 100%;
  max-width: 760px;
  margin: 0 auto 1.5rem;
}

.service-detail-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
</style>