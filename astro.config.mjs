import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import remarkGfm from "remark-gfm"
import remarkSmartypants from "remark-smartypants"
import rehypeExternalLinks from "rehype-external-links"
import tailwind from "@astrojs/tailwind"

import partytown from "@astrojs/partytown"

// https://astro.build/config
export default defineConfig({
	site: "https://jeffmancilla.github.io",
	integrations: [
		mdx(),
		tailwind(),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
	],
	markdown: {
		shikiConfig: {
			theme: "nord",
		},
		remarkPlugins: [remarkGfm, remarkSmartypants],
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					target: "_blank",
				},
			],
		],
	},
})
