let jobs = module.exports;

jobs.Job = class CJob {
    constructor(sName, iID, iPayment = variables.economy.minimumWage) {
        this.sName = sName;
        this.iID = iID;
        this.iPayment = iPayment;
    }  
}