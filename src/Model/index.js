//invokes service broker API to fetch data into local storage
import { getTickets } from '../utils/service-broker';
import { getEventHub } from '../controller/event-hub';
import EVENTS from '../controller/event';

class TicketModel {
  constructor() {
    this.currentCategory = '';
    this.tickets = getTickets();
    this.eventHub = getEventHub();
    this.eventHub.publish(EVENTS.DATA_LOADED, this.tickets);
    this.eventHub.subscribe(EVENTS.TICKET_SELECTED, this.onTicketSelect);
  }
  onTicketSelect = ({ category, rowId, seatNo, numTickets }) => {
    this.currentCategory =
      this.currentCategory.length === 0 ? category : this.currentCategory;
    if (this.currentCategory !== category) {
      alert('all tickets must be selected only from one category');
      return;
    }
    if (category && rowId) {
      const categoryInfo = this.tickets.categories.find((info) => {
        return info.name === category;
      });
      const row = categoryInfo.rows.find((rowInfo) => rowInfo.id === rowId);
      //   if (row.selected) {
      //     row.selected[seatNo.toString()] = true;
      //   } else {
      //     row.selected = {};
      //     row.selected[seatNo.toString()] = true;
      //   }

      let count = 0;
      let end_seat = seatNo;
      while (count !== numTickets) {
        if (row.booked[end_seat.toString()] === true) {
          break;
        } else {
          count++;
          end_seat++;
        }
      }
      if (count >= numTickets) {
        let i = 0;
        while (i < count) {
          if (row.selected) {
            row.selected[seatNo.toString()] = true;
          } else {
            row.selected = {};
            row.selected[seatNo.toString()] = true;
          }
          i++;
          seatNo++;
        }
      } else {
        if (row.selected) {
          row.selected[seatNo.toString()] = true;
        } else {
          row.selected = {};
          row.selected[seatNo.toString()] = true;
        }
      }

      this.eventHub.publish(EVENTS.RE_RENDER_ROW, {
        rowData: row,
      });
    }
  };
}

export default TicketModel;
