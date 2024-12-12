export const uiDrag = {
    init: (dropZones, notes) => {
        document.querySelectorAll(dropZones).forEach((zone) => {
            zone.addEventListener("drop", (event) => {
                event.preventDefault();
                const cardId = event.dataTransfer.getData("text/plain");
                const card = document.getElementById(cardId);

                if (zone.id === card.dataset.suit) {
                    const rect = zone.getBoundingClientRect();
                    const offsetX = event.clientX - rect.left;
                    const offsetY = event.clientY - rect.top;

                    card.style.position = "absolute";
                    card.style.left = offsetX - (card.offsetWidth / 2) + "px";
                    card.style.top = offsetY - (card.offsetHeight / 2) + "px";

                    if (!zone.contains(card)) {
                        zone.appendChild(card);
                    }
                }
            });

            zone.addEventListener("dragover", (event) => {
                event.preventDefault();  
            });
        });

        document.querySelectorAll(notes).forEach((note) => {
            note.setAttribute("draggable", "true");
            note.addEventListener("dragstart", (event) => {
                event.dataTransfer.setData("text/plain", event.target.id);
            });
        });

        const cardsContainer = document.getElementById('cards-container');
        cardsContainer.addEventListener("drop", (event) => {
            event.preventDefault();
            const cardId = event.dataTransfer.getData("text/plain");
            const card = document.getElementById(cardId);

            card.style.position = "relative";
            card.style.left = "0px";
            card.style.top = "0px";

            if (!cardsContainer.contains(card)) {
                cardsContainer.appendChild(card);
            }
        });

        cardsContainer.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        // document.getElementById('sort-cards').addEventListener('click', () => {
        //     const cards = Array.from(cardsContainer.children);
        //     cards.sort((a, b) => {
        //         if (a.dataset.suit === b.dataset.suit) {
        //             return parseInt(a.dataset.value) - parseInt(b.dataset.value);
        //         }
        //         return a.dataset.suit.localeCompare(b.dataset.suit);
        //     });
        //     cards.forEach(card => cardsContainer.appendChild(card));
        // });
    }
}