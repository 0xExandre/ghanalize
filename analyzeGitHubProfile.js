const analyzeGitHubProfile = require('../analyzeGitHubProfile');

const username = 'github_username'; // GitHub kullanıcı adınızı buraya girin

analyzeGitHubProfile(username)
  .then(userData => {
    console.log('GitHub Profili:', userData);
  })
  .catch(error => {
    console.error('GitHub profili alınamadı:', error.message);
  });
