import { LightningElement } from 'lwc';

export default class HelloWebComponent extends LightningElement {
    greeting = '';
    handleGreetingChange(event) {
        this.greeting = event.target.value;
    }
    get capitalizedGreeting() {
        return ` ${this.greeting.toUpperCase()}`;
    }
    
}