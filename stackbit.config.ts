import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  nodeVersion: "18",
  devCommand: "npm run dev",
  buildCommand: "npm run build",
  publishDir: "dist",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.json",
          fields: [{ name: "title", type: "string", required: true }],
        },
      ],
    }),
  ],
  // Optionally, if you use custom site mapping, you can add a siteMap
  // siteMap: ({ documents, models }) => { ... }
});
