export const addMediaToLocalStorage = (mediaId, mediaType) => {
  const watchedMedia = getWatchedMediaFromLocalStorage(mediaType);
  if (!watchedMedia.includes(mediaId)) {
    watchedMedia.push(mediaId);
    localStorage.setItem(`watched${mediaType}`, JSON.stringify(watchedMedia));
  }
};

export const removeMediaFromLocalStorage = (mediaId, mediaType) => {
  const watchedMedia = getWatchedMediaFromLocalStorage(mediaType);
  const updatedMedia = watchedMedia.filter((id) => id !== mediaId);
  localStorage.setItem(`watched${mediaType}`, JSON.stringify(updatedMedia));
};

export const getWatchedMediaFromLocalStorage = (mediaType) => {
  const watchedMedia = localStorage.getItem(`watched${mediaType}`);
  return watchedMedia ? JSON.parse(watchedMedia) : [];
};