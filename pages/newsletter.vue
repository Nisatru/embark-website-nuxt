<template>
  <div>
    <BackButton />

    <!-- TODO this class is in global.css -->
    <div class="container">
      <h1>🗞 Newsletter</h1>
      <p>
        Stay up to date with new open source projects and developer events from
        Embark with our developer newsletter.
      </p>
      <!-- TODO this class is in global.css -->
      <a class="button-primary" href="https://mailchi.mp/3608b3a1adca/embarkdev"
        >Sign up</a
      >
      <h2>Previous Editions:</h2>
    </div>

    <!-- TODO this css class seems to be unused? -->
    <section class="category">
      <!-- TODO this class is in global.css -->
      <div class="newsletter-container container">
        <NewsletterCard
          v-for="(n, index) in this.$store.state.newsletter"
          :key="`newsletter-${index}`"
          :newsletter="n"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { newsletterHeadMetaTags } from '~/constants/head-meta-tags'

export default {
  head() {
    return newsletterHeadMetaTags
  },
  mounted() {
    this.$store.dispatch('fetchRepos')
  },
}
</script>
