$(function () {
  let URL = 'http://deckofcardsapi.com/api/deck/';

  //2.Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.Once you have both cards, console.log the values and suits of both cards.

  let cardOne;

  $.getJSON(`${URL}new/draw/`)
    .then((data) => {
      cardOne = data.cards[0];
      return $.getJSON(`${URL}new/draw/`);
    })
    .then((data) => {
      let cardTwo = data.cards[0];
      [cardOne, cardTwo].forEach(function (card) {
        console.log(`${card.value} of ${card.suit}`);
      });
    });
});
