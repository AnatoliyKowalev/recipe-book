import { createClient } from "contentful";

let cachedClient: ReturnType<typeof createClient> | null = null;

export function getClient() {
  if (cachedClient) return cachedClient;

  cachedClient = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
  });

  return cachedClient;
}
