<template>
  <div>
    <BackButton />

    <!-- TODO id used somewhere? -->
    <section id="projects">
      <!-- TODO this class is in global.css -->
      <div class="container">
        <ProjectCategory
          :tag="getTagFromUrl()"
          :projects="projectsWithTag(getTagFromUrl())"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import sharedMethods from '~/mixins/shared-methods'

import { tagsHeadMetaTags } from '~/constants/head-meta-tags'

export default {
  mixins: [sharedMethods],
  head() {
    return tagsHeadMetaTags
  },
  computed: {
    ...mapGetters(['projectsWithTag']),
  },
  mounted() {
    this.$store.dispatch('fetchRepos')
  },
  methods: {
    getTagFromUrl() {
      return this.$route.query.tag
    },
  },
}
</script>
