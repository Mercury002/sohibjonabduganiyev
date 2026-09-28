<script setup lang="ts">
import magnetButton from "./magnetButton.vue";
import journeyComponent from "./journeyComponent.vue";
import footerComponent from "./footerComponent.vue";

import cvIcon from "~/assets/icons/cv.svg?raw";
import shareIcon from "~/assets/icons/share.svg?raw";

function windowOpen(url: string) {
	window.open(url, "_blank");
}
</script>
<template>
	<section
		class="container mt-[7.5px]! md:py-12! md:px-8! py-8! px-3! lg:mt-30! relative z-1 lg:w-[65vw] w-full h-full shadow-2xl rounded-md bg-[#1e1e1e]"
	>
		<article class="flex flex-col items-center">
			<div class="w-37.5 h-37.5 rounded-full overflow-hidden">
				<img class="w-full h-full object-contain" src="../assets/imgs/profile.jpg" alt="" />
			</div>
			<div class="md:mt-15! mt-7! flex flex-col items-center gap-3">
				<h1 class="text-xl">Abduganiyev Sohibjon</h1>

				<p class="text-sm max-w-full sm:max-w-[95%] md:max-w-[65%] text-center">
					Frontend Developer with 4+ years of experience specializing in Vue.js, TypeScript, and modern web technologies. Skilled in building
					responsive, user-friendly applications with a strong focus on performance and clean code.
				</p>

				<div class="flex items-center sm:flex-row flex-col gap-3">
					<magnetButton :icon="shareIcon" text="Contact via Telegram" @click="windowOpen('https://t.me/sohibjon_abduganiyev')" />
					<magnetButton :icon="cvIcon" text="View Resume" @click="windowOpen('https://hh.uz/resume/25ab8da2ff0b130e230039ed1f713475326474')" />
				</div>
			</div>

			<journey-component />
			<footerComponent />
		</article>
	</section>
</template>
<style scoped>
.container {
	background-color: #1e1e1e;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
