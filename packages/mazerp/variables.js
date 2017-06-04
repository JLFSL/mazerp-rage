module.exports = {
	economy: {
		minimumWage: 8,
		welfareWage: 5,
		unemployment: 1 // To be discussed
	},

	maxValues: {
		players: 100
	},

  vehicles: [],

	PlayerInfo: {},
	TaxiInfo: {},
	TaxiBranchInfo: [],
	ConvenientStoreInfo: [],

	loginCamera: {
		position: new mp.Vector3(-1772.4903564453125, -1166.7955322265625, 13.017889976501465),
		heading: 276.3242492675781
	},

	spawn: [
		{
			position: new mp.Vector3(-1037.2386474609375, -2737.613525390625, 20.169275283813477),
			heading: 328.9188232421875
		},
		{
			position: new mp.Vector3(-1037.2386474609375, -2737.613525390625, 13.756634712219238),
			heading: 327.5029296875
		}
	],

	charCreation: {
		position: new mp.Vector3(402.9575500488281, -996.8289184570312, -99.000244140625),
	  heading: 179.5724639892578
	},

	respawnByDeath: [
		{
			position: new mp.Vector3(342.1229248046874, -1397.3350830078125, 32.50927734375),
			heading: 48.86690139770508
		}
	],

	dimensions: {
		private: 500000000, // Private + player.id - Used for charCreation and *QUEUE*
		public: 999999990, // Public world, where all the roleplay happens.
		event: 999999991, // World for events, to not ruin other's experience.
		noLogin: 999999992, // As not logged in players shouldn't be able to perform any actions in the world.
		testing: 999999993 // World for testing purposes, to not ruin other's experience.
	},

	taxi: {
		defaultFare: 5
	},

	drugs: {
		drugColshape: mp._colshapes.newCircle(2223.442626953125, 5577.14404296875, 10),
		drugArea: mp._colshapes.newSphere(2223.442626953125, 5577.14404296875, 53.80788803100586, 50),
		drugSale: mp._colshapes.newCircle(57.66674041748047, -1852.6238125,5)
		// drugColshape: mp.colshapes.newCircle(2223.442626953125, 5577.14404296875, 10),
		// drugArea: mp.colshapes.newSphere(2223.442626953125, 5577.14404296875, 53.80788803100586, 50)
	},

	convenientStores: [
		{
			position: new mp.Vector3(1136.101318359375, -981.7711181640625, 46.41584396362305),
			radius: 3,
			type: "store"
		},
		{
			position: new mp.Vector3(1162.81103515625, -323.2835693359375, 69.20507049560547),
			radius: 3,
			type: "store"
		},
		{
			position: new mp.Vector3(375.4753112792969,  327.67608642578125, 103.5663833618164),
			radius: 3,
			type: "store",
		},
		{
			position: new mp.Vector3(27.3969192, -1345.335327, 29.497026),
			radius: 3,
			type: "store"
		},
		{
			position: new mp.Vector3(-48.458717, -1756.344970, 29.4210014),
			radius: 3,
			type: "gas station"
		},
		{
			position: new mp.Vector3(-708.453674, -912.986572, 19.21559143),
			radius: 3,
			type: "gas station"
		},
		{
			position: new mp.Vector3(-1223.302490, -906.840454, 12.326354),
			radius: 3,
			type: "store"
		},
		{
			position: new mp.Vector3(-1487.072265, -379.480407, 40.1634254),
			radius: 3,
			type: "store"
		},
		{
			position: new mp.Vector3(-1821.317016, 793.127624, 138.119705),
			radius: 3,
			type: "gas station"
		},
		{
			position: new mp.Vector3(-3243.333740, 1002.193420, 12.830707),
			radius: 3,
			type: "store"
		},
		{
			position: new mp.Vector3(-3041.306396, 586.121276, 7.908929),
			radius: 3,
			type: "store"
		},
		{
			position: new mp.Vector3(-2968.610839, 390.443237, 15.0433120),
			radius: 3,
			type: "store"
		},
		{
			position: new mp.Vector3(546.650146, 2669.1804192, 42.1565322),
			radius: 3,
			type: "store"
		},
		{
			position: new mp.Vector3(1392.645019, 3603.872558, 34.9809265),
			radius: 2,
			type: "store"
		},
		{
			position: new mp.Vector3(1961.768310, 3743.1936035, 32.343746),
			radius: 2,
			type: "store"
		},
		{
			position: new mp.Vector3(2555.442382, 383.229187, 108.622955),
			radius: 2,
			type: "gas station"
		},
		{
			position: new mp.Vector3(2677.683349, 3282.059326, 55.2411346),
			radius: 2,
			type: "gas station"
		},
		{
			position: new mp.Vector3(1699.264895, 4924.54980, 42.063671112),
			radius: 2,
			type: "gas station"
		},
		{
			position: new mp.Vector3(1730.572143, 6415.785156, 35.0372238),
			radius: 2,
			type: "gas station"
		}
	],
};