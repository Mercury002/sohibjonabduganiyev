<template>
	<div>
		<NuxtRouteAnnouncer />
		<NuxtPage />
	</div>
</template>
<script lang="ts" setup>
import favIcon from "./assets/icons/logos--javascript.svg";

useHead({
	title: "sohibjonabduganiyev",
	link: [{ rel: "icon", type: "image/svg+xml", href: favIcon }],
});
</script>
