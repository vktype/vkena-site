import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VK",
  description: "Editing Resources.",
  cleanUrls: true,
  head: [
    ['link', { rel: 'stylesheet', href: '/style.css' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'FAQ', link: '/faq' }
    ],

    sidebar: [
  // 1. Keep your original Downloads section at the top
  {
    text: 'Downloads',
    items: [
      { text: 'Windows', link: '/windows' },
      { text: 'MacOS', link: '/macos' },
      { text: 'Extensions & Scripts', link: '/extensions' },
      { text: 'Archive', link: '/archive' }
    ]
  },
  // 2. Your new FAQ & Tutorials category
  {
    text: 'FAQ & Tutorials',
    items: [
      { text: 'Frequently Asked Questions', link: '/faq' },
      { text: 'Visual Installation Tutorials', link: '/tutorials' },
      { text: 'Adobe Ungenuine Pop-up Fix', link: '/aup' },
      { text: 'Maxon (Red Giant) Fixes', link: '/maxon' },
      { text: 'How to extract zip/7z files', link: '/xtr' }
    ]
  },
  // 3. Your new Guides & Activation category
  {
    text: 'Guides & Activation',
    items: [
      { text: 'After Effects Beginners Guide', link: '/bgtae' },
      { text: 'Changing After Effects Version', link: '/version' },
      { text: 'After Effects Installation Paths', link: '/paths' },
      { text: 'MacKed Adobe Activation', link: '/macked' },
      { text: 'GenP Adobe Activation', link: '/genp' },
      { text: 'Rosetta (M1+) Guide', link: '/ros' }
    ]
  },
  // 4. Your Other category
  {
    text: 'Other',
    items: [
      { text: 'Safety Inquiries', link: '/safety' }
    ]
  }
],

    socialLinks: [
      { icon: 'tiktok', link: 'https://www.tiktok.com/@vktype?_r=1&_t=ZP-97bPQwbr6Za' }
    ]
  }
})
