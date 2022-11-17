<script>
	import HeroData from './stores/HeroData.js';
	import RadarChart from './components/RadarChart.svelte';

	const factions = [
		{ name: 'All', icon: './img/factions/unavailable.png' },
		{ name: 'Lightbearer', icon: './img/factions/lightbearer.png' },
		{ name: 'Mauler', icon: './img/factions/mauler.png' },
		{ name: 'Wilder', icon: './img/factions/wilder.png' },
		{ name: 'Graveborn', icon: './img/factions/graveborn.png' },
		{ name: 'Celestial', icon: './img/factions/celestial.png' },
		{ name: 'Hypogean', icon: './img/factions/hypogean.png' },
		{ name: 'Dimensional', icon: './img/factions/dimensional.png' },
	];

	const version = 'v1.102';
	let curView = 'All';
	let curType = 'f2p';

	$: heroList = $HeroData.filter(hero => curView === 'All' || hero.faction === curView);
	$: updateType(curType);

	function handleFactionChange(faction) {
		curView = faction;
	}

	function updateType(type) {
		const root = document.documentElement;
		switch(type) {
			case 'f2p':
				root.style.setProperty('--appColorPrimary', '#6B8DF2');
				root.style.setProperty('--appColorPriAlpha', 'rgba(107, 141, 242, 0.50)');
				break;
			case 'p2p':
				root.style.setProperty('--appColorPrimary', '#F26B6B');
				root.style.setProperty('--appColorPriAlpha', 'rgba(242, 107, 107, 0.50)');
				break;
			default:
				throw new Error('Error invalid type passed to updateType()');
		}
	}
</script>

<main>
	<nav>
		{#each factions as faction}
			<button type="button" class="navButton" on:click={() => handleFactionChange(faction.name)}>
				{#if faction.name === 'All' }
					<div class="allIcon">All</div>
				{:else}
					<img src="{faction.icon}" alt="{faction.name}">
				{/if}
			</button>
		{/each}
	</nav>
	<div class="optionsArea">
		<div class="typeSwitcher">
			<button type="button" class="typeButton" on:click={() => curType = 'f2p'}>F2P</button>
			<button type="button" class="typeButton" on:click={() => curType = 'p2p'}>Whale</button>
		</div>
	</div>
	<div class="titleArea">
		{#if curType === 'f2p'}
			<h1>Hero Usefulness for F2P</h1>
			<h2>{version}</h2>
		{:else}
			<h1>Hero Usefulness for Whale</h1>
			<h2>{version}</h2>
		{/if}
	</div>
	<div class="heroDisplay">
		{#each heroList as hero}
			<div class="heroCard">
				<img class="heroPortrait" src="{hero.portrait}" alt="{hero.name}">
				<h3>{hero.name}</h3>
				{#if curType === 'f2p'}
					<h3>{hero.getF2PScore()}</h3>
					<h4>{hero.f2p_invest}</h4>
					<RadarChart data={hero.f2p_chartData} name={hero.name} />
				{:else}
					<h3>{hero.getP2PScore()}</h3>
					<h4>{hero.p2p_invest}</h4>
					<RadarChart data={hero.p2p_chartData} name={hero.name} />
				{/if}
				<div class="notesArea">
					<h4>Notes:</h4>
					<p>{hero.notes}</p>
				</div>
			</div>
		{/each}
	</div>
	<div class="footerArea">
		<h2>Made by:</h2>
		<ul>
			<li>Dae314</li>
			<li>Xenon</li>
			<li>JHawks</li>
		</ul>
	</div>
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
	}

	nav {
		align-items: center;
		display: flex;
		justify-content: center;
		margin: 10px 0px;
		width: 100%;
		.navButton {
			background: none;
			border: none;
			cursor: pointer;
			margin: 0px 10px;
			outline: none;
			.allIcon {
				align-items: center;
				border-radius: 50%;
				border: 3px solid var(--appColorPrimary);
				color: var(--appColorPrimary);
				display: flex;
				font-weight: bold;
				font-size: 1.1rem;
				height: 47px;
				justify-content: center;
				padding: 0px;
				width: 47px;
			}
			img {
				max-height: 50px;
			}
		}
	}

	.optionsArea {
		align-items: center;
		display: flex;
		justify-content: center;
		margin-bottom: 10px;
		.typeButton {
			background-color: transparent;
			border: 2px solid var(--appColorPrimary);
			border-radius: 5px;
			color: var(--appColorPrimary);
			cursor: pointer;
			font-size: 1.1rem;
			font-weight: bold;
			padding: 5px;
			transition: all 0.2s;
			&:hover {
				background-color: var(--appColorPrimary);
				color: var(--appColorWhite);
			}
		}
	}

	.titleArea {
		align-items: center;
		display: flex;
		flex-direction: column;
		h1 {
			margin: 0px;
			margin-top: 10px;
		}
		h2 {
			margin: 0px;
			margin-bottom: 20px;
		}
	}

	.heroDisplay {
		display: grid;
		grid-gap: 20px 20px;
		grid-template-columns: repeat(auto-fill, minmax(330px, 330px));
		grid-auto-rows: 560px;
		justify-content: space-evenly;
	}

	.heroCard {
		align-items: center;
		border: 3px solid var(--appColorPrimary);
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 10px;
		.heroPortrait {
			border-radius: 50%;
			max-width: 100px;
		}
		h3 {
			margin: 3px;
		}
		h4 {
			margin: 3px;
		}
		.notesArea {
			align-items: center;
			display: flex;
			flex-direction: column;
		}
		p {
			margin: 0px;
		}
	}

	.footerArea {
		align-items: center;
		display: flex;
		flex-direction: column;
		margin-bottom: 10px;
		h2 {
			margin: 10px 0px;
		}
		ul {
			list-style-type: none;
			margin: 0px;
			padding: 0px;
		}
	}
</style>
