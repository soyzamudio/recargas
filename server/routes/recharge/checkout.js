'use strict';

var Braintree = require('../../models/braintree');
var TopUp = require('../../models/topups');

module.exports = {
  handler: function(request, reply) {
    var nonce = request.payload.nonce;
    Braintree.gateway.transaction.sale({ amount: "10.00", paymentMethodNonce: nonce }, function (err, result) {
      if (err) { res.send('error:', err); }
      var transaction = new TopUp({
        topupId: result.transaction.id,
        status: result.transaction.status,
        type: result.transaction.type,
        amount: result.transaction.amount,
        createdAt: result.transaction.createdAt,
        success: result.success
      });
      console.log(transaction);
      transaction.save(function(err) {
        if (err) { reply().code(400); }
        reply('successfully charged $10, check your sandbox dashboard!');
      })
    });
  }
};

//
// transaction:
//   { id: 'f768qt',
//     status: 'authorized',
//     type: 'sale',
//     currencyIsoCode: 'USD',
//     amount: '10.00',
//     merchantAccountId: 'kn4vfhb737mthr87',
//     orderId: null,
//     createdAt: '2015-04-22T00:41:29Z',
//     updatedAt: '2015-04-22T00:41:29Z',
//     customer:
//      { id: null,
//        firstName: null,
//        lastName: null,
//        company: null,
//        email: null,
//        website: null,
//        phone: null,
//        fax: null },
//     billing:
//      { id: null,
//        firstName: null,
//        lastName: null,
//        company: null,
//        streetAddress: null,
//        extendedAddress: null,
//        locality: null,
//        region: null,
//        postalCode: null,
//        countryName: null,
//        countryCodeAlpha2: null,
//        countryCodeAlpha3: null,
//        countryCodeNumeric: null },
//     refundId: null,
//     refundIds: [],
//     refundedTransactionId: null,
//     settlementBatchId: null,
//     shipping:
//      { id: null,
//        firstName: null,
//        lastName: null,
//        company: null,
//        streetAddress: null,
//        extendedAddress: null,
//        locality: null,
//        region: null,
//        postalCode: null,
//        countryName: null,
//        countryCodeAlpha2: null,
//        countryCodeAlpha3: null,
//        countryCodeNumeric: null },
//     customFields: '',
//     avsErrorResponseCode: null,
//     avsPostalCodeResponseCode: 'I',
//     avsStreetAddressResponseCode: 'I',
//     cvvResponseCode: 'I',
//     gatewayRejectionReason: null,
//     processorAuthorizationCode: 'LV7FDR',
//     processorResponseCode: '1000',
//     processorResponseText: 'Approved',
//     additionalProcessorResponse: null,
//     voiceReferralNumber: null,
//     purchaseOrderNumber: null,
//     taxAmount: null,
//     taxExempt: false,
//     creditCard:
//      { token: null,
//        bin: '411111',
//        last4: '1111',
//        cardType: 'Visa',
//        expirationMonth: '11',
//        expirationYear: '2015',
//        customerLocation: 'US',
//        cardholderName: null,
//        imageUrl: 'https://assets.braintreegateway.com/payment_method_logo/visa.png?environment=sandbox',
//        uniqueNumberIdentifier: null,
//        prepaid: 'Unknown',
//        healthcare: 'Unknown',
//        debit: 'Unknown',
//        durbinRegulated: 'Unknown',
//        commercial: 'Unknown',
//        payroll: 'Unknown',
//        issuingBank: 'Unknown',
//        countryOfIssuance: 'Unknown',
//        productId: 'Unknown',
//        venmoSdk: false,
//        maskedNumber: '411111******1111',
//        expirationDate: '11/2015' },
//     statusHistory: [ [Object] ],
//     planId: null,
//     subscriptionId: null,
//     subscription: { billingPeriodEndDate: null, billingPeriodStartDate: null },
//     addOns: [],
//     discounts: [],
//     descriptor: { name: null, phone: null, url: null },
//     recurring: false,
//     channel: null,
//     serviceFeeAmount: null,
//     escrowStatus: null,
//     disbursementDetails:
//      { disbursementDate: null,
//        settlementAmount: null,
//        settlementCurrencyIsoCode: null,
//        settlementCurrencyExchangeRate: null,
//        fundsHeld: null,
//        success: null },
//     disputes: [],
//     paymentInstrumentType: 'credit_card',
//     processorSettlementResponseCode: '',
//     processorSettlementResponseText: '',
//     paypalAccount: {},
//     coinbaseAccount: {},
//     applePayCard: {} },
//  success: true }
