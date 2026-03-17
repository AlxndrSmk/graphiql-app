export const getRandomColor = (): string => {
  const numbers = '0123456789';
  let color = '#';

  for (let i = 0; i < 6; i += 1) {
    color += numbers[Math.floor(Math.random() * 10)];
  }

  return color;
};
