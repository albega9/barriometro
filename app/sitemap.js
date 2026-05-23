import { zonas } from './data/zonas'

export default function sitemap() {
  const base = 'https://valenciacity.properties'

  const paginasEstaticas = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/conocenos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contactanos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/privacidad`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]

  const paginasDistrito = zonas.map(zona => ({
    url: `${base}/distrito/${zona.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  return [...paginasEstaticas, ...paginasDistrito]
}