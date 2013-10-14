var assert = require('assert')
  , Invoice = require('../lib/invoice')
  , mpower = require('../lib')
  , Setup = mpower.Setup
  , Store = mpower.Store
  , CheckoutInvoice = mpower.CheckoutInvoice
  ;

describe('CheckoutInvoice', function () {
  describe('#create()', function () {
    it('should work with valid initialization and total amount', function (done){
      this.timeout(15000);
      var setup = new Setup({mode: 'test'});
      var store = new Store({name: 'Awesome Store'});
      var invoice = new CheckoutInvoice;
      invoice.init(setup, store);
      invoice.totalAmount = 70;

      invoice.create(function (err, invoice){
        assert.ok(!(err instanceof Error));
        assert.ok(invoice.url);
        assert.ok(invoice.token);
        done();
      });
    });
  });
});