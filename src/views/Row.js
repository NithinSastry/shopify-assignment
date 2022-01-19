import Seat from './Seat';
import { getEventHub } from './../controller/event-hub';
import EVENTS from './../controller/event';
class Row {
  constructor(row, categoryName) {
    this.row = row;
    this.categoryName = categoryName;
    getEventHub().subscribe(EVENTS.RE_RENDER_ROW, this.reBuildMarkup);
  }
  getSeats = (begin, end, booked, selected) => {
    let seatMarkup = '';
    let isBooked;
    let isSelected;
    for (let i = begin; i <= end; i++) {
      isBooked = booked[i] === true ? true : false;
      if (selected) {
        isSelected = selected[i] === true ? true : false;
      }
      seatMarkup += new Seat(this.categoryName, this.row.id, i).getMarkup(
        isBooked,
        isSelected
      );
    }
    return seatMarkup;
  };
  getMarkup = () => {
    let markup = '';
    const [begin, end] = this.row.range.split('-');
    markup = `
        <div class='row' id="row-${this.row.id}">
            <div class='row-id'>
                ${this.row.id}
            </div>
            <div class='seats'>
                ${this.getSeats(
                  parseInt(begin),
                  parseInt(end),
                  this.row.booked,
                  this.row.selected
                )}
            </div>
        </div>
    `;
    return markup;
  };
  reBuildMarkup = ({ rowData }) => {
    if (rowData.id === this.row.id) {
      this.row = rowData;
      const [begin, end] = this.row.range.split('-');
      const seatsDiv = document.querySelector(`#row-${this.row.id} > .seats`);
      seatsDiv.innerHTML = this.getSeats(
        parseInt(begin),
        parseInt(end),
        this.row.booked,
        this.row.selected
      );
    }
  };
}

export default Row;
