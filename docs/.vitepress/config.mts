import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Bedrock Protocol Wiki",
    description: "Documentation of the Bedrock Protocol",
    base: "protocol-wiki/",

    // https://vitepress.dev/reference/default-theme-config
    themeConfig: {
        logo: ".assets/logo.png",

        sidebar: generateSidebar({
            documentRootPath: "docs/",
            collapsed: true,
            capitalizeEachWords: true,
        }),

        search: {
            provider: 'local'
        },

        nav: [
            {
                text: "Contribute",
                link: "/about/contribute",
            },
            {
                text: "Discord",
                link: "https://discord.gg/7jHNuwb29X",
            },
            {
                text: "Bedrock Wiki",
                link: "https://wiki.bedrock.dev",
            },
        ],

        socialLinks: [
            {
                "icon": "github",
                "link": "https://github.com/bedrock-crustaceans/protocol-wiki"
            },
            {
                "icon": "discord",
                "link": "https://discord.gg/7jHNuwb29X"
            }
        ]
    },
})
