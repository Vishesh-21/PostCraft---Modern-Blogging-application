export const formateDate = (createdAt: Date) => {
  const now = new Date();

  const diffTime = now.getTime() - createdAt.getTime();

  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays >= 7) {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(createdAt).toLocaleDateString("en-US", options);
  } else if (diffDays >= 1) {
    return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  } else {
    const diffHours = Math.floor(diffTime / (1000 * 3600));
    if (diffHours >= 1) {
      return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    }
    const diffMinutes = Math.floor(diffTime / (1000 * 60));
    return `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`;
  }
};
