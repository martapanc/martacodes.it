import IconAmazonwebservices from '~icons/simple-icons/amazonwebservices';
import IconAndroid from '~icons/simple-icons/android';
import IconAngular from '~icons/simple-icons/angular';
import IconApachemaven from '~icons/simple-icons/apachemaven';
import IconAstro from '~icons/simple-icons/astro';
import IconBootstrap from '~icons/simple-icons/bootstrap';
import IconClaude from '~icons/simple-icons/claude';
import IconCss from '~icons/simple-icons/css';
import IconCucumber from '~icons/simple-icons/cucumber';
import IconDjango from '~icons/simple-icons/django';
import IconDocker from '~icons/simple-icons/docker';
import IconDotnet from '~icons/simple-icons/dotnet';
import IconDrupal from '~icons/simple-icons/drupal';
import IconExpress from '~icons/simple-icons/express';
import IconFastapi from '~icons/simple-icons/fastapi';
import IconFirebase from '~icons/simple-icons/firebase';
import IconFlask from '~icons/simple-icons/flask';
import IconGithubactions from '~icons/simple-icons/githubactions';
import IconGo from '~icons/simple-icons/go';
import IconOpenai from '~icons/simple-icons/openai';
import IconGooglecloud from '~icons/simple-icons/googlecloud';
import IconGooglegemini from '~icons/simple-icons/googlegemini';
import IconGradle from '~icons/simple-icons/gradle';
import IconGraphql from '~icons/simple-icons/graphql';
import IconHibernate from '~icons/simple-icons/hibernate';
import IconHtml5 from '~icons/simple-icons/html5';
import IconJavascript from '~icons/simple-icons/javascript';
import IconJenkins from '~icons/simple-icons/jenkins';
import IconKotlin from '~icons/simple-icons/kotlin';
import IconMicrosoftazure from '~icons/simple-icons/microsoftazure';
import IconMongodb from '~icons/simple-icons/mongodb';
import IconMui from '~icons/simple-icons/mui';
import IconMysql from '~icons/simple-icons/mysql';
import IconNextdotjs from '~icons/simple-icons/nextdotjs';
import IconNodedotjs from '~icons/simple-icons/nodedotjs';
import IconOllama from '~icons/simple-icons/ollama';
import IconOpenapiinitiative from '~icons/simple-icons/openapiinitiative';
import IconOpenjdk from '~icons/simple-icons/openjdk';
import IconPhp from '~icons/simple-icons/php';
import IconPlaywright from '~icons/simple-icons/playwright';
import IconPostgresql from '~icons/simple-icons/postgresql';
import IconPuppeteer from '~icons/simple-icons/puppeteer';
import IconPython from '~icons/simple-icons/python';
import IconReact from '~icons/simple-icons/react';
import IconRedux from '~icons/simple-icons/redux';
import IconSass from '~icons/simple-icons/sass';
import IconSharp from '~icons/simple-icons/sharp';
import IconSpring from '~icons/simple-icons/spring';
import IconSqlite from '~icons/simple-icons/sqlite';
import IconStorybook from '~icons/simple-icons/storybook';
import IconStripe from '~icons/simple-icons/stripe';
import IconSupabase from '~icons/simple-icons/supabase';
import IconSwift from '~icons/simple-icons/swift';
import IconTailwindcss from '~icons/simple-icons/tailwindcss';
import IconTypescript from '~icons/simple-icons/typescript';
import IconVercel from '~icons/simple-icons/vercel';
import IconVitest from '~icons/simple-icons/vitest';
import IconVuedotjs from '~icons/simple-icons/vuedotjs';
import IconWordpress from '~icons/simple-icons/wordpress';
import IconZod from '~icons/simple-icons/zod';

/**
 * Monochrome glyph per technology, keyed by the name used in `skills.json`.
 *
 * These fill with `currentColor`, so the icon list controls their colour per
 * theme - matching how the project cards render their tool icons.
 *
 * Every icon is bundled individually by unplugin-icons, so this import list is
 * the whole cost - roughly 1KB each, not a whole collection. Adding a
 * technology: find its slug at simpleicons.org, import it above and map the
 * display name to it here.
 */
export const skillIconMapping: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  "ASP.NET": IconDotnet,
  "AWS": IconAmazonwebservices,
  "Android": IconAndroid,
  "Angular": IconAngular,
  "AstroJS": IconAstro,
  "Azure": IconMicrosoftazure,
  "Bootstrap": IconBootstrap,
  "C#": IconSharp,
  "CSS": IconCss,
  "ChatGPT": IconOpenai,
  "Claude": IconClaude,
  "Cucumber": IconCucumber,
  "Django": IconDjango,
  "Docker": IconDocker,
  "Drupal": IconDrupal,
  "Express": IconExpress,
  "FastAPI": IconFastapi,
  "Firebase": IconFirebase,
  "Flask": IconFlask,
  "GitHub Actions": IconGithubactions,
  "Go": IconGo,
  "Google Cloud Platform": IconGooglecloud,
  "Google Gemini": IconGooglegemini,
  "Gradle": IconGradle,
  "GraphQL": IconGraphql,
  "HTML": IconHtml5,
  "Hibernate": IconHibernate,
  "Java": IconOpenjdk,
  "Javascript": IconJavascript,
  "Jenkins": IconJenkins,
  "Kotlin": IconKotlin,
  "MaterialUI": IconMui,
  "Maven": IconApachemaven,
  "MongoDB": IconMongodb,
  "MySQL": IconMysql,
  "NextJS": IconNextdotjs,
  "Node.js": IconNodedotjs,
  "Ollama": IconOllama,
  "PHP": IconPhp,
  "Playwright": IconPlaywright,
  "Postgres": IconPostgresql,
  "Puppeteer": IconPuppeteer,
  "Python": IconPython,
  "React": IconReact,
  "Redux": IconRedux,
  "Rest API": IconOpenapiinitiative,
  "SASS": IconSass,
  "SQLite": IconSqlite,
  "Spring": IconSpring,
  "Storybook": IconStorybook,
  "Stripe": IconStripe,
  "Supabase": IconSupabase,
  "Swift": IconSwift,
  "TailwindCSS": IconTailwindcss,
  "Typescript": IconTypescript,
  "Vercel": IconVercel,
  "Vitest": IconVitest,
  "Vue": IconVuedotjs,
  "WordPress": IconWordpress,
  "Zod": IconZod,
};
