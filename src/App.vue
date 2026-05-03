<template>
  <div class="app-shell">
    <header class="site-header">
      <div class="container header-inner">
        <div class="brand">
          <RouterLink to="/" class="brand-link">
            <img :src="logo" alt="MOH Reinigung Logo" class="brand-logo" />
          </RouterLink>
          <div>
            <p class="brand-name">MOH Reinigung</p>
            <p class="brand-tag">Sauber. Zuverlässig. Regional.</p>
          </div>
        </div>

        <nav class="main-nav">
          <RouterLink to="/">Start</RouterLink>
          <RouterLink to="/leistungen">Leistungen</RouterLink>
          <RouterLink to="/ueber-uns">Über uns</RouterLink>
          <RouterLink to="/kontakt">Kontakt</RouterLink>
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="site-footer">
      <div class="container footer-inner">
        <p>MOH Reinigung | deutschlandweit persönlich erreichbar</p>
        <p>Telefon: 0800 1234 567 | E-Mail: kontakt@moh-reinigung.de</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import logo from './assets/moh-reinigung-logo.png';
</script>
