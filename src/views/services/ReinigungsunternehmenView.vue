<template>
  <section class="section">
    <div class="container">
      <SectionHeader title="Reinigungsunternehmen" subtitle="Ihr zuverlässiger Partner für gewerbliche Gebäudereinigung" />

      <div class="service-detail">
        <div class="service-image-container">
          <img src="" alt="Reinigungsunternehmen" class="service-detail-image" />
        </div>
        <p>Als professionelles Reinigungsunternehmen bieten wir umfassende Facility Services für Unternehmen. Wir sind Ihr zuverlässiger Partner für alle Reinigungsbedürfnisse in Bürogebäuden und Gewerbeimmobilien.</p>
        
        <h3>Unsere Leistungen:</h3>
        <ul>
          <li>Tägliche Büroreinigung</li>
          <li>Unterhaltsreinigung</li>
          <li>Sonderreinigungen</li>
          <li>Facility Management</li>
          <li>24/7 Notfallreinigung</li>
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