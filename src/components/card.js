const getData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
};

const fetchWinterAnime = async () => {
    const url = "https://api.jikan.moe/v4/seasons/now";
    try {
        const data = await getData(url);
        return data.data
    } catch (error) {
        console.log(error);
    }
};

const winterAnime = async () => {
    const animeData = await fetchWinterAnime();
    const cards = document.querySelectorAll('.season');
    for (let i = 0; i < 5; i++) {
        const card = cards[i];
        const cardPoster = card.querySelector('.card__poster');
        cardPoster.src = animeData[i].images.jpg.image_url;
    }
    for (let j = 0; j < 5; j++) {
        const card = cards[j];
        const cardTitle = card.querySelector('.card__title');
        cardTitle.textContent = animeData[j].title;
    }
}


// function getSchedualePerDay () {
//     const fetchSchedulesMonday = async () => {
//         const url = "https://api.jikan.moe/v4/schedules?filter=sunday";
//         try {
//             const data = await getData(url);
//             return data.data
//         } catch (error) {
//             console.log(error);
//         }
//     };
//
//     const schedulesMonday = async () => {
//         const animeData = await fetchSchedulesMonday();
//         const schedulesMonday = document.querySelectorAll('.card-s');
//         for (let i = 0; i < 4; i++) {
//             const mondayItem = schedulesMonday[i];
//             const cardPoster = mondayItem.querySelector('.card-s__poster');
//             cardPoster.src = animeData[i].images.jpg.image_url;
//         }
//         for (let j = 0; j < 4; j++) {
//             const mondayItem = schedulesMonday[j];
//             const cardTitle = mondayItem.querySelector('.card-s__description-title');
//             cardTitle.textContent = animeData[j].title;
//         }
//     }
//
// }

const fetchFinishedAnime = async () => {
    const url = "https://api.jikan.moe/v4/top/anime";
    try {
        const data = await getData(url);
        return data.data
    } catch (error) {
        console.log(error);
    }
};

const finishedAnime = async () => {
    const animeData = await fetchFinishedAnime();
    const cards = document.querySelectorAll('.finished');
    for (let i = 0; i < 5; i++) {
        const card = cards[i];
        const cardPoster = card.querySelector('.card__poster');
        cardPoster.src = animeData[i].images.jpg.image_url;
    }
    for (let j = 0; j < 5; j++) {
        const card = cards[j];
        const cardTitle = card.querySelector('.card__title');
        cardTitle.textContent = animeData[j].title;
    }
    console.log(animeData);
}


winterAnime();
finishedAnime();



