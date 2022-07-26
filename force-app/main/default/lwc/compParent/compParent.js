import { LightningElement, api, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import MY_MESSAGE_CHANNEL_CHANNEL from "@salesforce/messageChannel/MyMessageChannel__c";

export default class CompParent extends LightningElement {
    @api parentValue="Parent Component";
    @wire(MessageContext) messageContext;
    handleEvent(event){
        alert('custom event fired');
        this.parentValue = "Custom event";
        alert(' alert on parent: '+ event.detail);
    }
    handleValue(event){
        this.parentValue = "event on click";
    }
    publishfunction(){
        let data={message : "sample publish event fired" };
        publish(this.messageContext, MY_MESSAGE_CHANNEL_CHANNEL, data);
    }
}
