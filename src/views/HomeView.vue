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
          
          <RouterLink class="button-secondary" to="/leistungen">Unsere Leistungen</RouterLink>
          <RouterLink class="button-primary" to="/kontakt">Anfrage senden</RouterLink>
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

    

      <div class="service-grid">
        <RouterLink to="/leistungen/bueroreinigung" class="service-link">
          <article class="service-card">
            <h3>Büroreinigung</h3>
            <p>Saubere Arbeitsplätze, hygienische Sanitärbereiche und gepflegte Gemeinschaftsflächen.</p>
          </article>
        </RouterLink>
        <RouterLink to="/leistungen/glasreinigung" class="service-link">
          <article class="service-card">
            <h3>Glasreinigung</h3>
            <p>Fenster und Glasfronten streifenfrei reinigen – innen wie außen.</p>
          </article>
        </RouterLink>
        <RouterLink to="/leistungen/pflege-objekten" class="service-link">
          <article class="service-card">
            <h3>Pflege von Objekten</h3>
            <p>Treppenhäuser, Eingangsbereiche und Lagerflächen hygienisch sauber halten.</p>
          </article>
        </RouterLink>
        <RouterLink to="/leistungen/hotel-restaurant-reinigung" class="service-link">
          <article class="service-card">
            <h3>Hotel und Restaurant Reinigung</h3>
            <p>Umfassende Reinigung für Hotels und Restaurants, von Gästezimmern bis zur Küche.</p>
          </article>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '../components/SectionHeader.vue';
import { RouterLink } from 'vue-router';
import serviceImage from '../assets/glas-reinigung.jpeg';
import heroImage  from '../assets/Couple as a professional cleaners.jpeg';
</script>
