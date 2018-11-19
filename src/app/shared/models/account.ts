export class AccountModel {

    public account: string;
    public accountNumber: string; //For sorting
    public availableCash: number;
    public cashChange: number;
    public percentageChange: number;

    constructor(sourceObject) {
        this.account = `${sourceObject.accountType} - ${sourceObject.accountNumber}`;
        this.accountNumber = sourceObject.accountNumber;
        this.availableCash = sourceObject.availableCash;
        this.cashChange = Math.abs(sourceObject.availableCash - sourceObject.yesterdayCash);
        this.percentageChange = (sourceObject.availableCash - sourceObject.yesterdayCash) / sourceObject.yesterdayCash;
    }
}