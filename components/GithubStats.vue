<template>
  <div class="github-buttons-container">
    <!-- // TODO -->
    <StarCount :project="project" />
    <IssuesCount :project="project" />
  </div>
</template>

<script>
export default {
  props: ['project'],
}
</script>
