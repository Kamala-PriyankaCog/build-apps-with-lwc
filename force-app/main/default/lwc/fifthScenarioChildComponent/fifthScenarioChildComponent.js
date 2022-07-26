import { api, LightningElement } from 'lwc';

export default class FifthScenarioChildComponent extends LightningElement {

  @api msg
  message="Hi From Child"


  handleClick(){
    const elem = new CustomEvent('custom',{
        detail:this.message
    })
    this.dispatchEvent(elem)
  }

}