import {withMermaid} from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  base: "/wiki/",
  title: "Loggaroo Wiki",
  description: "The docs for the Loggaroo Application",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Home', link: '/'},

    ],

    sidebar: [
      {text: "colors", link: "/colors"},
      {text: "database", link: "/database"},
      {
        text: 'routes', items: [
          {
            text: 'rust',
            collapsed: true,
            items: [
              {text: "files", link: "/routes/rust/files"}
            ]k
          }, {
            text: 'node',
            collapsed: true,
            items: [
              {text: "session", link: "/routes/node/session"},
              {text: "log", link: "/routes/node/log"},
              {text: "files", link: "/routes/node/files"}
            ]
          }]
      },

    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/Project-4AHIF-JP-FG-BH-TF'}
    ]
  },
  optimizeDeps: {
    include: ['@braintree/sanitize-url'],
  },
  resolve: {
    alias: {
      dayjs: 'dayjs/',
    },
  },
})
