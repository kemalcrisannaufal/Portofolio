const getEstimatedReadingTime = (content: string) =>
  Math.ceil(content.split(" ").length / 200);

const getShortDescription = (content: string, wordCount = 26) => {
  const words = content.trim().split(/\s+/);
  const shortText = words.slice(0, wordCount).join(" ");
  return shortText + (words.length > wordCount ? " ..." : "");
};

export { getEstimatedReadingTime, getShortDescription };
