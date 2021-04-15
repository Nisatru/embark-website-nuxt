<template>
  <div class="tags">
    <div v-for="tag in tags" :key="`tag-${tag}`" :class="'tag tag-' + tag">
      <!-- using div instead of NuxtLink because the Tags component gets wrapped into a link -->
      <!-- NuxtLink becomes a <a> -> hydration error -> nesting a-tags is not allowed -->
      <!-- <div @click="$router.push(tagUrl(tag))">
        {{ tag }}
      </div> -->
      <NuxtLink :to="tagUrl(tag)">{{ tag }}</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tags'],
  methods: {
    tagUrl(tag) {
      return `/tags?tag=${tag}`
    },
  },
}
</script>
<style scoped>
/* Tags */

.tag {
  display: inline-block;
  background: var(--embark-blue);
  margin: 3px;
  padding: 2px 6px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
  color: white;
  text-shadow: none;
  transition: all 0.2s ease-in-out;
}

.tag a {
  text-decoration: none;
}

.tag:hover {
  transform: scale(1.15);
}

.tag-rust {
  background: #731b00;
}

.tag-blender {
  background: #e08210;
}

.tag-web {
  background: #ffc30b;
}

.tag-go {
  background: #00ced1;
}

.tag-docker {
  background: #1e90ff;
}
</style>
