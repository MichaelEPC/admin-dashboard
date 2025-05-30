export const formatShortName = (content: string, max: number) => {
  if (!content) {
    return "";
  }
  if (content.length <= max) {
    return content;
  }
  return `${content.substring(0, max)}...`;
};
