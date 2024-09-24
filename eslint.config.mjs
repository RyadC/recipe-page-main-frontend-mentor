import globals from "globals";
import pluginJs from "@eslint/js";
import js from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  js.configs.recommended,
  pluginJs.configs.recommended,
];
