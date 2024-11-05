import md5 from 'md5'; // md5 kütüphanesini içe aktar

export function getGravatarURL(email) {
  const address = String(email).trim().toLowerCase(); // E-posta adresini temizle
  const hash = md5(address); // MD5 hash'ini oluştur
  return `https://www.gravatar.com/avatar/${hash}`; // Gravatar URL'sini döndür
}