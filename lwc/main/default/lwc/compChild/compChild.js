import { LightningElement, api } from 'lwc';

export default class CompChild extends LightningElement {
    @api myName="Priyanka";
    // create custom event and dispatch method using dispatchEvent. define handler in parent comp
    //adhere to DOM naming conventions while naming custom event. can pass params using detail prop of custom event
    handleMe(){
        const childEvent = new CustomEvent('buttonclick',
        {detail : 'parameter from child'}
        );
        this.dispatchEvent(childEvent);
    }
}