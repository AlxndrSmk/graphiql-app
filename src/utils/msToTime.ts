export const millisecondsToTime = (timestamp: number) => {
  const milliseconds = timestamp % 1000;
  timestamp = (timestamp - milliseconds) / 1000;
  const seconds = timestamp % 60 < 10 ? '0' + (timestamp % 60) : timestamp % 60;
  timestamp = (timestamp - +seconds) / 60;
  const minutes = timestamp % 60 < 10 ? '0' + (timestamp % 60) : timestamp % 60;
  return `${minutes}:${seconds}`;
};
