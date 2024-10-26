import { defineConfigWithTheme } from "vitepress"
import type { ThemeConfig } from "vitepress-carbon"
import baseConfig from "vitepress-carbon/config"

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
    extends: baseConfig,
    title: "Bedrock Protocol Wiki",
    description: "Documentation for the Bedrock Protocol",
    //base: "/vitepress-carbon-template/", if running on github-pages, set repository name here

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {
                text: "Discord",
                link: "https://discord.gg/7jHNuwb29X",
            },
            {
                text: "Contribute",
                link: "/contribute",
            },
            {
                text: "bedrock wiki",
                link: "https://wiki.bedrock.dev",
            },
        ],

        search: {
            provider: "local"
        },

        sidebar: [
            {
                text: "RakNet",
                items: [
                    { text: "Markdown Examples", link: "/markdown-examples" },
                    { text: "Runtime API Examples", link: "/api-examples" }
                ]
            }
        ],

        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/bedrock-crustaceans/protocol-wiki"
            },
            {
                icon: "discord",
                link: "https://discord.gg/7jHNuwb29X",
            }
        ]
    }
})