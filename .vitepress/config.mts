import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "死亡通知单",
  lang: 'zh_CN',
  description: "刑警罗飞系列，死亡通知单。十八年前的爆炸案，十八年后的Eumenides，消失的两分钟。      正义？救赎？宿命？离别！     所有的罪恶终将受到惩罚。",
  head:[
    ['link', {rel: 'icon', href: '/favicon.ico'}],
  ],
  sitemap: {
    hostname: 'https://swtzd.com'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '人物介绍', link: '/Notices/people' },
      { text: '粉丝群', link: '/Notices/wechat' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '人物介绍', link: '/Notices/people' },
          { text: '粉丝群', link: '/Notices/wechat' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    // ],
    footer: {
      message: '死亡通知单粉丝社区.',
      copyright: 'Copyright © 2023 swtzd'
    }
  }
})
