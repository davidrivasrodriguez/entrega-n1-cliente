import { uiDrag } from "./uiDrag.js";
import { deckBuilder } from "./deckBuilder.js";
import { playerDeck } from "./playerDeck.js";

const initializeDeck = async (deckType) => {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';

    await deckBuilder.builder(deckType);
    // playerDeck.deckShuffle();
    uiDrag.init(".drop-zone", ".card");
};

// document.getElementById('deck-type').addEventListener('change', (event) => {
//     const deckType = event.target.value;
//     initializeDeck(deckType);
// });

initializeDeck('spanish');