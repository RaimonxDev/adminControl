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
        amount: 1558,
        since : moment().subtract(4, 'weeks').startOf('week').format('LL'),
        data  : [413, 541, 287, 317],
        labels: [
            moment().subtract(4, 'weeks').startOf('week').format('DD MMM') + ' - ' + moment().subtract(4, 'weeks').endOf('week').format('DD MMM'),
            moment().subtract(3, 'weeks').startOf('week').format('DD MMM') + ' - ' + moment().subtract(3, 'weeks').endOf('week').format('DD MMM'),
            moment().subtract(2, 'weeks').startOf('week').format('DD MMM') + ' - ' + moment().subtract(2, 'weeks').endOf('week').format('DD MMM'),
            moment().subtract(1, 'weeks').startOf('week').format('DD MMM') + ' - ' + moment().subtract(1, 'weeks').endOf('week').format('DD MMM')
        ]
    },
    totalRevenue: {
        start : moment().subtract(1, 'week').format('LL'),
        end   : moment().format('LL'),
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
    }
};
