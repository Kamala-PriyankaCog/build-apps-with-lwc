import { LightningElement } from 'lwc';

export default class FifthScenarioParentComponent extends LightningElement {

    text

    captureEvent(event){
       this.text = event.detail
    }

}