import { LightningElement, wire } from 'lwc';
import { subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import MY_MESSAGE_CHANNEL_CHANNEL from "@salesforce/messageChannel/MyMessageChannel__c";

export default class CompUnrelate extends LightningElement {
    @wire(MessageContext) messageContext;
    subscription = null;
  
      connectedCallback() {
            this.handleSubscribe();
      }
  
      handleSubscribe() {
         this.subscription = subscribe(this.messageContext, MY_MESSAGE_CHANNEL_CHANNEL, (message) => {
              console.log(message.message);
              alert('Event Captured! :' + JSON.stringify(message));
          });
      } 
}