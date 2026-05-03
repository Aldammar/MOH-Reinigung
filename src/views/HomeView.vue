<template>
  <section class="hero section">
    <div class="container hero-grid">
      <div class="hero-copy">
        <p class="section-subtitle">Professionelle Gebäudereinigung in Deutschland</p>
        <h1 class="section-title">Ihre Reinigungskraft für Büro, Praxis, Haus und mehr.</h1>
        <p class="hero-description">
          MOH Reinigung bietet maßgeschneiderte Reinigungsleistungen mit Fokus auf Qualität, Zuverlässigkeit und Umweltschutz.
          Wir kümmern uns um saubere Räume, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
        </p>

        <div class="hero-actions">
          <RouterLink class="button-primary" to="/kontakt">Anfrage senden</RouterLink>
          <RouterLink class="button-secondary" to="/leistungen">Unsere Leistungen</RouterLink>
        </div>

        <div class="hero-meta">
          <div>
            <strong>24/7 Erreichbarkeit</strong>
            <span>Telefonisch und per Mail</span>
          </div>
          <div>
            <strong>100+ zufriedene Kunden</strong>
            <span>Gewerbe & Wohnimmobilien</span>
          </div>
        </div>
      </div>

      <div class="hero-image">
        <img :src="heroImage" alt="Reinigung Illustration" />
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <SectionHeader title="Unsere Kernkompetenzen" subtitle="Von Büro und Praxis bis Objektpflege: Wir sorgen für glänzende Ergebnisse bei jeder Art von Reinigung." />

      <div class="service-hero">
        <img :src="serviceImage" alt="Dienstleistungsillustration" class="service-image" />
      </div>

      <div class="service-grid">
        <article class="service-card">
          <h3>Büroreinigung</h3>
          <p>Saubere Arbeitsplätze, hygienische Sanitärbereiche und gepflegte Gemeinschaftsflächen.</p>
        </article>
        <article class="service-card">
          <h3>Glasreinigung</h3>
          <p>Fenster und Glasfronten streifenfrei reinigen – innen wie außen.</p>
        </article>
        <article class="service-card">
          <h3>Pflege von Objekten</h3>
          <p>Treppenhäuser, Eingangsbereiche und Lagerflächen hygienisch sauber halten.</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '../components/SectionHeader.vue';
import { RouterLink } from 'vue-router';
import heroImage from '../assets/bodenputzen.jpg';
import serviceImage from '../assets/service-cleaning.svg';
</script>
