import { LightningElement, api } from 'lwc';
import ursusResources from '@salesforce/resourceUrl/ursus_park';
export default class BearTile extends LightningElement {
	data;
	@api bear;
	appResources = {
		bearSilhouette: `${ursusResources}/standing-bear-silhouette.png`,
	};
}