<script setup lang="ts">
import Magnet from "~/blocks/Animations/Magnet/Magnet.vue";
const props = defineProps<{
	icon: string;
	text: string;
}>();
</script>
<template>
	<Magnet
		:padding="30"
		:disabled="false"
		:magnet-strength="10"
		active-transition="transform 0.2s ease-out"
		inactive-transition="transform 0.6s ease-in-out"
		wrapper-class-name="custom-wrapper"
		inner-class-name="custom-inner"
	>
		<button>
			<span v-html="props.icon"></span>
			<span>{{ props.text }}</span>
		</button>
	</Magnet>
</template>
<style>
span.fill svg path[stroke] {
	stroke: currentColor;
}

span.custom-size svg {
	width: inherit;
	height: inherit;
}

span.fill svg path[fill] {
	fill: currentColor;
}

span.fill svg rect[fill] {
	fill: currentColor;
}

span.custom-opacity svg g {
	opacity: inherit;
}
</style>
