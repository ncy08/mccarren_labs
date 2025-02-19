import { defineStackbitConfig } from "@stackbit/types";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  nodeVersion: "18",
  devCommand: "npm run dev",
  buildCommand: "npm run build",
  publishDirectory: "dist",
  contentSources: [],
});
