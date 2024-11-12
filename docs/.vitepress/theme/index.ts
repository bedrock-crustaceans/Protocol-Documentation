// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from "vitepress/theme"
import './style.css'
import CustomLayout from './CustomLayout.vue'

export default {
    extends: DefaultTheme,
    Layout: CustomLayout,
    enhanceApp({ app, router, siteData }) {

    }
} satisfies Theme
