<template>
  <section class="section">
    <div class="container">
      <SectionHeader title="Haushaltsauflösung" subtitle="Sorgfältige Auflösung und Endreinigung" />

      <div class="service-detail">
        <div class="service-image-container">
          <img src="" alt="Haushaltsauflösung" class="service-detail-image" />
        </div>
        <p>Wir bieten professionelle Haushaltsauflösung mit anschließender gründlicher Endreinigung. Unser Service umfasst die komplette Räumung, Entrümpelung und Reinigung von Wohnungen und Häusern.</p>
        
        <h3>Unsere Leistungen:</h3>
        <ul>
          <li>Komplette Haushaltsauflösung</li>
          <li>Entrümpelung und Entsorgung</li>
          <li>Gründliche Endreinigung</li>
          <li>Wertgegenstände sicher lagern</li>
          <li>Umweltgerechte Entsorgung</li>
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