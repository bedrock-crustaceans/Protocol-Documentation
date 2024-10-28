import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Bedrock Protocol Wiki",
    description: "Documentation of the Bedrock Protocol",

    themeConfig: {
        sidebar: generateSidebar({
            documentRootPath: "docs/",
            collapsed: true,
            capitalizeEachWords: true,
            debugPrint: true,
        }),

        search: {
            provider: 'local'
        },

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
