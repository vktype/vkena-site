import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VK",
  description: "Editing Resources.",
  cleanUrls: true,
  // Force dark mode and hide the toggle
  appearance: 'force-dark', 
  head: [
    ['link', { rel: 'stylesheet', href: '/style.css' }],
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    // Local search bar
    search: {
      provider: 'local'
    },
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'FAQ', link: '/faq' }
    ],

    sidebar: [
      {
        text: '🗁 Downloads',
        items: [
          { text: 'Windows', link: '/windows' },
          { text: 'MacOS', link: '/macos' },
          { text: 'Extensions & Scripts', link: '/extensions' },
          { text: 'Archive', link: '/archive' }
        ]
      },
      {
        text: '.ᐣ FAQ',
        items: [
          { text: 'Frequently Asked Questions', link: '/faq' },
          { text: 'Visual Installation Tutorials', link: '/tutorials' },
          { text: 'Adobe Ungenuine Pop-up Fix', link: '/aup' },
          { text: 'Maxon (Red Giant) Fixes', link: '/maxon' },
          { text: 'How to extract zip/7z files', link: '/xtr' }
        ]
      },
      {
        text: '⌕ Guides',
        items: [
          { text: 'After Effects Beginners Guide', link: '/bgtae' },
          { text: 'Changing After Effects Version', link: '/vsg' },
          { text: 'After Effects Installation Paths', link: '/paths' },
          { text: 'MacKed Adobe Activation', link: '/macked' },
          { text: 'GenP Adobe Activation', link: '/genp' },
          { text: 'Rosetta (M1+) Guide', link: '/ros' }
        ]
      },
      {
        text: 'ྀི Other',
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