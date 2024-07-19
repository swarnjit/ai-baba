require("dotenv").config();
import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHCSM_URL,
  overwrite: true,
  documents: ["app/**/*.{ts,tsx,gql,graphql}"],
  generates: {
    "./app/generated/hygraph-schema.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        "fragment-matcher",
      ],
    },
  },
};

export default config;
