// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	ssr: true,
	css: ["@/assets/style.css", "@/assets/fonts/fonts.css"],
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },

	vite: {
		plugins: [tailwindcss()],
	},
	app: {
		head: {
			meta: [
				{
					name: "google-site-verification",
					content: "S9mlxy8mEM8Un1-cBHkg5lOoyU-vIDuz6-9V2e2HrrU",
				},
			],
		},
	},

	modules: ["nuxt-aos"],
});
