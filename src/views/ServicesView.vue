<template>
  <section class="section">
    <div class="container">
      <SectionHeader title="Services" subtitle="Vielseitige Reinigungs- und Pflegeleistungen für Unternehmen und Privathaushalte." />

      <div class="service-grid">
        <RouterLink to="/leistungen/baureinigung" class="service-link">
          <article class="service-card">
            <h3>Baureinigung</h3>
            <p>Professionelle Reinigung nach Bauarbeiten, inklusive Bauschuttentfernung und Feinreinigung.</p>
          </article>
        </RouterLink>
        <RouterLink to="/leistungen/wohnungsreinigung" class="service-link">
          <article class="service-card">
            <h3>Wohnungsreinigung</h3>
            <p>Gründliche Reinigung für Wohnungen, Objektübernahmen und Übergaben.</p>
          </article>
        </RouterLink>
        <RouterLink to="/leistungen/reinigungsunternehmen" class="service-link">
          <article class="service-card">
            <h3>Reinigungsunternehmen</h3>
            <p>Ihr zuverlässiger Partner für gewerbliche Gebäudereinigung und Facility Services.</p>
          </article>
        </RouterLink>
        <RouterLink to="/leistungen/glasreinigung" class="service-link">
          <article class="service-card">
            <h3>Glasreinigung</h3>
            <p>Saubere Fenster, Glasfassaden und Glasflächen für ein helles, professionelles Erscheinungsbild.</p>
          </article>
        </RouterLink>
        <RouterLink to="/leistungen/treppenhausreinigung" class="service-link">
          <article class="service-card">
            <h3>Treppenhausreinigung</h3>
            <p>Regelmäßige Pflege von Treppenhäusern und Eingangsbereichen für Vermieter und Hausverwaltungen.</p>
          </article>
        </RouterLink>
        <RouterLink to="/leistungen/aussenreinigung" class="service-link">
          <article class="service-card">
            <h3>Aussenreinigung</h3>
            <p>Reinigung von Fassaden, Terrassen und Außenbereichen für mehr Attraktivität und Sicherheit.</p>
          </article>
        </RouterLink>
        <RouterLink to="/leistungen/haushaltsaufloesung" class="service-link">
          <article class="service-card">
            <h3>Haushaltsauflösung</h3>
            <p>Sorgfältige Auflösung und Endreinigung von Haushalten und Wohnungen.</p>
          </article>
        </RouterLink>
        <RouterLink to="/leistungen/winterdienst" class="service-link">
          <article class="service-card">
            <h3>Winterdienst</h3>
            <p>Räumdienst und Streudienst zur sicheren Begehbarkeit von Wegen und Parkflächen.</p>
          </article>
        </RouterLink>
        <RouterLink to="/leistungen/gartenpflege" class="service-link">
          <article class="service-card">
            <h3>Gartenpflege</h3>
            <p>Gepflegte Außenanlagen mit Mäharbeiten, Unkrautentfernung und Saisonpflege.</p>
          </article>
        </RouterLink>
        <RouterLink to="/leistungen/bueroreinigung" class="service-link">
          <article class="service-card">
            <h3>Büroreinigung</h3>
            <p>Saubere Arbeitsplätze, hygienische Sanitärbereiche und gepflegte Gemeinschaftsflächen.</p>
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
import { RouterLink, RouterView } from 'vue-router';
</script>
