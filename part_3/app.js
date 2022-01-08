$(function () {
  let URL = 'http://deckofcardsapi.com/api/deck/';

  //3. Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

  let deckID;
  let $btn = $('button');
  let $card = $('#card');

  $.getJSON(`${URL}new/shuffle/`).then((data) => {
    deckID = data.deck_id;
    $btn.show();
  });

  $btn.on('click', function () {
    $.getJSON(`${URL}${deckID}/draw/`).then((data) => {
      let cardImg = data.cards[0].image;
      let cardangle = Math.random() * 90 - 45;
      let randY = Math.random() * 40 - 20;
      let randX = Math.random() * 40 - 20;
      $card.append(
        $('<img>', {
          src: cardImg,
          css: {
            transform: `translate(${randX}px,${randY}px) rotate(${cardangle}deg)`,
          },
        }),
      );
      if (data.remaining === 0) $btn.remove();
    });
  });
});
