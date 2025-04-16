module.exports = {
  schema: "https://didactic-spoon-g9447qrpqghv9r4-8000.app.github.dev/graphql",
  ignoreNoDocuments: true,
  documents: ["src/modules/**/*.graphql"],
  generates: {
    "./src/gql/": {
      documents: ["src/modules/**/*.graphql"],
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
