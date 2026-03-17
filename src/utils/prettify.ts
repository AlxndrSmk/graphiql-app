export const prettify = (value: string) => {
  return addIndents(formatNewlineAndSpaces(removeNewlineAndSpaces(value)));
};

const removeNewlineAndSpaces = (value: string) => {
  return value.replaceAll('\n', ' ').replace(/\s+/g, ' ');
};

const formatNewlineAndSpaces = (value: string) => {
  let res = '';

  for (let i = 0; i < value.length; i++) {
    if (value[i] === '{') {
      if (value[i - 1] && value[i - 1] !== ' ') res += ' ';
      res += `${value[i]}\n`;
      continue;
    }

    if (value[i] === '}') {
      res += `\n${value[i]}`;
      if (
        value[i + 1] &&
        (value[i + 1].match(/[A-Za-z]/) ||
          (value[i + 1] === ' ' &&
            value[i + 2] &&
            value[i + 2].match(/[A-Za-z]/)))
      )
        res += '\n';
      continue;
    }

    if (
      value[i - 1] &&
      value[i - 1].match(/[A-Za-z]/) &&
      value[i] === ' ' &&
      value[i + 1].match(/[A-Za-z]/) &&
      res.includes('{')
    ) {
      res += '\n';
      continue;
    }

    if (value[i] === '\n' && value[i + 1].match(/[A-Za-z]/)) continue;
    res += value[i];
  }

  return res;
};

const addIndents = (value: string) => {
  const indentSize = 2;
  let indentCount = 0;
  let res = '';
  const array = value.split('\n');

  for (let i = 0; i < array.length; i++) {
    if (array[i].includes('}')) indentCount--;

    res += ' '.repeat(indentCount * indentSize) + array[i].trim() + '\n';

    if (array[i].includes('{')) indentCount++;
  }

  return res.trim() + '\n';
};
