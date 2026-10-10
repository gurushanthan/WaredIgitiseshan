(function () {
  const projectId = 'oc86z5oj';
  const dataset = 'production';
  const apiVersion = '2025-01-01';
  const query = `*[_type == "newsPost" && defined(publishedAt) && publishedAt <= now()] | order(publishedAt desc)[0...30] {
    _id,
    title,
    "slug": slug.current,
    category,
    summary,
    publishedAt,
    "imageUrl": image.asset->url,
    body
  }`;

  window.fetchWareDigitiseNews = async function () {
    const endpoint = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`;
    const response = await fetch(endpoint, {headers: {Accept: 'application/json'}});
    if (!response.ok) throw new Error(`Sanity news request failed (${response.status})`);
    const payload = await response.json();
    return Array.isArray(payload.result) ? payload.result : [];
  };
})();
