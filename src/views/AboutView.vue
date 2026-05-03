<template>
  <section class="section">
    <div class="container">
      <SectionHeader title="Über uns" subtitle="Wir sind ein erfahrenes Reinigungsteam, das deutsche Firmen und Haushalte zuverlässig unterstützt." />

      <div class="contact-grid">
        <article class="detail-card">
          <h3>Unsere Mission</h3>
          <p>
            Wir schaffen Sauberkeit, die Vertrauen schafft. Dabei setzen wir auf nachhaltige Reinigungsmethoden,
            freundlichen Service und maßgeschneiderte Konzepte für jede Branche.
          </p>
        </article>

        <article class="detail-card">
          <h3>Unsere Werte</h3>
          <ul class="feature-list">
            <li>Verlässlichkeit – pünktlich, sorgfältig und mit hohem Qualitätsanspruch.</li>
            <li>Nachhaltigkeit – umweltfreundliche Reinigungsmittel und weniger Abfall.</li>
            <li>Flexibilität – Termine nach Ihrem Bedarf, auch außerhalb der Geschäftszeiten.</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '../components/SectionHeader.vue';
</script>
