
export const exerciseOptions={
    method:'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': 'be99369d3amshdb70e0e33ed48dbp14aa5ejsn0f2ce3bcbf33',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
    },

};

export const youtubeOptions={
    method:'GET',
    headers:{
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    }
};


export const fetchData = async (url, options) =>{
    const response=await fetch(url, options);
    const data=await response.json();
    return data;
};

