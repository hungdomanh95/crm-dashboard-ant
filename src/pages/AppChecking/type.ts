type Customer = {
  customerId: number,
  customerName: string,
  customerGender: string,
  customerCompanyName: string,
  customerProvinceName: string,
  customerDistrictName: string,
}
export interface DataCheck {
  salesCode: string;
  salesName?: string;
  supCode?: string;
  supName?: string;
  asmCode?: string;
  asmName?: string;
  rsmCode?: string;
  rsmName?: string;
  agreementId: string;
  schemeId:number;
  schemeDesc:string;
  loanAmount:number;
  disbursalAmtNoInsurance:number;
  insuranceFee:number;
  loanRate:number;
  creationDate:string;
  pendingDate:string;
  undDate?:string;
  undResult:string;
  resultDate:string;
  defer:string;
  lastComment?:string;
  status:string;
  rejectCode?:string;
  receivedAfter?:string;
  hasInsurance:string;
  schemeRate:number;
  loanAmountRate:number;
  contractAdjustedByGender:number;
  noOfContractsAfterAdjusted:number;
  ekyc:string;
  disbursedAmount?:number;
  disbursedDate?:string;
  agreementStatus?:string;
  reason?:string;
  customer:Customer
}