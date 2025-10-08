// eslint.config.js
import next from "eslint-config-next";

export default [
  ...next(),
  {
    plugins: { tailwindcss: tailwind },
    ignores: [
      "node_modules",
      ".next",
      "dist",
      "out",
    ],
    rules: {
      "tailwindcss/classnames-order": "warn",
      "react/no-unescaped-entities": "off",
      "react/jsx-no-target-blank": "off",
    },
  },
];
