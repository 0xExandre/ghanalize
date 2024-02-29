const axios = require('axios');

async function analyzeGitHubProfile(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    const userData = response.data;
    
    // Kullanıcı verilerini analiz etmek için gerekli işlemler yapılabilir
    
    console.log(userData); // Kullanıcı verilerini konsola yazdır

    return userData; // Kullanıcı verilerini döndür
  } catch (error) {
    console.error('GitHub profili alınamadı:', error.message);
    throw error; // Hata durumunda hatayı yeniden fırlat
  }
}

module.exports = analyzeGitHubProfile;
