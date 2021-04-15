<template>
  <div
    v-show="showSearch"
    class="search-overlay"
    style="display: none"
    @keyup.esc="toggleSearch"
  >
    <!-- TODO class not used? -->
    <div class="search-overlay__content">
      <h2>Search packages:</h2>
      <div class="search-input-group">
        <button class="search-close-button" @click="toggleSearch">
          <!-- TODO class not used? -->
          <span class="fa fa-close search-overlay__close"></span>
        </button>
        <!-- TODO id not used? -->
        <input
          id="search-input"
          ref="search"
          v-model="search"
          type="text"
          placeholder="Start typing..."
        />
      </div>
      <!-- TODO why __? -->
      <div class="search-overlay__results">
        <!-- TODO this class (card) is in global.css -->
        <div
          v-for="(p, index) in searchedProjects(search)"
          :key="`searched-project-${index}`"
          class="card"
          @click="window.location.replace(repoUrl(p))"
        >
          <!-- TODO this class is in global.css -->
          <div class="project-card">
            <!-- TODO this class is in global.css -->
            <h3 class="title">
              <!-- TODO this class is in global.css -->
              <span class="emoji">{{ p.emoji }}</span>
              {{ p.name }}
            </h3>
            <p>{{ p.description }}</p>
            <Tags :tags="p.tags" />
            <GithubStats :project="p" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import sharedMethods from '~/mixins/shared-methods'

export default {
  mixins: [sharedMethods],
  data() {
    return {
      search: '',
      showSearch: false,
    }
  },
  computed: {
    ...mapGetters(['searchedProjects']),
  },
  mounted() {
    this.$root.$on('toogle-search', this.toggleSearch)
  },
  methods: {
    toggleSearch() {
      this.showSearch = !this.showSearch
      if (this.showSearch) {
        // TODO Not needed can be deleted
        // document.body.classList.add('search-open')
        this.$nextTick(() => this.$refs.search.focus())
      } else {
        // TODO Not needed can be deleted
        // document.body.classList.remove('search-open')
        this.search = ''
      }
    },
  },
}
</script>

<style scoped>
.search-overlay {
  margin-top: 90px;
}

.search-overlay h2 {
  margin-top: 10px;
  display: inline-block;
}

.search-input-group {
  margin-bottom: 30px;
}

.search-input-group > input {
  padding: 5px 5px;
  width: 200px;
  font-size: 1rem;
}

.search-close-button {
  height: 40px;
  width: 40px;
  cursor: pointer;
  background: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  padding: 0;
}

.search-overlay__results {
  display: flex;
  flex-wrap: wrap;
}
</style>
