class SeatView {
  constructor(category, rowId, seatNo) {
    this.category = category;
    this.rowId = rowId;
    this.seatNo = seatNo;
  }

  getMarkup = (isBooked, isSelected) => {
    return `
        <button data-category=${this.category} data-rowId=${
      this.rowId
    } data-seatNo=${this.seatNo} class="${isBooked ? 'booked' : ''} ${
      isSelected ? 'selected' : ''
    }">
            ${this.seatNo}
        </button>
      `;
  };
}

export default SeatView;
