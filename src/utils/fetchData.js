export const exerciseOptions = {
  method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5e02cd14edmshde0e60840f5bf7ep12e47djsn1611c3e97d55',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeOptions = {
  method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5e02cd14edmshde0e60840f5bf7ep12e47djsn1611c3e97d55',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
