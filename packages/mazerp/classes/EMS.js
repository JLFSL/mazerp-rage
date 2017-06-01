let ems = module.exports;

ems.EMS = class CEMS {
    constructor() {
        this.pLoadoutPoint;
        this.Requests;
    }

    AddLoadoutTo = function(pMedic) {
        // do stuff
    }

    RemoveLoadoutFrom = function(pMedic) {
        // do stuff
    }

    RevivePlayer = function(pMedic, pPatient) {
        let vMedicPosition = pMedic.player.position;
        let iCount = 1;
        while(iCount <= 12) {
            setTimeout(function() {
                let vCheckMedicPosition = pMedic.player.position;
                if(vCheckMedicPosition.x == vMedicPosition.x && vCheckMedicPosition.y == vMedicPosition.y && vCheckMedicPosition.z == vMedicPosition.z) {
                    iCount++;
                } else break;
            },2500);
        }

        if(iCount == 12) {
            pPatient.bUnconscious = false;
            //make player controllable again
        } else this.MedicMessage(pMedic,"You moved and therefore failed to revive the patient!");
    }

    MedicMessage(pMedic, message) {
        pMedic.player.outputChatBox(message);
    }

    RequestEMS(pCaller) {
        let vPosition = pCaller.player.position;
        let pNewCheckpoint = mp.checkpoints.new(45, vPosition, vPosition, vPosition, 1.0, 0, 0, 255, 255, true, variables.dimenions.public);
    }
}