let police = class CPolice {
    constructor(vPosition) {
        this.pLoadoutCP = mp.checkpoints.new(45, vPosition, vPosition, vPosition, 1.0, 0, 0, 255, 200, true, variables.dimenions.public);
    }
    
    Cuff(cuffedPlayer) {
        // Unable to find a server-side set-controllable function in framework yet.
        // Client-side only?
    }

    AddLoadoutTo(pCop) {
        pCop.player.setClothes(0,0,0,0); // police clothes tbd
        pCop.player.giveWeapon("0000",0); // No listing of Weapon Hashes on RageMP wiki. Can GTA-N hashes be used?
    }

    RemoveLoadoutFrom(pCop) {
        // get normal player clothes from database / instance
        pCop.player.setClothes(0,0,0,0); // see above

        // taking weapons from a player?
    }
}