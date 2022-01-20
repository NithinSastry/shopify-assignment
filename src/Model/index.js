import { getNASAAOPD } from '../Utils/ServiceBroker';
import { getEventHub } from '../Controller/EventHub';
import EVENTS from '../Controller/Events';

/* invokes service broker API to fetch data from NASA API
*  filters the model for search functionality
*/
class NASAImageModel {
  constructor() {
    this.AOPDData = {};

    getNASAAOPD().then(data => {
      this.AOPDData = {
        imageData: data
      };
      getEventHub().publish(EVENTS.DATA_LOADED, this.AOPDData);
    });
    
    // TODO : subscribe to like / un-like events
    getEventHub().subscribe(EVENTS.SEARCH, this.search);
  }
  
  search = (item) => {
    if(item.length === 0) {
      getEventHub().publish(EVENTS.DATA_LOADED, this.AOPDData);
      return;
    }
    this.searchResults = this.AOPDData.imageData.filter((imageData) => {
      return imageData.title.toLowerCase().includes(item.toLowerCase());
    });
    getEventHub().publish(EVENTS.SEARCH_DONE, this.searchResults);
  }
}

export default NASAImageModel;
