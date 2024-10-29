import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Bedrock Protocol Wiki",
    description: "Documentation of the Bedrock Protocol",
    base: "/protocol-wiki/",

    // https://vitepress.dev/reference/default-theme-config
    themeConfig: {
        logo: "/logo.png",

        sidebar: generateSidebar({
            documentRootPath: "docs/",
            collapsed: true,
            capitalizeEachWords: true,
            excludePattern: [ "public/" ]
        }),

        search: {
            provider: 'local'
        },

        head: [
            ['link', { rel: 'icon', type: 'image/x-icon', href: '/protocol-wiki/favicon.ico' }],
        ],

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
        ],

        footer: {
            message: "Released under the Apache-2.0 License.",
        },

        editLink: {
            pattern: "https://github.com/bedrock-crustaceans/protocol-wiki/tree/main/docs/:path",
            text: "Edit this page on GitHub",
        },

        lastUpdated: {
            text: "Last updated at",
            formatOptions: {
                dateStyle: "medium",
                timeStyle: "medium",
            },
        },
    },
})
