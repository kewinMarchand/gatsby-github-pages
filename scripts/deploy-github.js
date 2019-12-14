const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/kewinMarchand/gatsby-github-pages',
  },
  () => {
    console.log('Deploy Complete!')
  }
)