export const getTimeForReading = (string: string) => {
    const wpm = 225;
    const words = string.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);

    return time;
};
