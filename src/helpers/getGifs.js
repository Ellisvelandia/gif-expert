export const getGifs = async (category) => {
  const ulr = `http://api.giphy.com/v1/gifs/search?api_key=BLCo1oBU29wtbGscgBFjbeg6UryMi7th&q=${category}&limit=10`;
  const res = await fetch(ulr);
  const { data } = await res.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
