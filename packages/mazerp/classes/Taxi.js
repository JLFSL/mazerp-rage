let taxijob = module.exports;

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