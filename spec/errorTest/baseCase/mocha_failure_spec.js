// Use the external Chai As Promised to deal with resolving promises in
// expectations.
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('protractor library', () => {
  it('should fail', async () => {
    await browser.get('index.html');
    expect(await browser.getTitle()).to.equal('INTENTIONALLY INCORRECT');
  });
});
