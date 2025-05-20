import { createClient } from "contentful";

let cachedClient: ReturnType<typeof createClient> | null = null;

export function getClient() {
  if (cachedClient) return cachedClient;

  cachedClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  return cachedClient;
}
