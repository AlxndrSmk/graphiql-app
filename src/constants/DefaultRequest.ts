const DEFAULT_REQUEST =
  'query getCharacters {\n' +
  '  characters(page: 1, filter: {\n' +
  '    name: "Rick"\n' +
  '  }) {\n' +
  '    results {\n' +
  '      id\n' +
  '      name\n' +
  '      image\n' +
  '    }\n' +
  '  }\n' +
  '}';

export default DEFAULT_REQUEST;
