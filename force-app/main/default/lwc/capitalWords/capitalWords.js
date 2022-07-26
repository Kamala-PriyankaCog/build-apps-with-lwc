import { LightningElement } from 'lwc';

export default class CapitalWords extends LightningElement {
    inputname = 'World';
    get capitalizedName() {
        return `Hello ${this.inputname.toUpperCase()}!`;
    }
    handleGreetingChange(event) {
        this.inputname = event.target.value;
    }
}