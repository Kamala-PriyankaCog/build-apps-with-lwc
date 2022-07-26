import { LightningElement, api } from 'lwc';

export default class CompParent extends LightningElement {
    @api parentValue="Parent Component";
    handleEvent(event){
        alert('custom event fired');
        this.parentValue = "Custom event";
        alert(' param from child: '+ event.detail);
    }
}