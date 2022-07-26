import { LightningElement, wire } from 'lwc';
import {registerListener, unregisterAllListeners} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';


export default class SubComp extends LightningElement {

    @wire(CurrentPageReference) pageRef;
    connectedCallback(){
        registerListener('pubsubevent', this.handleCallback, this);
    }
    disconnectedCallback(){
        unregisterAllListeners(this);
    }
    handleCallback(detail){
        alert('paramtere from publisher: '+ detail.firstname);

    }
}