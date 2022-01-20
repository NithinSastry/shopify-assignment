import CardView from './Card';
import { getEventHub } from '../Controller/EventHub';
import EVENTS from '../Controller/Events';

class AopdView {
    constructor() {
        this.loaded = false;
        this.appDiv = document.querySelector("#app");
        window.AopdViewEvents = {};
        window.AopdViewEvents.search = this.onSearch;
        getEventHub().subscribe(EVENTS.DATA_LOADED, this.init);
        getEventHub().subscribe(EVENTS.SEARCH_DONE, this.reRenderCards);
        this.appDiv.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const btnNo = e.target.dataset.btnno;
                const articleElem = document.querySelector(`article[data-articleno="${btnNo}"]`);
                const btnlike = articleElem.querySelector("button");
                if(btnlike.innerHTML === "like") {
                    btnlike.innerHTML = 'unlike';
                } else {
                    btnlike.innerHTML = 'like';
                }
            }
        });
        this.getMarkup();
    }

    init = ({ imageData }) => {
        this.imageData = imageData;
        this.loaded = true;
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
        if(this.loaded) {
            this.appDiv.innerHTML = `
                <section class="aopd-section">
                    <header>
                        <h2 class="app-title">Spacestagram: Image-sharing from the final frontier</h2>
                        <h4 class="app-sub-title">Brought to you by NASA's Image API</h4>
                    </header>
                    <section class="search-section">
                        <input type="text" id="search" placeholder="Search by name" oninput="window.AopdViewEvents.search(this)"/>
                    </section>
                    <main class="cards-section">
                        ${this.getCards()}
                    </main>
                </section>
            `;
        } else {
            this.appDiv.innerHTML = `
                <section class="loading-section">Loading...</section>
            `;
        }
    }
}

export default AopdView;