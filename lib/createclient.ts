import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types' // Import the correct type

export const client = createClient({
    projectId: 'cctl7mz5',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-03-07',
});

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
    return builder.image(source);
};