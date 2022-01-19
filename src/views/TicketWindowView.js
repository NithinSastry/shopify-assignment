import Category from './Category';
import { getEventHub } from './../controller/event-hub';
import EVENTS from '../controller/event';
class TicketWindowView {
  constructor({ categories }) {
    this.categories = categories;
    this.appDiv = document.querySelector('#app');
    this.appDiv.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        const category = e.target.dataset.category;
        const rowId = e.target.dataset.rowid;
        const seatNo = e.target.dataset.seatno;

        const numTickets = parseInt(
          document.querySelector('#selectTickets').value
        );
        getEventHub().publish(EVENTS.TICKET_SELECTED, {
          category,
          rowId,
          seatNo,
          numTickets,
        });
      }
    });
    this.getMarkup();
  }
  getCategories = () => {
    let categoryMarkup = '';
    this.categories.forEach((category) => {
      categoryMarkup += new Category(category).getMarkup();
    });
    return categoryMarkup;
  };
  getMarkup = () => {
    this.appDiv.innerHTML = `
        <div class="ticketApp">
            <label for="selectTickets">Select tickets</label>
            <select id="selectTickets">
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="8">8</option>
                <option value="8">10</option>
            </select>
            <div class="categories">
                ${this.getCategories()}
            </div>
        </div>
    `;
  };
}

export default TicketWindowView;
