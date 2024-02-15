const getData = async (url) => {
        const res = await fetch(url);
        const json = await res.json();
        return json;
    };

const fetchAnimeData = async () => {
    const url = "https://api.jikan.moe/v4/genres/anime";
    try {
        const data = await getData(url);
        return data.data
    } catch (error) {
        console.log(error);
    }
};

const fetchAnime = async () => {
    const genresData = await fetchAnimeData();
    console.log(genresData);
}

fetchAnime();
