export const randomMovies = (arr = []) => {
  if (arr.length === 0) {
    return -1;
  }

  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 5);
  return selected.sort((a, b) => a.name.localeCompare(b.name));
};

export const capitalizeWords = (text) => {
  return text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
