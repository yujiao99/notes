module.exports = {
  plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom'],
  title: 'Notes',
  base: '/notes/',
  head: [['link', { rel: 'icon', href: '/img/logo.jpg' }]],
  themeConfig: {
    logo: '/img/logo.jpg',
    nav: [
      { text: 'Home', link: '/'}
    ],
    sidebar: require('./sidebar.js'),
    sidebarDepth: 2,
    smoothScroll: true,
    nextLinks: true,
    prevLinks: true,
    repo: 'https://gitee.com/yujiao99/dashboard/projects',
    repoLabel: 'Gitee',
  }
}