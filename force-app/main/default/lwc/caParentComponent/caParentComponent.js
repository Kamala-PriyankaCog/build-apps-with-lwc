import { LightningElement,wire,track } from 'lwc';
import getCaseRecords from '@salesforce/apex/GetAllAccounts.getCaseRecords';
    
    export default class CaParentComponent extends LightningElement {
       
        @track accountId
         cases
        gotRecordId = false
    
        @wire (getCaseRecords, { Id: '$accountId' })
        wiredCaseRecords({error,data}){
            if (data) {  
               this.cases = data
            } else if (error) {
               console.log(error);
            }else{
                console.log('unknown error')
            }
        }
    
        fetchhandler(event){
            this.accountId = event.detail
            this.gotRecordId=true
    
        }
    
    }