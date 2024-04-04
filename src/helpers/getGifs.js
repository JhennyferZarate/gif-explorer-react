export const getGifs = async (category) => {
  const apiKey = "R7aSx2Y5vrM7gwXPocGQUr7tbbZQjhl9";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=15`;
  const resp = await fetch(url);

  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: !img.title.trim() ? "Untitled GIF" : img.title,
    url: img.images.preview_gif.url,
    height: parseInt(img.images.preview_gif.height),
  }));

  return gifs;
};
