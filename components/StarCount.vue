<template>
  <!-- TODO unused class: github-stargazers -->
  <div
    v-if="project.stargazers_count != undefined"
    class="github-btn github-stargazers github-btn-large"
  >
    <a
      class="gh-btn"
      :href="repoUrl(project)"
      rel="noopener noreferrer"
      target="_blank"
    >
      <span class="gh-ico" aria-hidden="true"></span>
      <!-- TODO unused class: gh-text -->
      <span class="gh-text">Star</span>
    </a>
    <a
      class="gh-count"
      :href="stargazersUrl(project)"
      rel="noopener noreferrer"
      target="_blank"
      aria-hidden="true"
      >{{ project.stargazers_count }}</a
    >
  </div>
</template>

<script>
import sharedMethods from '~/mixins/shared-methods'

export default {
  mixins: [sharedMethods],
  props: ['project'],
}
</script>
