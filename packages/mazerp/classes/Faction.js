let factions = module.exports;

factions.Faction = class CFaction {
    constructor(sName, iID) {
        this.vPosition; // Position of a faction? What about multiple pos.?
        this.sInterior; // same

        this.sName = sName;
        this.iID = iID;
        this.iPayment; // tbd in dev talks
    }   
}