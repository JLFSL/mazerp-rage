let taxijob = module.exports;
const variables = require("../variables");

taxijob.Taxi = class CTaxi {
    constructor(vVehicle, pDriver) {
        this.pVehicle = vVehicle;
        this.pDestination;
        this.pCallpoint;
        this.iFare = variables.taxi.defaultFare;
        this.vPassengers = [];
        this.pDriver = pDriver;
        this.bOnRide = false;
        this.bActiveCall = false;
        this.iMiles = 0;
    }
}

taxijob.TaxiBranch = class CTaxiBranch {
    constructor(vPosition, pCheckpoint, aSpawns = [], iID) {
        this.vPosition = vPosition;
        this.pCheckpoint = pCheckpoint;
        this.aSpawns = aSpawns;
        this.iID = iID;
    }
}

taxijob.LoadTaxiBranches = function() {
    // load from database
    let examplePos = new mp.Vector3(904.201354,-166.396667,74.092842);
    let newCP = mp.checkpoints.new(45, examplePos, examplePos, examplePos, 1.0, 0, 255, 255, 255, true, variables.dimensions.public);
    let newTaxiBranch = new taxijob.TaxiBranch(examplePos,newCP,[{position: {x: 916.2629, y: -170.6835, z: 73.9345}, rotation: {x: -3.9614, y: -0.0514, z: 99.6285}}],0);
    variables.TaxiBranchInfo[0] = newTaxiBranch;
}