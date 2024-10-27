import fs from "fs";
import path from "path";
import {VPSidebarItem} from "vitepress-carbon/dist/theme/components";

export function getSidebar() {
    let items: DefaultTheme.SidebarItem[] = [];

    resolveSections(items, "docs/")

    return items;
}

function resolveSections(items: DefaultTheme.SidebarItem[], dir: string) {
    let entries = fs.readdirSync(dir);

    for (const entry of entries) {
        let entryPath = path.join(dir, entry);
        let stats = fs.statSync(entryPath);
        let indexPath = path.join(entryPath, "index.md");

        console.log(entryPath);

        // Sort all paths with dots out like ".git" or "docs/.vitepress"
        if (entry.startsWith(".")) {
            continue;
        }

        if (stats.isDirectory() && fs.existsSync(indexPath)) {
            let innerItems: DefaultTheme.SidebarItem[] = [];
            resolveSections(innerItems, entryPath);

            let item = new VPSidebarItem();
            item.text = "GOOB";
            item.collapsed = true;
            item.items = innerItems;

            items.push(items);
        } else if (stats.isDirectory()) {
            console.log(`[Protocol-Wiki] Missing index.md file for \"${entryPath}\\"`);
        } else if (stats.isFile()) {
            //items.push(DefaultTheme.SidebarItem);
        }
    }
}
