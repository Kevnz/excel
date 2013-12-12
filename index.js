var get = function (){

    var customers ={};
    customers.cols = [
    {
        caption:'FirstName',
        type:'string'
    },{
        caption:'LastName',
        type:'string'
    },
    {
        caption:'EmailAddress',
        type:'string'
    },
    {
        caption: 'Phone', type: 'string'
    },
    {
        caption: 'Created On', type: 'string'
    },
    {
        caption: 'Street', type: 'string'
    },
    {
        caption: 'Suburb', type: 'string'
    },
    {
        caption: 'City', type: 'string'
    },
    {
        caption: 'Post Code', type: 'string'
    },
    {
        caption: 'Total Amount', type: 'string'
    },
    {
        caption: 'Donation Amount', type: 'string'
    }
    ];

            customers.rows=[];
        for (var i = 0; i < 25; i++) {
 
            customers.rows.push([
                  'first_name',
                  'paidCustomers[i].last_name',
                  'paidCustomers[i].email',
                  'paidCustomers[i].address1',
                  'paidCustomers[i].address2' ,
                  'paidCustomers[i].address3',
                  'paidCustomers[i].postcode',
                  'paidCustomers[i].phone_number' ,
                  'paidCustomers[i].amount',
                  'paidCustomers[i].donationAmount'
                  ]);
        }
    return customers;
}

var ex = require('./excel');

    var customers = get();
    var donors = get();


    var nodeExcel = require('./excel');
    var result = nodeExcel.execute( [customers, donors]);

var fs = require("fs");
fs.writeFileSync('test.xlsx', result, 'binary');