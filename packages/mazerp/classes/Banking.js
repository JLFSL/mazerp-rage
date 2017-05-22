let banking = module.exports;

banking.Bank = class CBank {
    constructor(sBankname, iID) {
        this.sBankname = sBankName;
        this.iID = iID;
    }

    LoadATMs() {
        // loading ATM data from database
    }

    LoadBranches() {
        // loading Branches data from database
    }
}

banking.BankAccount = class CBankAccount {
    constructor(sName, iID) {
        this.sName = sName;
        this.iID = iID;
        this.iBalance = 0;
    }

    Deposit(pPlayer, iAmount) {
        if(pPlayer.iCash <= iAmount && iAmount > 0) {
            pPlayer.iCash -= iAmount;
            this.iBalance += iAmount;
        }
    }

    Withdraw(pPlayer, iAmount) {
        if(this.iBalance >= iAmount && iAmount > 0) {
            pPlayer.iCash += iAmount;
            this.iBalance -= iAmount;
        }
    }
    
}


// could be loaded by finding all ATM objects
banking.ATM = class CATM {
    constructor(vPosition,iID) {
        this.vPosition = vPosition;
        this.pCheckpoint = mp.checkpoints.new(45, vPosition, vPosition, vPosition, 1.0, 0, 255, 255, 255, true, variables.dimenions.public);
        this.iID = iID;
        this.iMaxWidthdraw = -1;

        this.bCanDeposit = true;
        this.bCanTransfer = true;
    }

}

banking.Branch = class CBranch {
    constructor(vPosition, sName, iID) {
        this.vPosition = vPosition;
        this.sName = sName;
        this.iID = iID;

        this.pCheckpoint = mp.checkpoints.new(45, vPosition, vPosition, vPosition, 1.0, 0, 255, 255, 255, true, variables.dimenions.public);
        this.pNPC; // tbd
    }
}