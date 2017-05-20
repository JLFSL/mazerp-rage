
let housing = module.exports;

housing.House = class CHouse {
    constructor(vPosition) {
        this.vPosition = vPosition;
        this.pCheckpoint = mp.checkpoints.new(45, vPosition, vPosition, vPosition, 1.0, 0, 255, 0, 255, true, variables.dimenions.public);
        this.vRenters;
        this.sInterior;
        this.sOwner;

        this.bLocked;
        this.bRentable;
        this.bGarage;
        this.bForSale;

        this.iID;
        this.iRentPrice;
        this.iOwner;
        this.iPrice;
        this.iMaxRenters;
    }

    Buy = function(pPlayer) {
        if(this->bForSale == true) {
            if(pPlayer.iRent == -1) {
                if(pPlayer.iCash >= this.iPrice) {
                    this.sOwner = GetUserName; //!
                    this.iOwner = pPlayer.iID;
                    this.bForSale = false;

                    pPlayer.iHouse = this.iID;
                    pPlayer.iCash -= this.iPrice;

                    this.SuccessMessage(pPlayer.player,"You have successfully bought this house!","Purchase"); //
                    return;
                } else this.WarningMessage(pPlayer.player, "You cannot afford to buy this house!");
                return;
            } else this.WarningMessage(pPlayer.player, "YOu already own a house!");
            return;
        } else this.WarningMessage(pPlayer.player, "This house is not on sale!");
        return;
    }


    Enter = function(pPlayer) {
        if(this.bLocked == false) {
            //
        } else this.WarningMessage(pPlayer.player, "This house is locked!");
        return;
    }

    Leave = function(pPlayer) {
        if(this.bLocked == false) {
            //
        } else this.WarningMessage(pPlayer.player, "This house is locked!");
        return;
    }


    Rent = function(pPlayer) {
        if(this.bRentable == true) {
            if(this.vRenters.Count() < this.iMaxRenters) {
                if(pPlayer.iHouse == -1) {
                    if(pPlayer.iRent == -1) {
                        if(pPlayer.iCash >= this.iRentPrice) {

                            pPlayer.iRent = this.iRentPrice;
                            pPlayer.iCash -= this.iRentPrice;
                            this.vRenters.push(pPlayer.iID); //!
                            this.SuccessMesage(pPlayer.player, "You successfully rented a room in this house!", "Rent");
                            return;

                        } else this.WarningMessage(pPlayer.player, "You cannot afford the renting price of this house!");
                        return;
                    } else this.WarningMessage(pPlayer.player, "You are already renting a house!");
                    return;
                } else this.WarningMessage(pPlayer.player, "You can't rent a house since you already own one!");
                return;
            }
        } else this.WarningMessage(pPlayer.player, "This house is not rentable!"); 
        return;
    }

    StopRenting = function(pPlayer) {
        if(pPlayer.iRent != -1) {
            if(this.IsRenter(pPlayer) && this.IsOwner(pPlayer) == false) {

                pPlayer.iRent = -1;
                this.RemoveRenter(pPlayer.iID);
                this.SuccessMesage(pPlayer.iID,"You successfully unrented from your current home!", "Rent");
                return;

            }
        }
        return;
    }

    RemoveRenter = function(pPlayer) {
        //
    }


    IsRenter = function(pPlayer) {
        //
    }

    IsOwner = function(pPlayer) {
        return (pPlayer.iID == this.iOwner);
    }


    WarningMessage = function(player, message) {
        //
    }

    SuccessMessage = function(player, message, subject) {
        //
    }

}