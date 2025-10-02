<script setup>
import Particles from "~/blocks/Backgrounds/Particles/Particles.vue";
import mainComponent from "~/components/mainComponent.vue";
</script>
<template>
	<div class="particles-container">
		<Particles
			:particle-count="2500"
			:particle-spread="5"
			:speed="0.1"
			:particle-colors="['#ffffff']"
			:move-particles-on-hover="false"
			:particle-hover-factor="1"
			:alpha-particles="false"
			:particle-base-size="100"
			:size-randomness="1"
			:camera-distance="10"
			:disable-rotation="false"
		/>

		<mainComponent />
	</div>
</template>

<style scoped>
.particles-container {
	width: calc(100vw - 15px);
	margin: 0 auto;
	min-height: 100vh;
	position: relative;
	overflow: hidden;
	background-color: #121212;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
