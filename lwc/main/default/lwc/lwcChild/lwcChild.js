import { LightningElement, api } from 'lwc';
export default class LwcChild extends LightningElement {
    @api accountList;
    handleAccountClick(event) {
        let selectedAccId = event.currentTarget.getAttribute("data-key");
        //custom event
        const passEvent = new CustomEvent('accountselection', {
            detail:{recordId:selectedAccId} 
        });
       this.dispatchEvent(passEvent);
    }
}
