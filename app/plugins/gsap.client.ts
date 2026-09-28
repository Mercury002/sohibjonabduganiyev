import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export default defineNuxtPlugin(() => {
	gsap.registerPlugin(ScrollTrigger, SplitText, gsap);

	return {
		provide: {
			ScrollTrigger,
			SplitText,
			gsap,
		},
	};
});
