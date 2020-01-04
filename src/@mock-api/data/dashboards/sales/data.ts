import * as moment from 'moment';

/* tslint:disable:max-line-length */
export const sales = {
    lastPayment : {
        status  : 'paid',
        date    : moment().startOf('day').subtract(15, 'days').format('LL'),
        products: '$27,221.21',
        shipping: '$7,331.94',
        total   : '$34,553.15'
    },
    nextPayment : {
        status  : 'pending',
        date    : moment().startOf('day').subtract(15, 'days').add(1, 'month').format('LL'),
        products: '$39,819.41',
        shipping: '$9,112.51',
        total   : '$48,931.92'
    },
    totalOrders : {
        amount: 2081,
        data  : [518, 524, 519, 520],
        labels: [
            moment().subtract(4, 'weeks').startOf('week').format('DD MMM') + ' - ' + moment().subtract(4, 'weeks').endOf('week').format('DD MMM'),
            moment().subtract(3, 'weeks').startOf('week').format('DD MMM') + ' - ' + moment().subtract(3, 'weeks').endOf('week').format('DD MMM'),
            moment().subtract(2, 'weeks').startOf('week').format('DD MMM') + ' - ' + moment().subtract(2, 'weeks').endOf('week').format('DD MMM'),
            moment().subtract(1, 'weeks').startOf('week').format('DD MMM') + ' - ' + moment().subtract(1, 'weeks').endOf('week').format('DD MMM')
        ]
    },
    totalRevenue: {
        amount: '$25,019.51',
        start : moment().subtract(8, 'days').format('LL'),
        end   : moment().subtract(1, 'day').format('LL'),
        data  : [2771.42, 2991.21, 3471.16, 3681.88, 2971.32, 3203.96, 2754.43, 3174.13],
        labels: [
            moment().subtract(8, 'day').format('DD MMM'),
            moment().subtract(7, 'day').format('DD MMM'),
            moment().subtract(6, 'day').format('DD MMM'),
            moment().subtract(5, 'day').format('DD MMM'),
            moment().subtract(4, 'day').format('DD MMM'),
            moment().subtract(3, 'day').format('DD MMM'),
            moment().subtract(2, 'day').format('DD MMM'),
            moment().subtract(1, 'day').format('DD MMM')
        ]
    },
    recentOrders: [
        {
            id      : '1b6fd296-bc6a-4d45-bf4f-e45519a58cf5',
            orderId : '528651571NT',
            product : 'Modal Turtleneck Top',
            amount  : 1358.75,
            status  : 'shipped',
            customer: 'Morgan Page',
            date    : '2019-10-07T22:22:37.274Z'
        },
        {
            id      : '2dec6074-98bd-4623-9526-6480e4776569',
            orderId : '421436904YT',
            product : 'Super Skinny High Jeans',
            amount  : 1042.82,
            status  : 'confirmed',
            customer: 'Nita Hebert',
            date    : '2019-12-18T14:51:24.461Z'
        },
        {
            id      : 'ae7c065f-4197-4021-a799-7a221822ad1d',
            orderId : '685377421YT',
            product : 'Super Skinny High Jeans',
            amount  : 1828.16,
            status  : 'pending',
            customer: 'Marsha Chambers',
            date    : '2019-12-25T17:52:14.304Z'
        },
        {
            id      : '0c43dd40-74f6-49d5-848a-57a4a45772ab',
            orderId : '884960091RT',
            product : 'Shaping Skinny Regular Jeans',
            amount  : 1647.55,
            status  : 'shipped',
            customer: 'Charmaine Jackson',
            date    : '2019-11-29T06:32:16.111Z'
        },
        {
            id      : 'e5c9f0ed-a64c-4bfe-a113-29f80b4e162c',
            orderId : '361402213NT',
            product : 'Loose-knit Sweater',
            amount  : 927.43,
            status  : 'confirmed',
            customer: 'Maura Carey',
            date    : '2019-11-24T12:13:23.064Z'
        },
        {
            id      : '2099f436-9b26-487f-a1b2-60cbbf8ca9ac',
            orderId : '641175958BT',
            product : 'Modal Turtleneck Top',
            amount  : 352.51,
            status  : 'delivered',
            customer: 'England Huffman',
            date    : '2019-11-22T21:10:47.601Z'
        },
        {
            id      : 'd93fa199-bec6-4ebd-ae14-1df7e8f7b47b',
            orderId : '365264493BT',
            product : 'Modal Turtleneck Top',
            amount  : 1455.45,
            status  : 'pending',
            customer: 'Lola Blake',
            date    : '2019-11-13T00:39:13.905Z'
        },
        {
            id      : 'a3ffd658-6833-4373-9426-ba509a99ed4e',
            orderId : '553741604UT',
            product : 'Loose-knit Sweater',
            amount  : 626.93,
            status  : 'pending',
            customer: 'Barber Nieves',
            date    : '2019-12-03T03:38:46.466Z'
        },
        {
            id      : '1dce3230-67ca-433f-be06-e7a214d2562d',
            orderId : '352422040YT',
            product : 'Loose-knit Sweater',
            amount  : 674.96,
            status  : 'paid',
            customer: 'April Gibson',
            date    : '2019-11-27T16:02:41.905Z'
        },
        {
            id      : '950447da-e89a-43db-9e64-27ee60fefc65',
            orderId : '382641016RT',
            product : 'Shaping Skinny Regular Jeans',
            amount  : 1848.78,
            status  : 'shipped',
            customer: 'Christa Villarreal',
            date    : '2019-12-04T01:36:31.009Z'
        }
    ]
};
