///<reference path="../../../tools/typings/tsd.d.ts" />
///<reference path="../../../tools/typings/expenseApp.d.ts" />

'use strict';

module expenseApp {

    var settings: shared.IAdalSettings = {
        tenant: '4f67d3e0-6d7a-477b-8615-19d739feb4ee',
        clientId: '53787802-106b-468a-ad31-73febd68bfcf',
        baseSPUrl: 'https://acio36504.sharepoint.com/sites/ExpenseManager/ngconf/_api/',
        baseOneDriveUrl: 'https://acio36504-my.sharepoint.com/_api/v1.0/me',
        aadEndpoints:
            {
                /* 'target endpoint to be called': 'target endpoint's resource ID'  */

                // sharepoint site containing lists
                'https://acio36504.sharepoint.com/sites/ExpenseManager/_api/': 'https://acio36504.sharepoint.com',
                // o365 files api
                'https://acio36504-my.sharepoint.com/_api/v1.0/me':'https://acio36504-my.sharepoint.com/'
            }
    };

    angular.module('expenseApp').constant('settings', settings);

}
