import { SanityClient, createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
export function getClient({preview}: {preview?: {token: string}}): SanityClient {
  const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
    perspective: 'published',
  })
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}
