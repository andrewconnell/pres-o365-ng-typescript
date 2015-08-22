///<reference path="../../../tools/typings/tsd.d.ts" />
///<reference path="../../../tools/typings/expenseApp.d.ts" />

'use strict';

module expenseApp {

    var settings: shared.IAdalSettings = {
        tenant: 'c24e6842-5db7-45ee-8afc-af300fb3e1cd',
        clientId: '0e253801-356c-4d3c-bd1f-339f88609c36',
        baseSPUrl: 'https://aconn.sharepoint.com/sites/ExpenseManager/_api/',
        baseOneDriveUrl: 'https://aconn-my.sharepoint.com/_api/v1.0/me',
        aadEndpoints:
            {
                /* 'target endpoint to be called': 'target endpoint's resource ID'  */

                // sharepoint site containing lists
                'https://aconn.sharepoint.com/sites/ExpenseManager/_api/': 'https://aconn.sharepoint.com',
                // o365 files api
                'https://aconn-my.sharepoint.com/_api/v1.0/me':'https://aconn-my.sharepoint.com/'
            }
    };

    angular.module('expenseApp').constant('settings', settings);

}
