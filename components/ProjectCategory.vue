<template>
  <!-- TODO unused class: category -->
  <section class="category">
    <!-- TODO unused class: category-title -->
    <h2 class="category-title">
      Our <span class="category-tag">{{ tag }}</span> projects
    </h2>
    <!-- TODO this class is in global.css -->
    <div :id="tag" class="projects-container">
      <div
        v-for="(project, index) in projects"
        :key="`project-${index}`"
        class="card"
        @click="window.location.replace(repoUrl(p))"
      >
        <!-- TODO this class is in global.css -->
        <div class="project-card">
          <!-- TODO this class is in global.css -->
          <h3 class="title">
            <!-- TODO this class is in global.css -->
            <span class="emoji">{{ project.emoji }}</span>
            {{ project.name }}
          </h3>
          <p v-html="project.description"></p>
          <!-- TODO replace with component -->
          <Tags :tags="project.tags" />
          <!-- TODO replace with component -->
          <GithubStats :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sharedMethods from '~/mixins/shared-methods'

export default {
  mixins: [sharedMethods],
  props: ['projects', 'tag'],
}
</script>

<style scoped>
.category-tag {
  color: var(--embark-blue);
}
</style>
