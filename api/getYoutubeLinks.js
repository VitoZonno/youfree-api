export default async function handler(req, res) {
  const url = req.query.url;
  if (!url) {
    return res.status(400).json({ error: "Missing url parameter" });
  }

  try {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'youtube-media-extractor.p.rapidapi.com',
        'X-RapidAPI-Key': '4425005d50msh54ced056f57a603p191ef8jsnb454a6458d79'
      }
    };

    const apiUrl = `https://youtube-media-extractor.p.rapidapi.com/api/v2/video/details?url=${encodeURIComponent(url)}`;
    const response = await fetch(apiUrl, options);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Errore interno' });
  }
}
