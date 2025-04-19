import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      "https://8000-alyatwa-tynest-22h7fb9z82n.ws-us118.gitpod.io/graphql": {
        headers: {
          "x-admin-secret": "admin-secret",
        },
      },
    },
  ],
  ignoreNoDocuments: true,
  documents: ["src/modules/**/*.gql", "src/modules/**/*.graphql"],
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [],
    },
    // "src/gql/types.ts": {
    //   plugins: ["typescript", "typescript-operations", "typed-document-node"],
    // },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
