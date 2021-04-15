<template>
  <!-- TODO this class is in global.css -->
  <a :href="newsletter.link" class="card">
    <!-- TODO this class is in global.css -->
    <div class="newsletter-card">
      <!-- TODO this class is in global.css -->
      <h3 class="title">
        {{ newsletter.name }}
      </h3>
      <p v-html="newsletter.date"></p>
      <p v-html="newsletter.description"></p>
    </div>
  </a>
</template>

<script>
export default {
  props: ['newsletter'],
}
</script>
