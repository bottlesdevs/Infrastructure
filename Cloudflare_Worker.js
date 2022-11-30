const base = 'https://bottles.mirror.garr.it';
const statusCode = 302;

const countryMap = {
  IT: 'https://bottles.mirror.garr.it',
  CH :'https://mirror.usebottles.com',
  EU: 'https://mirror.usebottles.com',
  US: 'https://cyyz.mirror.usebottles.com',
  CA: 'https://cyyz.mirror.usebottles.com'
};

async function handleRequest(request) {

  const url = new URL(request.url);
  const { pathname, search } = url;

  const country = request.cf.country;

  if (country != null && country in countryMap) {
    const destinationURL = countryMap[country] + pathname + search;
    return Response.redirect(destinationURL, statusCode);
  } else if (!(country in countryMap)) {
    const destinationURL = base + pathname + search;
    return Response.redirect(destinationURL, statusCode);
  } else {
    return fetch(request);
  }
}

addEventListener('fetch', async event => {
  event.respondWith(handleRequest(event.request));
});
