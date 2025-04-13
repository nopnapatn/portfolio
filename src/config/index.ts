export const config = {
  // Server-side only variables - only use these in server components or API routes
  notion: {
    apiKey: process.env.NOTION_API_KEY as string,
    databaseId: process.env.NOTION_DATABASE_ID as string
  }
}
