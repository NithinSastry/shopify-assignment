class CardView {
    constructor(card_num, title, url, date, explanation) {
        this.card_num = card_num;
        this.title = title;
        this.url = url;
        this.date = date;
        this.explanation = explanation;
    }

    getMarkup = () => {
        return `
            <article data-articleNo="${this.card_num}">
                <figure>
                    <img class="img-aopd" src="${this.url}" alt="image of the day" >
                    <figcaption>${this.title} - ${this.date}</figcaption>
                </figure>
                <footer>
                    <p>${this.explanation}</p>
                </footer>
                <button class="btn-like" data-btnno="${this.card_num}">like</button>
            </article>
        `;
    }
}

export default CardView;