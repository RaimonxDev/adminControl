import * as moment from 'moment';

/* tslint:disable:max-line-length */
export const analytics = {
    totalVisits   : {
        amount: '62k',
        data  : [15521, 15519, 15522, 15521],
        labels: [
            moment().subtract(4, 'weeks').startOf('week').format('DD MMM') + ' - ' + moment().subtract(4, 'weeks').endOf('week').format('DD MMM'),
            moment().subtract(3, 'weeks').startOf('week').format('DD MMM') + ' - ' + moment().subtract(3, 'weeks').endOf('week').format('DD MMM'),
            moment().subtract(2, 'weeks').startOf('week').format('DD MMM') + ' - ' + moment().subtract(2, 'weeks').endOf('week').format('DD MMM'),
            moment().subtract(1, 'weeks').startOf('week').format('DD MMM') + ' - ' + moment().subtract(1, 'weeks').endOf('week').format('DD MMM')
        ]
    },
    conversionRate: {
        amount: '2.5%',
        start : moment().subtract(13, 'months').format('LL'),
        end   : moment().subtract(1, 'month').format('LL'),
        data  : [1.7, 1.2, 1.6, 1.8, 1.3, 1.9, 4.3, 3.3, 4.2, 2.1, 1.6, 1.8, 2.1],
        labels: [
            moment().subtract(13, 'months').format('MMM'),
            moment().subtract(12, 'months').format('MMM'),
            moment().subtract(11, 'months').format('MMM'),
            moment().subtract(10, 'months').format('MMM'),
            moment().subtract(9, 'months').format('MMM'),
            moment().subtract(8, 'months').format('MMM'),
            moment().subtract(7, 'months').format('MMM'),
            moment().subtract(6, 'months').format('MMM'),
            moment().subtract(5, 'months').format('MMM'),
            moment().subtract(4, 'months').format('MMM'),
            moment().subtract(3, 'months').format('MMM'),
            moment().subtract(2, 'months').format('MMM'),
            moment().subtract(1, 'months').format('MMM')
        ]
    },
    purchases     : {
        amount: '26.1k',
        data  : [6541, 6539, 6542, 6541],
        labels: [
            moment().subtract(4, 'weeks').startOf('week').format('DD MMM') + ' - ' + moment().subtract(4, 'weeks').endOf('week').format('DD MMM'),
            moment().subtract(3, 'weeks').startOf('week').format('DD MMM') + ' - ' + moment().subtract(3, 'weeks').endOf('week').format('DD MMM'),
            moment().subtract(2, 'weeks').startOf('week').format('DD MMM') + ' - ' + moment().subtract(2, 'weeks').endOf('week').format('DD MMM'),
            moment().subtract(1, 'weeks').startOf('week').format('DD MMM') + ' - ' + moment().subtract(1, 'weeks').endOf('week').format('DD MMM')
        ]
    },
    uniqueVisitors: {
        amount: '26.1k',
        data  : [6541, 6539, 6542, 6541],
        labels: [
            moment().subtract(4, 'weeks').startOf('week').format('DD MMM') + ' - ' + moment().subtract(4, 'weeks').endOf('week').format('DD MMM'),
            moment().subtract(3, 'weeks').startOf('week').format('DD MMM') + ' - ' + moment().subtract(3, 'weeks').endOf('week').format('DD MMM'),
            moment().subtract(2, 'weeks').startOf('week').format('DD MMM') + ' - ' + moment().subtract(2, 'weeks').endOf('week').format('DD MMM'),
            moment().subtract(1, 'weeks').startOf('week').format('DD MMM') + ' - ' + moment().subtract(1, 'weeks').endOf('week').format('DD MMM')
        ]
    },
    searches      : [
        {
            id      : '1b6fd296-bc6a-4d45-bf4f-e45519a58cf5',
            position: 'up',
            search  : 'Modal Turtleneck Top',
            count   : 17755,
            revenue : 20112.75
        },
        {
            id      : '2dec6074-98bd-4623-9526-6480e4776569',
            position: 'down',
            search  : 'Super Skinny High Jeans',
            count   : 11795,
            revenue : 16143.82
        },
        {
            id      : 'ae7c065f-4197-4021-a799-7a221822ad1d',
            position: 'down',
            search  : 'Super Skinny High Jeans',
            count   : 4942,
            revenue : 6734.16
        },
        {
            id      : '0c43dd40-74f6-49d5-848a-57a4a45772ab',
            position: 'down',
            search  : 'Shaping Skinny Regular Jeans',
            count   : 2405,
            revenue : 3050.55
        },
        {
            id      : 'e5c9f0ed-a64c-4bfe-a113-29f80b4e162c',
            position: 'up',
            search  : 'Loose-knit Sweater',
            count   : 1337,
            revenue : 2423.43
        },
        {
            id      : '2099f436-9b26-487f-a1b2-60cbbf8ca9ac',
            position: 'down',
            search  : 'Modal Turtleneck Top',
            count   : 1125,
            revenue : 2150.51
        },
        {
            id      : 'd93fa199-bec6-4ebd-ae14-1df7e8f7b47b',
            position: 'down',
            search  : 'Modal Turtleneck Top',
            count   : 1070,
            revenue : 1943.45
        },
        {
            id      : 'a3ffd658-6833-4373-9426-ba509a99ed4e',
            position: 'no-change',
            search  : 'Loose-knit Sweater',
            count   : 940,
            revenue : 1380.93
        },
        {
            id      : '1dce3230-67ca-433f-be06-e7a214d2562d',
            position: 'no-change',
            search  : 'Loose-knit Sweater',
            count   : 804,
            revenue : 1135.96
        },
        {
            id      : '950447da-e89a-43db-9e64-27ee60fefc65',
            position: 'no-change',
            search  : 'Shaping Skinny Regular Jeans',
            count   : 797,
            revenue : 984.78
        }
    ]
};
