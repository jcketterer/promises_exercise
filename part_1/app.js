let url = 'http://numbersapi.com/';

let favNum = 18;

const divInfo = document.querySelector('div');

//PART ONE:

//# ONE

$.getJSON(`${url}${favNum}?json`).then((res) => {
  console.log(res);
});

//# TWO

let favNums = [1, 44, 100];
$.getJSON(`${url}${favNums}?json`).then((res) => {
  console.log(res);
});

//# THREE

Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${url}${favNum}?json`);
  }),
).then((info) => {
  info.forEach((data) => $('div').append(`<ul>${data.text}</ul>`));
});

//# FOUR

let newFavNums = [12, 36, 77, 101];
let newUrls = [];

for (let i = 0; i < newFavNums.length; i++) {
  newUrls.push($.getJSON(`${url}${newFavNums[i]}?json`));
}
Promise.all(newUrls)
  .then((res) => {
    res.forEach((data) => $('div').append(`<ul>${data.text}</ul>`));
  })
  .catch((err) => console.log(err));
