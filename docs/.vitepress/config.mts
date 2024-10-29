import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Bedrock Protocol Wiki",
    description: "Documentation of the Bedrock Protocol",

    // https://vitepress.dev/reference/default-theme-config
    themeConfig: {
        logo: ".assets/logo.png",

        sidebar: [
            {
                text: 'Information',
                collapsed: false,
                items: [
                    { text: 'Contributing', link: '/info/contributing' },
                    { text: 'Learn', link: '/info/learn' },
                ]
            },
            {
                text: 'Raknet Protocol',
                collapsed: false,
                items: [
                    { text: 'Start Here!', link: '/raknet/start' },
                    { text: 'Data Types', link: '/raknet/data-types' },
                ]
            },
            {
                text: 'Bedrock Protocol',
                collapsed: false,
                items: [
                    { text: 'Start Here!', link: '/bedrock/start' },
                    { text: 'Codec', link: '/bedrock/codec' },
                    { text: 'NBT', link: '/bedrock/nbt' },
                    { text: 'Login', link: '/bedrock/login' },
                ]
            },
            {
                text: 'NetherNet Protocol',
                collapsed: false,
                items: [
                    { text: 'Start Here!', link: '/nethernet/start' },
                ]
            }
        ],

        search: {
            provider: 'local'
        },

        nav: [
            {
                text: "Learn",
                link: "/learn"
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
            message: 'Not affiliated with Mojang Studios or Microsoft Corporation.',
            copyright: "Released under the Apache-2.0 License. Copyright @ 2024-present",
        }
    },
})