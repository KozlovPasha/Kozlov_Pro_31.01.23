//WH 37
/*На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням).
 Реалізувати перевірку на http/https. Якщо протокол не вказаний - додаємо
*/

const youtubeBtn = document.getElementById('youtube-btn');
const googleBtn = document.getElementById('google-btn');


youtubeBtn.addEventListener('click', goToValidatedYoutube);
googleBtn.addEventListener('click', goToValidatedGoogle);


function goToValidatedYoutube() {
  const url = 'https://www.youtube.com';
  const validatedUrl = validateUrl(url);
  window.location.href = validatedUrl;
}

function goToValidatedGoogle() {
  const url = 'https://www.google.com';
  const validatedUrl = validateUrl(url);
  window.location.href = validatedUrl;
}


function validateUrl(url) {
  if (!/^https?:\/\//i.test(url)) {
    url = 'https://' + url;
  }
  return url;
}