/** @format */

import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineNuxtPlugin(() => {
	gsap.registerPlugin(ScrollTrigger);

	const lenis = new Lenis({ autoRaf: false });

	lenis.scrollTo(0, { duration: 0, immediate: true, force: true, offset: 0 });
	lenis.on("scroll", ScrollTrigger.update);

	gsap.ticker.add(time => lenis.raf(time * 1000));
	gsap.ticker.lagSmoothing(0);

	return {
		provide: {
			lenis,
		},
	};
});
