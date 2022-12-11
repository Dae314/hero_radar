<script>
	import Chart, { registerables } from 'chart.js/auto';
	import { onMount } from 'svelte';

	export let data;
	export let name;
	let chartCanvas;

	let chartData = {
		labels: [
			'Campaign',
			'TRift',
			'TS',
			'TR',
			'Tower',
			'CR',
		],
		datasets: [{
			label: name,
			data: data.map(e => e === 0 ? 0.25 : e),
			fill: true,
			backgroundColor: window.getComputedStyle(document.documentElement).getPropertyValue('--appColorPriAlpha'),
			borderColor: window.getComputedStyle(document.documentElement).getPropertyValue('--appColorPrimary'),
			pointBackgroundColor: window.getComputedStyle(document.documentElement).getPropertyValue('--appColorPrimary'),
		}]
	}

	onMount(async () => {
		let ctx = chartCanvas.getContext('2d');
		const chart = new Chart(ctx, {
			type: 'radar',
			data: chartData,
			options: {
				elements: {
					line: {
						borderWidth: 2
					}
				},
				animation: false,
				scales: {
					r: {
						suggestedMin: 0,
						suggestedMax: 5,
						angleLines: {
							color: window.getComputedStyle(document.documentElement).getPropertyValue('--appColorWhite')
						},
						grid: {
							color: window.getComputedStyle(document.documentElement).getPropertyValue('--appColorWhite')
						},
						pointLabels: {
							color: window.getComputedStyle(document.documentElement).getPropertyValue('--appColorWhite')
						},
						ticks: {
							backdropColor: window.getComputedStyle(document.documentElement).getPropertyValue('--appBGColor'),
							color: window.getComputedStyle(document.documentElement).getPropertyValue('--appColorWhite')
						},
					}
				},
				plugins: {
					legend: {
						display: false,
					}
				}
			},
		});
	})
</script>

<div class="chartContainer">
	<canvas bind:this={chartCanvas}></canvas>
</div>

<style lang="scss">
	.chartContainer {
		canvas {
			width: 300px !important;
			height: 300px !important;
		}
	}
</style>
