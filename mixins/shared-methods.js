export default {
  methods: {
    repoUrl(project) {
      return `https://github.com/EmbarkStudios/${project.name}`
    },
    stargazersUrl(project) {
      return `https://github.com/EmbarkStudios/${project.name}/stargazers`
    },
    issuesUrl(project) {
      return `https://github.com/EmbarkStudios/${project.name}/issues`
    },
  },
}
