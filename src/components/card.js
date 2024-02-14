export function changePoster() {
    const cards = document.querySelectorAll('.card');


    cards.forEach(card => {
        const cardPoster = card.querySelector('.card__poster');
        cardPoster.src = 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg'
        console.log(cardPoster);
    })
}
