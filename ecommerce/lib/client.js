import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'dp5n6j24',
  dataset: 'production',
  apiVersion: '2023-04-04',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

export const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);