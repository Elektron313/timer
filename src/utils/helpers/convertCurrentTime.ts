const convertCurrentTime = (number: number): string => {
  const hours = Math.floor(number / 3600);
  const mins = Math.floor(number / 60) - (hours * 60);
  const secs = parseInt((number % 60).toFixed(), 10);
  // if (hours > 0) {
  // return `${hours < 10 ? '0' : ''}${hours}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  // }
  // if (mins > 0) {
  //   return `${mins}:${secs}`;
  // }
  // return `${secs}`;
  return `${hours < 10 ? '0' : ''}${hours}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

export default convertCurrentTime;
