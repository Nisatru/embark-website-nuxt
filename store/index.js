import data from '~/static/data/data.json'

export const state = () => ({
  projects: data.projects,
  newsletter: data.newsletter,
})

export const mutations = {
  addGithubData(state, repos) {
    for (let i = 0; i < state.projects.length; i++) {
      const project = state.projects[i]
      const repo = repos.find((el) => el.name === project.name)
      if (repo) {
        project.description = repo.description
        project.stargazers_count = repo.stargazers_count
        project.language = repo.language
        project.forks_count = repo.forks_count
        project.open_issues_count = repo.open_issues_count
      }
    }

    state.projects.forEach((project) => (project.tags || []).sort())
    state.projects = state.projects.filter((project) => !project.hidden)
    // TODO when app launches
    state.projects.sort((a, b) => a.name.localeCompare(b.name))
  },
}

export const actions = {
  // async nuxtServerInit({ dispatch }) {
  //     await dispatch('fetchRepos')
  // },
  async fetchRepos({ commit }) {
    try {
      const fetchedRepos = await fetch(
        'https://api.github.com/search/repositories?q=+org:EmbarkStudios+is:public&sort=created&order=asc&per_page=100'
      )
      if (fetchedRepos && fetchedRepos.ok) {
        const { items: repos } = await fetchedRepos.json()
        commit('addGithubData', repos)
      }
    } catch (err) {
      console.error(`Failed to get repos info: ${err}`)
    }
  },
}

export const getters = {
  projectsWithTag: (state) => (tag) => {
    // console.log(tag);
    console.log(
      tag !== undefined
        ? state.projects.filter(
            (p) => p.tags !== undefined && p.tags.includes(tag)
          )
        : state.projects
    )
    return tag !== undefined
      ? state.projects.filter(
          (p) => p.tags !== undefined && p.tags.includes(tag)
        )
      : state.projects
  },
  featuredProjects: (state) => {
    return state.projects.filter((p) => p.featured)
  },
  searchedProjects: (state) => (search) => {
    return state.projects.filter((p) =>
      JSON.stringify(p).toLowerCase().includes(search.toLowerCase())
    )
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
}
