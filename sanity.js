import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

const client = createClient({
  projectId: "uqaos55z",
  dataset: 'production',
  useCdn: true,
  apiVersion: "2023-06-30"
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

// RUN THIS to add exception for localhost 3000 CORS policy
// sanity cors add http://localhost:19006

export default client