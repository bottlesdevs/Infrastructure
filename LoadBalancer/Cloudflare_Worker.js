const base = 'https://bottles.mirror.garr.it';
const statusCode = 302;

const countryMap = {
  IT: 'https://bottles.mirror.garr.it',
  CH :'https://mirror.usebottles.com',
  AT: 'https://mirror.usebottles.com',
  BE :'https://mirror.usebottles.com',
  BG: 'https://mirror.usebottles.com',
  HR :'https://mirror.usebottles.com',
  CY: 'https://mirror.usebottles.com',
  CZ :'https://mirror.usebottles.com',
  DK: 'https://mirror.usebottles.com',
  EE :'https://mirror.usebottles.com',
  FI: 'https://mirror.usebottles.com',
  FR :'https://mirror.usebottles.com',
  DE: 'https://mirror.usebottles.com',
  GR :'https://mirror.usebottles.com',
  HU: 'https://mirror.usebottles.com',
  LV :'https://mirror.usebottles.com',
  LT: 'https://mirror.usebottles.com',
  LU: 'https://mirror.usebottles.com',
  MT :'https://mirror.usebottles.com',
  NL: 'https://mirror.usebottles.com',
  PL :'https://mirror.usebottles.com',
  PT: 'https://mirror.usebottles.com',
  RO :'https://mirror.usebottles.com',
  SK: 'https://mirror.usebottles.com',
  SI :'https://mirror.usebottles.com',
  ES: 'https://mirror.usebottles.com',
  SE :'https://mirror.usebottles.com',
  MX: 'https://cyyz.mirror.usebottles.com',
  US: 'https://cyyz.mirror.usebottles.com',
  CA: 'https://cyyz.mirror.usebottles.com'
};

async function handleRequest(request) {

  const url = new URL(request.url);
  const { pathname, search } = url;

  const country = request.cf.country;

  if (country != null && country in countryMap) {
    console.log(`Request came from country: ${country} and was redirect to the nearest CDN`);
    const destinationURL = countryMap[country] + pathname + search;
    return Response.redirect(destinationURL, statusCode);
  } else if (!(country in countryMap)) {
    console.log(`Request came from country: ${country} and was redirect to a general CDN`);
    const destinationURL = base + pathname + search;
    return Response.redirect(destinationURL, statusCode);
  } else {
    console.log(`Request came from country: ${country} and the request had an error`);
    return fetch(request);
  }
}

addEventListener('fetch', async event => {
  event.respondWith(handleRequest(event.request));
});
