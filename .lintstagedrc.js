module.exports = {
  '**/*.ts?(x)': ['npm run lint:fix src', 'npm run prettier-fix'],
};
