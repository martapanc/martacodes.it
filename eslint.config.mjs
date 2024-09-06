import typescriptEslint from "@typescript-eslint/eslint-plugin";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/.storybook"],
}, ...compat.extends(
    "eslint:recommended",
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:storybook/recommended",
), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        "simple-import-sort": simpleImportSort,
        "unused-imports": unusedImports,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
            React: true,
            JSX: true,
        },
    },

    rules: {
        "no-unused-vars": "off",
        "no-console": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "react/no-unescaped-entities": "off",
        "react/display-name": "off",

        "react/jsx-curly-brace-presence": ["warn", {
            props: "never",
            children: "never",
        }],

        "react/no-direct-mutation-state": "off",
        "react-hooks/rules-of-hooks": "off",
        "@next/next/no-duplicate-head": "off",
        "storybook/hierarchy-separator": "off",
        "storybook/prefer-pascal-case": "off",
        "storybook/story-exports": "off",
        "react-hooks/exhaustive-deps": "off",

        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "warn",

        "unused-imports/no-unused-vars": ["warn", {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
        }],

        "@typescript-eslint/no-non-null-assertion": 0,
        "simple-import-sort/exports": "warn",

        "simple-import-sort/imports": ["warn", {
            groups: [
                ["^@?\\w", "^\\u0000"],
                ["^.+\\.s?css$"],
                ["^@/lib", "^@/hooks"],
                ["^@/data"],
                ["^@/components", "^@/container"],
                ["^@/store"],
                ["^@/"],
                [
                    "^\\./?$",
                    "^\\.(?!/?$)",
                    "^\\.\\./?$",
                    "^\\.\\.(?!/?$)",
                    "^\\.\\./\\.\\./?$",
                    "^\\.\\./\\.\\.(?!/?$)",
                    "^\\.\\./\\.\\./\\.\\./?$",
                    "^\\.\\./\\.\\./\\.\\.(?!/?$)",
                ],
                ["^@/types"],
                ["^"],
            ],
        }],
    },
}];