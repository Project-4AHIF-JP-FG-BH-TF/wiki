import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/wiki/",
  title: "Loggaroo Wiki",
  description: "The docs for the Loggaroo Application",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Home', link: '/'},
    ],

    sidebar: [
      {
        text: 'routes', items: [{
          text: 'rust',
          collapsed: true,
          items: []
        }, {
          text: 'node',
          collapsed: true,
          items: [
            {text: "session", link: "/routes/node/session"},
            {text: "log", link: "/routes/node/log"}
          ]
        }]
      },

    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/Project-4AHIF-JP-FG-BH-TF'}
    ]
  }
})
