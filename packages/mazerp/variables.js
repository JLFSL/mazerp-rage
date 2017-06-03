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
	}
};