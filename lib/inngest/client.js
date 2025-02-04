import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "money-map", // Unique app ID
  name: "Money Map",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});