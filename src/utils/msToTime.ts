export const millisecondsToTime = (timestamp: number): string => {
  const milliseconds: number = timestamp % 1000;
  timestamp = (timestamp - milliseconds) / 1000;
  const seconds: string | number =
    timestamp % 60 < 10 ? '0' + (timestamp % 60) : timestamp % 60;
  timestamp = (timestamp - +seconds) / 60;
  const minutes: string | number =
    timestamp % 60 < 10 ? '0' + (timestamp % 60) : timestamp % 60;
  return `${minutes}:${seconds}`;
};
