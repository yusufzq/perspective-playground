Vue
	.createApp({
		data() {
			return {
				perspective: 100,
				rotateX: 0,
				rotateY: 0,
				rotateZ: 0
			}
		},
		methods: {
			reset() {
				this.perspective = 100;
				this.rotateX = 0;
				this.rotateY = 0;
				this.rotateZ = 0;
			},
			async copy() {
				let selector = `transform: ${this.box.transform}`;

				await navigator.clipboard.writeText(selector);

				alert('CSS Selector Copied to ClipBoard');
			}
		},
		computed: {
			box() {
				return {transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`}
			}
		}
	})
	.mount('#root');