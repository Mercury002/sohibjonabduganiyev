<script setup lang="ts">
const companies = [
	{
		company: "BRB-Tech",
		position: "Middle Frontend Developer",
		enterDate: "09.2025",
		leaveDate: "Present",
		responsibility: ["Soon..."],
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque repudiandae laborum ducimus voluptate eos magni, expedita mollitia aut molestiae architecto saepe at iusto delectus rem in optio incidunt inventore est!",
		technologies: ["Soon..."],
	},
	{
		company: "Hurshida Enter Delux (HED)",
		position: "Middle Frontend Developer",
		enterDate: "10.2024",
		leaveDate: "09.2025",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque repudiandae laborum ducimus voluptate eos magni, expedita mollitia aut molestiae architecto saepe at iusto delectus rem in optio incidunt inventore est!",
		responsibility: [
			"Developing interfaces in Vue 3 and React (Next.js) using TypeScript, routing (vue-router, react-router-dom), and state managers (Pinia, Zustand, Redux Toolkit). ",
			"Project update with the implementation of microfrontends and a new UI library.",
			"Implementation and support of UI libraries: Ant Design Vue, Element Plus, Naive UI, ShadCN UI, Headless UI, ensuring consistency and reusability of components.",
			"Developed and implemented CI/CD pipelines (GitHub Actions) with automated testing and application builds. ",
			"Responsible for front-end applications, making decisions on layer separation, lazy loading, routing, component structure, fixing bugs, and improving system stability.",
		],
		technologies: [
			"Vue3",
			"React",
			"JavaScript",
			"TypeScript",
			"TailwindCSS",
			"Pinia",
			"Zustand",
			"Ant Design",
			"Element Plus",
			"Headless UI",
			"Naive UI",
			"ShadCN UI",
			"GitHub Actions",
			"Vite",
		],
	},
	{
		company: "REVISION LLC",
		position: "Strong Junior Frontend Developer",
		enterDate: "06.2024",
		leaveDate: "09.2024",
		responsibility: [
			"Developed and implemented new functional modules according to technical specifications.",
			"Implementation and support of UI libraries: Ant Design Vue, Element Plus, ensuring consistency and reusability of components.",
			"Optimized application performance, improved interface performance, refactored existing code, and eliminated technical debt.",
		],
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque repudiandae laborum ducimus voluptate eos magni, expedita mollitia aut molestiae architecto saepe at iusto delectus rem in optio incidunt inventore est!",
		technologies: ["JavaScript", "TypeScript", "React", "Vue3", "TailwindCSS", "SCSS", "Pinia", "Zustand", "Ant Design", "Vite"],
	},
	{
		company: "OOO BULAVKA BUSINESS",
		position: "Strong Junior Frontend Developer",
		enterDate: "02.2023",
		leaveDate: "04.2024",
		responsibility: [
			"We converted key pages (shopping cart, product page, checkout) from PHP to Vue.js, improving interface performance and responsiveness.",
			"We optimized the admin panel: reworked the query logic, image loading, and implemented dynamic loading of components.",
			"We ensured a stable migration of the supplier business dashboard from Quasar 1 to Quasar 2 and from Vue 2 to Vue 3.",
			"Interacted with the backend team and designers to integrate new features and maintain standards.",
			"Conducted code reviews, implemented best practices, and improved code quality.",
			"Participated in platform improvement sprints. Developed and implemented new functional modules based on technical specifications.",
			"Implementation and support of UI libraries: Ant Design Vue, Element Plus, ensuring consistency and reusability of components.",
		],
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque repudiandae laborum ducimus voluptate eos magni, expedita mollitia aut molestiae architecto saepe at iusto delectus rem in optio incidunt inventore est!",
		technologies: ["JavaScript", "Vue2", "Vue3", "Nuxt", "AngularJS", "TailwindCSS", "REST API"],
	},
	{
		company: "Cyber Animals",
		position: "Junior Frontend Developer",
		enterDate: "11.2021",
		leaveDate: "01.2023",
		responsibility: [
			"Developed parts of websites and web applications of varying complexity, including SPAs and admin panels",
			"Worked with Vue 2 and Vue 3: created components, connected APIs, ensured adaptability and responsiveness of the UI.",
			"I wrote a complex landing page consisting of 5-6 pages in native JS.",
		],
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque repudiandae laborum ducimus voluptate eos magni, expedita mollitia aut molestiae architecto saepe at iusto delectus rem in optio incidunt inventore est!",
		technologies: ["JavaScript", "Vue2", "Axios", "HTML", "CSS(SCSS)", "Bootstrap"],
	},
];
</script>
<template>
	<article class="w-full">
		<h2 class="text-lg mt-20! text-center">My professional journey and key contributions</h2>
	</article>

	<!-- data-aos="fade-up" -->
	<section class="flex flex-col gap-5 mt-5! w-full">
		<div v-for="(com, index) in companies" :key="index" data-aos="fade-up" class="w-full bg-[#1e1e1e] border border-[#383838] px-6! py-3!">
			<div class="flex items-center justify-between">
				<div>
					<h1 class="text-xl">{{ com.position }}</h1>
					<h1 class="lg">{{ com.company }}</h1>
				</div>
				<div class="flex items-center gap-1.5 text-sm bg-[#121212] px-3! py-1.5! rounded-2xl">
					<span>{{ com.enterDate }}</span>
					<span>-</span>
					<span>{{ com.leaveDate }}</span>
				</div>
			</div>
			<!-- <p class="mt-2! text-sm text-[#a1a1a1]">{{ com.description }}</p> -->

			<ul class="list-disc ml-6! mt-2.5!">
				<li v-for="(resp, index) in com.responsibility" :key="index" class="text-[#a1a1a1]">{{ resp }}</li>
			</ul>

			<ul class="mt-6! flex flex-wrap gap-1.5">
				<li v-for="(skill, index) in com.technologies" :key="index" class="bg-[#121212] rounded-2xl px-2.5! py-0.5! text-sm">{{ skill }}</li>
			</ul>
		</div>
	</section>
</template>
<style scoped>
.parent {
	width: 400px;
	height: 200px;
	background: #fcddbe;
	position: relative;
	clip-path: polygon(0 0, 20% 5%, 40% 0, 60% 5%, 80% 0, 100% 5%, 100% 100%, 0 100%);
}
</style>
