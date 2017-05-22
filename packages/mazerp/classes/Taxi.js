let taxijob = module.exports;

taxijob.Taxi = class CTaxi {
    constructor(vPosition, vRotation, pDriver) {
        this.pVehicle = mp.vehicles.new(mp.jooat("taxi"),vPosition);
        this.pVehicle.dimension = pDriver.dimension;
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