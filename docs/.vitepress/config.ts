import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "_repo_",
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en-US" }],
    ["meta", { name: "og:site_name", content: "_repo_" }],
    [
      "meta",
      {
        name: "og:image",
        content: "/logo.png",
      },
    ],
  ],
  locales: {
    root: {
      lang: "en-US",
      label: "English",
      description: "_description_",
      themeConfig: {
        nav: [
          { text: "Guide", link: "/guide/getting-started" },
          {
            text: "Resources",
            items: [
              {
                text: "Changelog",
                link: "https://github.com/_author_/_repo_/tree/main/CHANGELOG.md",
              },
            ],
          },
        ],
        sidebar: [
          {
            text: "Guide",
            items: [
              { text: "Why _repo_?", link: "/guide/why" },
              {
                text: "Getting Started",
                link: "/guide/getting-started",
              },
              {
                text: "_Feature_",
                link: "/guide/_feature_",
              },
            ],
          },
        ],
      },
    },
    "zh-Hans": {
      lang: "zh-Hans",
      label: "简体中文",
      description: "_description_",
      themeConfig: {
        nav: [
          { text: "指南", link: "/zh-Hans/guide/getting-started" },
          {
            text: "资源",
            items: [
              {
                text: "改动日志",
                link: "https://github.com/_author_/_repo_/tree/main/CHANGELOG.md",
              },
            ],
          },
        ],
        sidebar: [
          {
            text: "Guide",
            items: [
              { text: "为什么是 _repo_？", link: "/zh-Hans/guide/why" },
              {
                text: "起步",
                link: "/zh-Hans/guide/getting-started",
              },
              {
                text: "_特性_",
                link: "/zh-Hans/guide/_feature_",
              },
            ],
          },
        ],
      },
    },
  },
  themeConfig: {
    logo: { src: "/logo.png", width: 24, height: 24 },
    outline: "deep",
    editLink: {
      pattern: "https://github.com/_author_/_repo_/edit/main/docs/:path",
    },
    lastUpdated: {},
    socialLinks: [
      { icon: "github", link: "https://github.com/_author_/_repo_" },
    ],
    search: {
      provider: "local",
    },
  },
});
