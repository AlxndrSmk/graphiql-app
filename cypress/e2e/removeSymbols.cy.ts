import { removeSymbols } from '../../src/utils/removeSymbols';

describe('Test of removeSymbols helper function', () => {
  it('removes unnecessary symbols', () => {
    expect(removeSymbols('Hello, world! Привет, мир!')).to.equal(
      'HelloworldПриветмир'
    );
    expect(removeSymbols('')).to.equal('');
    expect(removeSymbols('!@#$%^&*()')).to.equal('');
    expect(removeSymbols('こんにちは, world! Γεια σας, κόσμος!')).to.equal(
      'world'
    );
  });
});
