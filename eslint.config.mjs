import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

const config = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "qa-screens/**",
      "next-env.d.ts",
      "design-reference/**",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
  {
    // The QA scripts read as a checklist: `condition ? ok(...) : fail(...)`.
    // That is the point of them, not an accidental no-op.
    files: ["scripts/**"],
    rules: {
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
];

export default config;
