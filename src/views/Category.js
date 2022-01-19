import Row from './Row';
class Category {
  constructor(category) {
    this.category = category;
  }
  getRows = (rows) => {
    let rowMarkup = '';
    rows.forEach((row) => {
      rowMarkup += new Row(row, this.category.name).getMarkup(row);
    });
    return rowMarkup;
  };
  getMarkup = () => {
    return `
        <div class="category">
            <div class="category-heading">
                ${this.category.name} - Rs. ${this.category.price}
            </div>
            <hr />
            <div class="rows">
                ${this.getRows(this.category.rows)}
            </div>
        </div>
      `;
  };
}

export default Category;
