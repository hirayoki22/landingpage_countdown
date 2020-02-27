let releaseDate = new Date('Apr 22, 2020 13:00:00').getTime();

const counter = setInterval(() => {
    let currentDate = new Date().getTime();
    let dateDiff = releaseDate - currentDate;

    let days  = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins  = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let secs  = Math.floor((dateDiff % (1000 * 60)) / 1000);

    let day_word = days  > 1 ? 'Days'    : 'Days';
    let hor_word = hours > 1 ? 'Hours'   : 'Hour';
    let min_word = mins  > 1 ? 'Minutes' : 'Minute';
    let sec_word = secs  > 1 ? 'Seconds' : 'Second';

    document.querySelector('.countdown').innerHTML = `
        <div>${days}<span>${day_word}</span></div>
        <div>${hours}<span>${hor_word}</span></div>
        <div>${mins}<span>${min_word}</span></div>
        <div>${secs}<span>${sec_word}</span></div>`;
}, 1000);