import CardView from './Card';
import { getEventHub } from '../Controller/EventHub';
import EVENTS from '../Controller/Events';

class AopdView {
    constructor() {
        this.appDiv = document.querySelector("#app");
        window.AopdViewEvents = {};
        window.AopdViewEvents.search = this.onSearch;
        getEventHub().subscribe(EVENTS.DATA_LOADED, this.init);
        getEventHub().subscribe(EVENTS.SEARCH_DONE, this.reRenderCards);
    }

    init = ({ imageData }) => {
        this.imageData = imageData;
        this.getMarkup();
    }

    getCards = () => {
        let cardsMarkup = '';
        this.imageData.forEach((detail, index) => {
            cardsMarkup += new CardView(index, detail.title, detail.url, detail.date, detail.explanation).getMarkup()
        });
        return cardsMarkup;
    }

    onSearch = (event) => {
        if (event) {
            getEventHub().publish(EVENTS.SEARCH, event.value);
        }
    }

    reRenderCards = (searchItems) => {
        let cardsMarkup = '';
        searchItems.forEach((detail, index) => {
            cardsMarkup += new CardView(index, detail.title, detail.url, detail.date, detail.explanation).getMarkup()
        });
        this.cardsSection = document.querySelector(".cards-section");
        this.cardsSection.innerHTML = cardsMarkup;
    }


    getMarkup = () => {
        this.appDiv.innerHTML = `
            <section class="aopd-section">
                <header>
                    <p class="app-title">Spacestagram: Image-sharing from the final frontier</p>
                    <p class="app-sub-title">Brought to you by NASA's Image API</p>
                </header>
                <section class="search-section">
                    <input type="text" id="search" placeholder="Search by name" oninput="window.AopdViewEvents.search(this)"/>
                </section>
                <main class="cards-section">
                    ${this.getCards()}
                </main>
            </section>
        `;
    }
}

export default AopdView;