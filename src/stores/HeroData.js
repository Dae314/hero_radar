import { readable } from 'svelte/store';

const HeroData = readable([
	{ id: 'estrilda',
		name: 'Estrilda',
		portrait: './img/portraits/estrilda.jpg',
		class: 'Warrior',
		faction: 'Lightbearer',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '203e30',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			1, // TS
			2, // TR
			2, // Tower
			3, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			1, // TS
			2, // TR
			2, // Tower
			3, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'belinda',
		name: 'Belinda',
		portrait: './img/portraits/belinda.jpg',
		class: 'Mage',
		faction: 'Lightbearer',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			1, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			1, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'raine',
		name: 'Raine',
		portrait: './img/portraits/raine.jpg',
		class: 'Support',
		faction: 'Lightbearer',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '103e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			2, // Campaign
			2, // TRift
			4, // TS
			3, // TR
			3, // Tower
			4, // CR
		],
		p2p_chartData: [
			2, // Campaign
			2, // TRift
			4, // TS
			3, // TR
			3, // Tower
			4, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'rosaline',
		name: 'Rosaline',
		portrait: './img/portraits/rosaline.jpg',
		class: 'Support',
		faction: 'Lightbearer',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '203e33',
		p2p_invest: '309e68',
		f2p_chartData: [
			5, // Campaign
			2, // TRift
			1, // TS
			2, // TR
			3, // Tower
			4, // CR
		],
		p2p_chartData: [
			5, // Campaign
			2, // TRift
			1, // TS
			2, // TR
			3, // Tower
			4, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'lucius',
		name: 'Lucius',
		portrait: './img/portraits/lucius.jpg',
		class: 'Tank',
		faction: 'Lightbearer',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e30',
		f2p_chartData: [
			0, // Campaign
			1, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			1, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'thane',
		name: 'Thane',
		portrait: './img/portraits/thane.jpg',
		class: 'Ranger',
		faction: 'Lightbearer',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e67',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'fawkes',
		name: 'Fawkes',
		portrait: './img/portraits/fawkes.jpg',
		class: 'Ranger',
		faction: 'Lightbearer',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e30',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'hendrik',
		name: 'Hendrik',
		portrait: './img/portraits/hendrik.jpg',
		class: 'Tank',
		faction: 'Lightbearer',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			1, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		p2p_chartData: [
			1, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'rowan',
		name: 'Rowan',
		portrait: './img/portraits/rowan.png',
		class: 'Support',
		faction: 'Lightbearer',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '300e0',
		p2p_invest: '309e33',
		f2p_chartData: [
			5, // Campaign
			5, // TRift
			5, // TS
			3, // TR
			4, // Tower
			2, // CR
		],
		p2p_chartData: [
			5, // Campaign
			5, // TRift
			5, // TS
			3, // TR
			4, // Tower
			2, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'gwyneth',
		name: 'Gwyneth',
		portrait: './img/portraits/gwyneth.jpg',
		class: 'Ranger',
		faction: 'Lightbearer',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '253e0',
		p2p_invest: '309e30',
		f2p_chartData: [
			0, // Campaign
			1, // TRift
			0, // TS
			0, // TR
			3, // Tower
			1, // CR
		],
		p2p_chartData: [
			0, // Campaign
			1, // TRift
			0, // TS
			0, // TR
			3, // Tower
			1, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'rigby',
		name: 'Rigby',
		portrait: './img/portraits/rigby.jpg',
		class: 'Warrior',
		faction: 'Lightbearer',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e30',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'cecilia',
		name: 'Cecilia',
		portrait: './img/portraits/cecilia.jpg',
		class: 'Ranger',
		faction: 'Lightbearer',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '009e0',
		p2p_invest: '309e30',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			1, // TR
			2, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			1, // TR
			2, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'oscar',
		name: 'Oscar',
		portrait: './img/portraits/oscar.jpg',
		class: 'Ranger',
		faction: 'Lightbearer',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '200e0',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'eluard',
		name: 'Eluard',
		portrait: './img/portraits/eluard.jpg',
		class: 'Mage',
		faction: 'Lightbearer',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '009e0',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'peggy',
		name: 'Peggy',
		portrait: './img/portraits/peggy.jpg',
		class: 'Support',
		faction: 'Lightbearer',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e0',
		f2p_chartData: [
			0, // Campaign
			1, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			1, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'walker',
		name: 'Walker',
		portrait: './img/portraits/walker.jpg',
		class: 'Warrior',
		faction: 'Lightbearer',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '200e0',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'morrow',
		name: 'Morrow',
		portrait: './img/portraits/morrow.jpg',
		class: 'Mage',
		faction: 'Lightbearer',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '259e30',
		f2p_chartData: [
			1, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			3, // Tower
			0, // CR
		],
		p2p_chartData: [
			1, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			3, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'scarlet',
		name: 'Scarlet',
		portrait: './img/portraits/scarlet.jpg',
		class: 'Mage',
		faction: 'Lightbearer',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '309e60',
		p2p_invest: '309e67',
		f2p_chartData: [
			4, // Campaign
			5, // TRift
			5, // TS
			5, // TR
			5, // Tower
			5, // CR
		],
		p2p_chartData: [
			4, // Campaign
			5, // TRift
			5, // TS
			5, // TR
			5, // Tower
			5, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'thane_aw',
		name: 'Thane (Awakened)',
		portrait: './img/portraits/thane_aw.jpg',
		class: 'Ranger',
		faction: 'Lightbearer',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '309e60',
		p2p_invest: '3536e87',
		f2p_chartData: [
			1, // Campaign
			5, // TRift
			5, // TS
			0, // TR
			5, // Tower
			2, // CR
		],
		p2p_chartData: [
			1, // Campaign
			5, // TRift
			5, // TS
			0, // TR
			5, // Tower
			2, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'sonja',
		name: 'Sonja',
		portrait: './img/portraits/sonja.jpg',
		class: 'Tank',
		faction: 'Lightbearer',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '203e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			5, // TRift
			3, // TS
			0, // TR
			3, // Tower
			2, // CR
		],
		p2p_chartData: [
			0, // Campaign
			5, // TRift
			3, // TS
			0, // TR
			3, // Tower
			2, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'palmer',
		name: 'Palmer',
		portrait: './img/portraits/palmer.jpg',
		class: 'Support',
		faction: 'Lightbearer',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '309e60',
		p2p_invest: '309e60',
		f2p_chartData: [
			1, // Campaign
			1, // TRift
			0, // TS
			3, // TR
			3, // Tower
			3, // CR
		],
		p2p_chartData: [
			1, // Campaign
			1, // TRift
			0, // TS
			3, // TR
			3, // Tower
			3, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'Not fully tested.',
	},
	{ id: 'brutus',
		name: 'Brutus',
		portrait: './img/portraits/brutus.jpg',
		class: 'Tank',
		faction: 'Mauler',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '203e0',
		p2p_invest: '209e0',
		f2p_chartData: [
			5, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		p2p_chartData: [
			5, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'khasos',
		name: 'Khasos',
		portrait: './img/portraits/khasos.jpg',
		class: 'Warrior',
		faction: 'Mauler',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '209e0',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'vurk',
		name: 'Vurk',
		portrait: './img/portraits/vurk.jpg',
		class: 'Ranger',
		faction: 'Mauler',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e30',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'numisu',
		name: 'Numisu',
		portrait: './img/portraits/numisu.jpg',
		class: 'Support',
		faction: 'Mauler',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '150e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			1, // Campaign
			1, // TRift
			0, // TS
			0, // TR
			2, // Tower
			0, // CR
		],
		p2p_chartData: [
			1, // Campaign
			1, // TRift
			0, // TS
			0, // TR
			2, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'warek',
		name: 'Warek',
		portrait: './img/portraits/warek.jpg',
		class: 'Warrior',
		faction: 'Mauler',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e30',
		f2p_chartData: [
			0, // Campaign
			2, // TRift
			0, // TS
			3, // TR
			1, // Tower
			1, // CR
		],
		p2p_chartData: [
			0, // Campaign
			2, // TRift
			0, // TS
			3, // TR
			1, // Tower
			1, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'skreg',
		name: 'Skreg',
		portrait: './img/portraits/skreg.jpg',
		class: 'Tank',
		faction: 'Mauler',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '209e0',
		p2p_invest: '309e30',
		f2p_chartData: [
			1, // Campaign
			2, // TRift
			3, // TS
			0, // TR
			3, // Tower
			1, // CR
		],
		p2p_chartData: [
			1, // Campaign
			2, // TRift
			3, // TS
			0, // TR
			3, // Tower
			1, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'safiya',
		name: 'Safiya',
		portrait: './img/portraits/safiya.jpg',
		class: 'Mage',
		faction: 'Mauler',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '200e0',
		p2p_invest: '309e41',
		f2p_chartData: [
			1, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			3, // Tower
			0, // CR
		],
		p2p_chartData: [
			1, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			3, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'satrana',
		name: 'Satrana',
		portrait: './img/portraits/satrana.jpg',
		class: 'Mage',
		faction: 'Mauler',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e41',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'antandra',
		name: 'Antandra',
		portrait: './img/portraits/antandra.jpg',
		class: 'Warrior',
		faction: 'Mauler',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '309e41',
		p2p_invest: '309e41',
		f2p_chartData: [
			0, // Campaign
			2, // TRift
			0, // TS
			0, // TR
			4, // Tower
			1, // CR
		],
		p2p_chartData: [
			0, // Campaign
			2, // TRift
			0, // TS
			0, // TR
			4, // Tower
			1, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'tidus',
		name: 'Tidus',
		portrait: './img/portraits/tidus.jpg',
		class: 'Ranger',
		faction: 'Mauler',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '203e0',
		p2p_invest: '309e30',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			2, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			2, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'skriath',
		name: 'Skriath',
		portrait: './img/portraits/skriath.jpg',
		class: 'Mage',
		faction: 'Mauler',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '303e0',
		p2p_invest: '309e67',
		f2p_chartData: [
			5, // Campaign
			0, // TRift
			3, // TS
			1, // TR
			3, // Tower
			1, // CR
		],
		p2p_chartData: [
			5, // Campaign
			0, // TRift
			3, // TS
			1, // TR
			3, // Tower
			1, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'anoki',
		name: 'Anoki',
		portrait: './img/portraits/anoki.jpg',
		class: 'Tank',
		faction: 'Mauler',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '200e0',
		p2p_invest: '209e30',
		f2p_chartData: [
			0, // Campaign
			2, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			2, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'drez',
		name: 'Drez',
		portrait: './img/portraits/drez.jpg',
		class: 'Ranger',
		faction: 'Mauler',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '200e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			3, // Tower
			1, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			3, // Tower
			1, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'kren',
		name: 'Kren',
		portrait: './img/portraits/kren.jpg',
		class: 'Ranger',
		faction: 'Mauler',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '303e44',
		p2p_invest: '309e60',
		f2p_chartData: [
			3, // Campaign
			5, // TRift
			1, // TS
			0, // TR
			5, // Tower
			5, // CR
		],
		p2p_chartData: [
			3, // Campaign
			5, // TRift
			1, // TS
			0, // TR
			5, // Tower
			5, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'thali',
		name: 'Thali',
		portrait: './img/portraits/thali.jpg',
		class: 'Mage',
		faction: 'Mauler',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '209e0',
		p2p_invest: '309e30',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'granit',
		name: 'Granit',
		portrait: './img/portraits/granit.jpg',
		class: 'Tank',
		faction: 'Mauler',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '300e0',
		p2p_invest: '309e0',
		f2p_chartData: [
			2, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		p2p_chartData: [
			2, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'thesku',
		name: 'Thesku',
		portrait: './img/portraits/thesku.jpg',
		class: 'Mage',
		faction: 'Mauler',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '009e0',
		p2p_invest: '309e30',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			2, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			2, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'alaro',
		name: 'Alaro',
		portrait: './img/portraits/alaro.jpg',
		class: 'Support',
		faction: 'Mauler',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			2, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			2, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'anasta',
		name: 'Anasta',
		portrait: './img/portraits/anasta.jpg',
		class: 'Warrior',
		faction: 'Mauler',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '309e44',
		p2p_invest: '309e68',
		f2p_chartData: [
			0, // Campaign
			4, // TRift
			3, // TS
			0, // TR
			4, // Tower
			5, // CR
		],
		p2p_chartData: [
			0, // Campaign
			4, // TRift
			3, // TS
			0, // TR
			4, // Tower
			5, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'brutus_aw',
		name: 'Brutus (Awakened)',
		portrait: './img/portraits/brutus_aw.jpg',
		class: 'Warrior',
		faction: 'Mauler',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '309e60',
		p2p_invest: '3536e87',
		f2p_chartData: [
			2, // Campaign
			5, // TRift
			5, // TS
			0, // TR
			5, // Tower
			5, // CR
		],
		p2p_chartData: [
			2, // Campaign
			5, // TRift
			5, // TS
			0, // TR
			5, // Tower
			5, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'salaki',
		name: 'Salaki',
		portrait: './img/portraits/salaki.jpg',
		class: 'Warrior',
		faction: 'Mauler',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '000e0',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'Not fully tested.',
	},
	{ id: 'nemora',
		name: 'Nemora',
		portrait: './img/portraits/nemora.jpg',
		class: 'Support',
		faction: 'Wilder',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '159e0',
		p2p_invest: '109e0',
		f2p_chartData: [
			2, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		p2p_chartData: [
			2, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'kaz',
		name: 'Kaz',
		portrait: './img/portraits/kaz.jpg',
		class: 'Ranger',
		faction: 'Wilder',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e0',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'lyca',
		name: 'Lyca',
		portrait: './img/portraits/lyca.jpg',
		class: 'Ranger',
		faction: 'Wilder',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '200e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			4, // Campaign
			0, // TRift
			5, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		p2p_chartData: [
			4, // Campaign
			0, // TRift
			5, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'ulmus',
		name: 'Ulmus',
		portrait: './img/portraits/ulmus.jpg',
		class: 'Tank',
		faction: 'Wilder',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '200e0',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'gorvo',
		name: 'Gorvo',
		portrait: './img/portraits/gorvo.jpg',
		class: 'Tank',
		faction: 'Wilder',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '203e0',
		p2p_invest: '309e30',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'eironn',
		name: 'Eironn',
		portrait: './img/portraits/eironn.jpg',
		class: 'Ranger',
		faction: 'Wilder',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '203e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			5, // Campaign
			0, // TRift
			3, // TS
			0, // TR
			4, // Tower
			0, // CR
		],
		p2p_chartData: [
			5, // Campaign
			0, // TRift
			3, // TS
			0, // TR
			4, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'tasi',
		name: 'Tasi',
		portrait: './img/portraits/tasi.jpg',
		class: 'Support',
		faction: 'Wilder',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '109e0',
		p2p_invest: '309e33',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			1, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			1, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'seirus',
		name: 'Seirus',
		portrait: './img/portraits/seirus.jpg',
		class: 'Warrior',
		faction: 'Wilder',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '200e0',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'lorsan',
		name: 'Lorsan',
		portrait: './img/portraits/lorsan.jpg',
		class: 'Mage',
		faction: 'Wilder',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '209e0',
		p2p_invest: '309e33',
		f2p_chartData: [
			5, // Campaign
			3, // TRift
			5, // TS
			0, // TR
			2, // Tower
			5, // CR
		],
		p2p_chartData: [
			5, // Campaign
			3, // TRift
			5, // TS
			0, // TR
			2, // Tower
			5, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'solise',
		name: 'Solise',
		portrait: './img/portraits/solise.jpg',
		class: 'Mage',
		faction: 'Wilder',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '200e0',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'saurus',
		name: 'Saurus',
		portrait: './img/portraits/saurus.jpg',
		class: 'Warrior',
		faction: 'Wilder',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '309e0',
		p2p_invest: '309e67',
		f2p_chartData: [
			0, // Campaign
			4, // TRift
			0, // TS
			3, // TR
			4, // Tower
			3, // CR
		],
		p2p_chartData: [
			0, // Campaign
			4, // TRift
			0, // TS
			3, // TR
			4, // Tower
			3, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'pippa',
		name: 'Pippa',
		portrait: './img/portraits/pippa.jpg',
		class: 'Mage',
		faction: 'Wilder',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '203e0',
		p2p_invest: '309e30',
		f2p_chartData: [
			4, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		p2p_chartData: [
			4, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'respen',
		name: 'Respen',
		portrait: './img/portraits/respen.jpg',
		class: 'Ranger',
		faction: 'Wilder',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '209e0',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'raku',
		name: 'Raku',
		portrait: './img/portraits/raku.jpg',
		class: 'Ranger',
		faction: 'Wilder',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '303e44',
		p2p_invest: '309e60',
		f2p_chartData: [
			5, // Campaign
			0, // TRift
			4, // TS
			0, // TR
			5, // Tower
			5, // CR
		],
		p2p_chartData: [
			5, // Campaign
			0, // TRift
			4, // TS
			0, // TR
			5, // Tower
			5, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'mishka',
		name: 'Mishka',
		portrait: './img/portraits/mishka.jpg',
		class: 'Tank',
		faction: 'Wilder',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '209e60',
		p2p_invest: '309e62',
		f2p_chartData: [
			5, // Campaign
			5, // TRift
			5, // TS
			0, // TR
			5, // Tower
			4, // CR
		],
		p2p_chartData: [
			5, // Campaign
			5, // TRift
			5, // TS
			0, // TR
			5, // Tower
			4, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'astar',
		name: 'Astar',
		portrait: './img/portraits/astar.jpg',
		class: 'Support',
		faction: 'Wilder',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '309e41',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			5, // TRift
			4, // TS
			0, // TR
			3, // Tower
			4, // CR
		],
		p2p_chartData: [
			0, // Campaign
			5, // TRift
			4, // TS
			0, // TR
			3, // Tower
			4, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'oku',
		name: 'Oku',
		portrait: './img/portraits/oku.jpg',
		class: 'Tank',
		faction: 'Wilder',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '209e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			2, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			2, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'eorin',
		name: 'Eorin',
		portrait: './img/portraits/eorin.jpg',
		class: 'Ranger',
		faction: 'Wilder',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '309e0',
		p2p_invest: '309e68',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			2, // TS
			0, // TR
			2, // Tower
			1, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			2, // TS
			0, // TR
			2, // Tower
			1, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'solise_aw',
		name: 'Solise (Awakened)',
		portrait: './img/portraits/solise_aw.jpg',
		class: 'Support',
		faction: 'Wilder',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '309e60',
		p2p_invest: '3536e87',
		f2p_chartData: [
			2, // Campaign
			5, // TRift
			4, // TS
			5, // TR
			5, // Tower
			4, // CR
		],
		p2p_chartData: [
			2, // Campaign
			5, // TRift
			4, // TS
			5, // TR
			5, // Tower
			4, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'nevanthi',
		name: 'Nevanthi',
		portrait: './img/portraits/nevanthi.jpg',
		class: 'Support',
		faction: 'Wilder',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '309e60',
		p2p_invest: '309e62',
		f2p_chartData: [
			2, // Campaign
			4, // TRift
			3, // TS
			0, // TR
			3, // Tower
			4, // CR
		],
		p2p_chartData: [
			2, // Campaign
			4, // TRift
			3, // TS
			0, // TR
			3, // Tower
			4, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'grezhul',
		name: 'Grezhul',
		portrait: './img/portraits/grezhul.jpg',
		class: 'Tank',
		faction: 'Graveborn',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '209e60',
		p2p_invest: '309e67',
		f2p_chartData: [
			5, // Campaign
			5, // TRift
			5, // TS
			5, // TR
			5, // Tower
			5, // CR
		],
		p2p_chartData: [
			5, // Campaign
			5, // TRift
			5, // TS
			5, // TR
			5, // Tower
			5, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'shemira',
		name: 'Shemira',
		portrait: './img/portraits/shemira.jpg',
		class: 'Mage',
		faction: 'Graveborn',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '203e0',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			1, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			1, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'oden',
		name: 'Oden',
		portrait: './img/portraits/oden.jpg',
		class: 'Mage',
		faction: 'Graveborn',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '309e41',
		p2p_invest: '309e67',
		f2p_chartData: [
			5, // Campaign
			5, // TRift
			5, // TS
			3, // TR
			5, // Tower
			5, // CR
		],
		p2p_chartData: [
			5, // Campaign
			5, // TRift
			5, // TS
			3, // TR
			5, // Tower
			5, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'isabella',
		name: 'Isabella',
		portrait: './img/portraits/isabella.jpg',
		class: 'Mage',
		faction: 'Graveborn',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '200e0',
		p2p_invest: '309e41',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			2, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			2, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'ferael',
		name: 'Ferael',
		portrait: './img/portraits/ferael.jpg',
		class: 'Ranger',
		faction: 'Graveborn',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '209e0',
		p2p_invest: '309e30',
		f2p_chartData: [
			4, // Campaign
			4, // TRift
			5, // TS
			0, // TR
			4, // Tower
			1, // CR
		],
		p2p_chartData: [
			4, // Campaign
			4, // TRift
			5, // TS
			0, // TR
			4, // Tower
			1, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'thoran',
		name: 'Thoran',
		portrait: './img/portraits/thoran.jpg',
		class: 'Tank',
		faction: 'Graveborn',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '309e11',
		p2p_invest: '309e30',
		f2p_chartData: [
			5, // Campaign
			2, // TRift
			1, // TS
			0, // TR
			5, // Tower
			0, // CR
		],
		p2p_chartData: [
			5, // Campaign
			2, // TRift
			1, // TS
			0, // TR
			5, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'kelthur',
		name: 'Kelthur',
		portrait: './img/portraits/kelthur.jpg',
		class: 'Ranger',
		faction: 'Graveborn',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '209e0',
		f2p_chartData: [
			5, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			3, // Tower
			0, // CR
		],
		p2p_chartData: [
			5, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			3, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'nara',
		name: 'Nara',
		portrait: './img/portraits/nara.jpg',
		class: 'Warrior',
		faction: 'Graveborn',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '150e0',
		p2p_invest: '309e0',
		f2p_chartData: [
			3, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			3, // Tower
			0, // CR
		],
		p2p_chartData: [
			3, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			3, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'baden',
		name: 'Baden',
		portrait: './img/portraits/baden.jpg',
		class: 'Warrior',
		faction: 'Graveborn',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '059e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			2, // TR
			0, // Tower
			2, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			2, // TR
			0, // Tower
			2, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'izold',
		name: 'Izold',
		portrait: './img/portraits/izold.jpg',
		class: 'Warrior',
		faction: 'Graveborn',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '303e41',
		p2p_invest: '309e41',
		f2p_chartData: [
			0, // Campaign
			3, // TRift
			0, // TS
			0, // TR
			4, // Tower
			3, // CR
		],
		p2p_chartData: [
			0, // Campaign
			3, // TRift
			0, // TS
			0, // TR
			4, // Tower
			3, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'torne',
		name: 'Torne',
		portrait: './img/portraits/torne.jpg',
		class: 'Tank',
		faction: 'Graveborn',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '200e0',
		p2p_invest: '309e38',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			3, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			3, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'daimon',
		name: 'Daimon',
		portrait: './img/portraits/daimon.jpg',
		class: 'Tank',
		faction: 'Graveborn',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '309e30',
		p2p_invest: '309e61',
		f2p_chartData: [
			3, // Campaign
			3, // TRift
			1, // TS
			0, // TR
			3, // Tower
			3, // CR
		],
		p2p_chartData: [
			3, // Campaign
			3, // TRift
			1, // TS
			0, // TR
			3, // Tower
			3, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'theowyn',
		name: 'Theowyn',
		portrait: './img/portraits/theowyn.jpg',
		class: 'Ranger',
		faction: 'Graveborn',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			1, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			1, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'silas',
		name: 'Silas',
		portrait: './img/portraits/silas.jpg',
		class: 'Support',
		faction: 'Graveborn',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '309e41',
		p2p_invest: '309e60',
		f2p_chartData: [
			5, // Campaign
			5, // TRift
			5, // TS
			3, // TR
			5, // Tower
			5, // CR
		],
		p2p_chartData: [
			5, // Campaign
			5, // TRift
			5, // TS
			3, // TR
			5, // Tower
			5, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'desira',
		name: 'Desira',
		portrait: './img/portraits/desira.jpg',
		class: 'Support',
		faction: 'Graveborn',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '303e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			1, // Campaign
			5, // TRift
			1, // TS
			0, // TR
			3, // Tower
			0, // CR
		],
		p2p_chartData: [
			1, // Campaign
			5, // TRift
			1, // TS
			0, // TR
			3, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'hodgkin',
		name: 'Hodgkin',
		portrait: './img/portraits/hodgkin.jpg',
		class: 'Tank',
		faction: 'Graveborn',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '209e33',
		p2p_invest: '309e61',
		f2p_chartData: [
			3, // Campaign
			3, // TRift
			2, // TS
			4, // TR
			2, // Tower
			5, // CR
		],
		p2p_chartData: [
			3, // Campaign
			3, // TRift
			2, // TS
			4, // TR
			2, // Tower
			5, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'treznor',
		name: 'Treznor',
		portrait: './img/portraits/treznor.jpg',
		class: 'Ranger',
		faction: 'Graveborn',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			3, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			3, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'fane',
		name: 'Fane',
		portrait: './img/portraits/fane.jpg',
		class: 'Support',
		faction: 'Graveborn',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'kalene',
		name: 'Kalene',
		portrait: './img/portraits/kalene.jpg',
		class: 'Mage',
		faction: 'Graveborn',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'baden_aw',
		name: 'Baden (Awakened)',
		portrait: './img/portraits/baden_aw.jpg',
		class: 'Ranger',
		faction: 'Graveborn',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '309e60',
		p2p_invest: '3536e87',
		f2p_chartData: [
			1, // Campaign
			5, // TRift
			3, // TS
			5, // TR
			5, // Tower
			5, // CR
		],
		p2p_chartData: [
			1, // Campaign
			5, // TRift
			3, // TS
			5, // TR
			5, // Tower
			5, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'athalia',
		name: 'Athalia',
		portrait: './img/portraits/athalia.jpg',
		class: 'Ranger',
		faction: 'Celestial',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '309e60',
		p2p_invest: '309e60',
		f2p_chartData: [
			1, // Campaign
			3, // TRift
			4, // TS
			0, // TR
			5, // Tower
			0, // CR
		],
		p2p_chartData: [
			1, // Campaign
			3, // TRift
			4, // TS
			0, // TR
			5, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'twins',
		name: 'Elijah & Lailah',
		portrait: './img/portraits/twins.jpg',
		class: 'Support',
		faction: 'Celestial',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '203e33',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			4, // TRift
			4, // TS
			5, // TR
			1, // Tower
			3, // CR
		],
		p2p_chartData: [
			0, // Campaign
			4, // TRift
			4, // TS
			5, // TR
			1, // Tower
			3, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'flora',
		name: 'Flora',
		portrait: './img/portraits/flora.jpg',
		class: 'Mage',
		faction: 'Celestial',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			1, // Campaign
			1, // TRift
			2, // TS
			0, // TR
			1, // Tower
			1, // CR
		],
		p2p_chartData: [
			1, // Campaign
			1, // TRift
			2, // TS
			0, // TR
			1, // Tower
			1, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'orthros',
		name: 'Orthros',
		portrait: './img/portraits/orthros.jpg',
		class: 'Tank',
		faction: 'Celestial',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '309e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			2, // Tower
			4, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			2, // Tower
			4, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'talene',
		name: 'Talene',
		portrait: './img/portraits/talene.jpg',
		class: 'Support',
		faction: 'Celestial',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '309e38',
		p2p_invest: '309e87',
		f2p_chartData: [
			0, // Campaign
			5, // TRift
			2, // TS
			1, // TR
			5, // Tower
			5, // CR
		],
		p2p_chartData: [
			0, // Campaign
			5, // TRift
			2, // TS
			1, // TR
			5, // Tower
			5, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'wukong',
		name: 'Wu Kong',
		portrait: './img/portraits/wukong.jpg',
		class: 'Warrior',
		faction: 'Celestial',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '209e0',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			2, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			2, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'zaphrael',
		name: 'Zaphrael',
		portrait: './img/portraits/zaphrael.jpg',
		class: 'Mage',
		faction: 'Celestial',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			1, // Campaign
			0, // TRift
			3, // TS
			0, // TR
			3, // Tower
			0, // CR
		],
		p2p_chartData: [
			1, // Campaign
			0, // TRift
			3, // TS
			0, // TR
			3, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'alna',
		name: 'Alna',
		portrait: './img/portraits/alna.jpg',
		class: 'Warrior',
		faction: 'Celestial',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '309e0',
		p2p_invest: '309e33',
		f2p_chartData: [
			5, // Campaign
			5, // TRift
			5, // TS
			0, // TR
			3, // Tower
			0, // CR
		],
		p2p_chartData: [
			5, // Campaign
			5, // TRift
			5, // TS
			0, // TR
			3, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'morael',
		name: 'Morael',
		portrait: './img/portraits/morael.jpg',
		class: 'Mage',
		faction: 'Celestial',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '209e36',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			4, // Tower
			4, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			4, // Tower
			4, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'titus',
		name: 'Titus',
		portrait: './img/portraits/titus.jpg',
		class: 'Tank',
		faction: 'Celestial',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e0',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'haelus',
		name: 'Haelus',
		portrait: './img/portraits/haelus.jpg',
		class: 'Support',
		faction: 'Celestial',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '309e60',
		p2p_invest: '309e61',
		f2p_chartData: [
			1, // Campaign
			5, // TRift
			4, // TS
			3, // TR
			3, // Tower
			5, // CR
		],
		p2p_chartData: [
			1, // Campaign
			5, // TRift
			4, // TS
			3, // TR
			3, // Tower
			5, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'talene_aw',
		name: 'Talene (Awakened)',
		portrait: './img/portraits/talene_aw.jpg',
		class: 'Tank',
		faction: 'Celestial',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '309e0',
		p2p_invest: '3536e87',
		f2p_chartData: [
			3, // Campaign
			5, // TRift
			3, // TS
			2, // TR
			5, // Tower
			2, // CR
		],
		p2p_chartData: [
			3, // Campaign
			5, // TRift
			3, // TS
			2, // TR
			5, // Tower
			2, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'audrae',
		name: 'Audrae',
		portrait: './img/portraits/audrae.jpg',
		class: 'Ranger',
		faction: 'Celestial',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			3, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			3, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'tarnos',
		name: 'Tarnos',
		portrait: './img/portraits/tarnos.jpg',
		class: 'Warrior',
		faction: 'Celestial',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'ezizh',
		name: 'Ezizh',
		portrait: './img/portraits/ezizh.jpg',
		class: 'Support',
		faction: 'Hypogean',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '309e30',
		p2p_invest: '309e62',
		f2p_chartData: [
			5, // Campaign
			4, // TRift
			4, // TS
			2, // TR
			1, // Tower
			1, // CR
		],
		p2p_chartData: [
			5, // Campaign
			4, // TRift
			4, // TS
			2, // TR
			1, // Tower
			1, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'mehira',
		name: 'Mehira',
		portrait: './img/portraits/mehira.jpg',
		class: 'Mage',
		faction: 'Hypogean',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e33',
		f2p_chartData: [
			5, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			5, // Tower
			0, // CR
		],
		p2p_chartData: [
			5, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			5, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'zolrath',
		name: 'Zolrath',
		portrait: './img/portraits/zolrath.jpg',
		class: 'Warrior',
		faction: 'Hypogean',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '303e41',
		p2p_invest: '3536e87',
		f2p_chartData: [
			5, // Campaign
			3, // TRift
			4, // TS
			0, // TR
			3, // Tower
			0, // CR
		],
		p2p_chartData: [
			5, // Campaign
			3, // TRift
			4, // TS
			0, // TR
			3, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'khazard',
		name: 'Khazard',
		portrait: './img/portraits/khazard.jpg',
		class: 'Mage',
		faction: 'Hypogean',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '300e0',
		p2p_invest: '309e33',
		f2p_chartData: [
			5, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			4, // CR
		],
		p2p_chartData: [
			5, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			1, // Tower
			4, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'mezoth',
		name: 'Mezoth',
		portrait: './img/portraits/mezoth.jpg',
		class: 'Tank',
		faction: 'Hypogean',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'lucretia',
		name: 'Lucretia',
		portrait: './img/portraits/lucretia.jpg',
		class: 'Ranger',
		faction: 'Hypogean',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '309e60',
		p2p_invest: '3536e87',
		f2p_chartData: [
			5, // Campaign
			5, // TRift
			5, // TS
			2, // TR
			5, // Tower
			4, // CR
		],
		p2p_chartData: [
			5, // Campaign
			5, // TRift
			5, // TS
			2, // TR
			5, // Tower
			4, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'mortas',
		name: 'Mortas',
		portrait: './img/portraits/mortas.jpg',
		class: 'Support',
		faction: 'Hypogean',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '200e0',
		p2p_invest: '309e61',
		f2p_chartData: [
			5, // Campaign
			4, // TRift
			4, // TS
			4, // TR
			1, // Tower
			4, // CR
		],
		p2p_chartData: [
			5, // Campaign
			4, // TRift
			4, // TS
			4, // TR
			1, // Tower
			4, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'leofric',
		name: 'Leofric',
		portrait: './img/portraits/leofric.jpg',
		class: 'Support',
		faction: 'Hypogean',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e30',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'zikis',
		name: 'Zikis',
		portrait: './img/portraits/zikis.jpg',
		class: 'Ranger',
		faction: 'Hypogean',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'framton',
		name: 'Framton',
		portrait: './img/portraits/framton.jpg',
		class: 'Warrior',
		faction: 'Hypogean',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'ezizh_aw',
		name: 'Ezizh (Awakened)',
		portrait: './img/portraits/ezizh_aw.jpg',
		class: 'Mage',
		faction: 'Hypogean',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '3536e87',
		f2p_chartData: [
			4, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			5, // Tower
			0, // CR
		],
		p2p_chartData: [
			4, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			5, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'vyloris',
		name: 'Vyloris',
		portrait: './img/portraits/vyloris.jpg',
		class: 'Mage',
		faction: 'Hypogean',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'canisa_ruke',
		name: 'Canisa & Ruke',
		portrait: './img/portraits/canisa_ruke.jpg',
		class: 'Tank',
		faction: 'Hypogean',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'arthur',
		name: 'Arthur',
		portrait: './img/portraits/arthur.jpg',
		class: 'Tank',
		faction: 'Dimensional',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '303e0',
		p2p_invest: '309e30',
		f2p_chartData: [
			3, // Campaign
			3, // TRift
			3, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		p2p_chartData: [
			3, // Campaign
			3, // TRift
			3, // TS
			0, // TR
			1, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'nakoruru',
		name: 'Nakoruru',
		portrait: './img/portraits/nakoruru.jpg',
		class: 'Ranger',
		faction: 'Dimensional',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '209e0',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'ukyo',
		name: 'Ukyo',
		portrait: './img/portraits/ukyo.jpg',
		class: 'Warrior',
		faction: 'Dimensional',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '209e30',
		f2p_chartData: [
			2, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			2, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'ezio',
		name: 'Ezio',
		portrait: './img/portraits/ezio.jpg',
		class: 'Ranger',
		faction: 'Dimensional',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '209e0',
		p2p_invest: '309e67',
		f2p_chartData: [
			3, // Campaign
			0, // TRift
			5, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			3, // Campaign
			0, // TRift
			5, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'ainz',
		name: 'Ainz Ooal Gown',
		portrait: './img/portraits/ainz.jpg',
		class: 'Mage',
		faction: 'Dimensional',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '309e41',
		p2p_invest: '3536e87',
		f2p_chartData: [
			3, // Campaign
			5, // TRift
			5, // TS
			0, // TR
			4, // Tower
			4, // CR
		],
		p2p_chartData: [
			3, // Campaign
			5, // TRift
			5, // TS
			0, // TR
			4, // Tower
			4, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'albedo',
		name: 'Albedo',
		portrait: './img/portraits/albedo.jpg',
		class: 'Tank',
		faction: 'Dimensional',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '303e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			3, // Campaign
			5, // TRift
			5, // TS
			0, // TR
			4, // Tower
			4, // CR
		],
		p2p_chartData: [
			3, // Campaign
			5, // TRift
			5, // TS
			0, // TR
			4, // Tower
			4, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'joker',
		name: 'JOKER',
		portrait: './img/portraits/joker.jpg',
		class: 'Ranger',
		faction: 'Dimensional',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '200e0',
		p2p_invest: '209e0',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			1, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'queen',
		name: 'QUEEN',
		portrait: './img/portraits/queen.jpg',
		class: 'Warrior',
		faction: 'Dimensional',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '209e33',
		p2p_invest: '309e36',
		f2p_chartData: [
			5, // Campaign
			0, // TRift
			1, // TS
			0, // TR
			3, // Tower
			4, // CR
		],
		p2p_chartData: [
			5, // Campaign
			0, // TRift
			1, // TS
			0, // TR
			3, // Tower
			4, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'prince',
		name: 'Prince of Persia',
		portrait: './img/portraits/prince.jpg',
		class: 'Ranger',
		faction: 'Dimensional',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '203e0',
		p2p_invest: '309e30',
		f2p_chartData: [
			3, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			1, // CR
		],
		p2p_chartData: [
			3, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			1, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'merlin',
		name: 'Merlin',
		portrait: './img/portraits/merlin.jpg',
		class: 'Support',
		faction: 'Dimensional',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '309e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			3, // Campaign
			5, // TRift
			5, // TS
			0, // TR
			2, // Tower
			1, // CR
		],
		p2p_chartData: [
			3, // Campaign
			5, // TRift
			5, // TS
			0, // TR
			2, // Tower
			1, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'leonardo',
		name: 'Leonardo Da Vinci',
		portrait: './img/portraits/leonardo.jpg',
		class: 'Mage',
		faction: 'Dimensional',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '209e36',
		p2p_invest: '309e62',
		f2p_chartData: [
			5, // Campaign
			0, // TRift
			3, // TS
			0, // TR
			2, // Tower
			5, // CR
		],
		p2p_chartData: [
			5, // Campaign
			0, // TRift
			3, // TS
			0, // TR
			2, // Tower
			5, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'melusina',
		name: 'Melusina',
		portrait: './img/portraits/melusina.jpg',
		class: 'Mage',
		faction: 'Dimensional',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '000e0',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			0, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'joa',
		name: 'Joan of Arc',
		portrait: './img/portraits/joa.jpg',
		class: 'Support',
		faction: 'Dimensional',
		type: 'Strength',
		tier: 'ascended',
		f2p_invest: '203e30',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			4, // TRift
			4, // TS
			0, // TR
			0, // Tower
			4, // CR
		],
		p2p_chartData: [
			0, // Campaign
			4, // TRift
			4, // TS
			0, // TR
			0, // Tower
			4, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'None',
	},
	{ id: 'yennefer',
		name: 'Yennefer',
		portrait: './img/portraits/yennefer.jpg',
		class: 'Mage',
		faction: 'Dimensional',
		type: 'Intelligence',
		tier: 'ascended',
		f2p_invest: '303e60',
		p2p_invest: '309e60',
		f2p_chartData: [
			3, // Campaign
			4, // TRift
			4, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			3, // Campaign
			4, // TRift
			4, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'Not fully tested.',
	},
	{ id: 'geralt',
		name: 'Geralt',
		portrait: './img/portraits/geralt.jpg',
		class: 'Warrior',
		faction: 'Dimensional',
		type: 'Agility',
		tier: 'ascended',
		f2p_invest: '209e60',
		p2p_invest: '309e60',
		f2p_chartData: [
			0, // Campaign
			2, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		p2p_chartData: [
			0, // Campaign
			2, // TRift
			0, // TS
			0, // TR
			0, // Tower
			0, // CR
		],
		getF2PScore: function() { return this.f2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		getP2PScore: function() { return this.p2p_chartData.reduce((partialSum, a) => partialSum + a, 0) },
		notes: 'Not fully tested.',
	},
]);

export default HeroData;
