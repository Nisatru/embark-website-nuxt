<template>
  <!-- TODO unused class: github-stargazers -->
  <div
    v-if="project.open_issues_count != undefined"
    class="github-btn github-stargazers github-btn-large"
  >
    <a
      class="gh-btn"
      :href="issuesUrl(project)"
      rel="noopener noreferrer"
      target="_blank"
    >
      <span class="gh-ico" aria-hidden="true"></span>
      <!-- TODO unused class: gh-text -->
      <span class="gh-text">Issues</span>
    </a>
    <a
      class="gh-count"
      :href="issuesUrl(project)"
      rel="noopener noreferrer"
      target="_blank"
      aria-hidden="true"
      >{{ project.open_issues_count }}</a
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
