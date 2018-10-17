module.exports = {
  title: "PSP 2.0 repository template (change me)",
  description: "A PSP 2.0 documentation demo using VuePress",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css",
        integrity:
          "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",
        crossorigin: "anonymous"
      }
    ]
  ],

  serviceWorker: true,
  markdown: {
    lineNumbers: true,
    config: md => {
      md.use(require("markdown-it-footnote"));
      md.use(require("markdown-it-sub"));
      md.use(require("markdown-it-sup"));
      md.use(require("markdown-it-ins"));
      md.use(require("markdown-it-mark"));
      md.use(require("markdown-it-deflist"));
      md.use(require("markdown-it-abbr"));
    }
  },
  lastUpdated: "Last Updated",
  themeConfig: {
    sidebar: true,
    // Assumes GitHub. Can also be a full GitLab url.
    repo: "pspusa/repo-template",
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: "GitHub",

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    //docsRepo: "pspusa/vuepress",
    // if your docs are not at the root of the repo:
    docsDir: "docs",
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: "master",
    // defaults to false, set to true to enable
    editLinks: true,
    serviceWorker: {
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    },
    locales: {
      "/": {
        // text for the language dropdown
        selectText: "Languages",
        // label for this locale in the language dropdown
        label: "English",
        // text for the edit-on-github link
        editLinkText: "Edit this page on GitHub",
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          {
            text: "Home",
            link: "/"
          },
          {
            text: "Guide",
            link: "/guide/"
          },
          // {
          //   text: "Languages",
          //   items: [
          //     { text: "English", link: "/" },
          //     { text: "Spanish", link: "/es" }
          //   ]
          // },
          {
            text: "PSPUSA Github",
            link: "https://github.com/pspusa"
          }
        ],
        sidebar: ["/", "/guide/"]
      }
    }
  },
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "en-US", // this will be set as the lang attribute on <html>
      title: "PSP 2.0 repository template (change me)",
      description: "A PSP 2.0 documentation demo using VuePress"
    },
    "/es/": {
      lang: "es-US",
      title: "Plantilla de repositorio de PSP 2.0 (cambiarme)",
      description:
        "Una demostración de documentación de PSP 2.0 usando VuePress"
    },

    configureWebpack() {
      return {
        resolve: {
          alias: {
            "@public": path.join(__dirname, "./public")
          }
        }
      };
    }
  }
};
