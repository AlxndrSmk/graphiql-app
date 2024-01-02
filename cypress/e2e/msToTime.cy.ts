import { millisecondsToTime } from '../../src/utils/msToTime';

describe('Test of helper function', () => {
  it('converts milliseconds to MM:SS format', () => {
    expect(millisecondsToTime(6000)).to.equal('00:06');
    expect(millisecondsToTime(5000)).to.equal('00:05');
    expect(millisecondsToTime(5500)).to.equal('00:05');
    expect(millisecondsToTime(61500)).to.equal('01:01');
    expect(millisecondsToTime(0)).to.equal('00:00');
  });
});
