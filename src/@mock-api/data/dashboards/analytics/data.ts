import * as moment from 'moment';

/* tslint:disable:max-line-length */
export const analytics = {
    age                 : {
        series: [35, 65],
        labels: [
            'Under 30',
            'Over 30'
        ]
    },
    averagePurchaseValue: {
        amount: 152.46,
        data  : [
            44.82,
            46.19,
            47.69,
            49.01,
            46.40,
            51.28,
            50.15,
            53.60,
            56.08,
            52.72,
            56.60,
            60.26,
            58.36,
            56.59,
            55.75,
            54.74,
            54.27,
            58.65,
            57.00,
            60.52,
            57.60,
            56.48,
            55.10,
            54.35,
            52.39,
            54.52,
            54.16,
            51.95,
            51.19,
            46.35,
            48.33,
            45.84,
            48.22,
            43.30,
            45.82,
            43.48,
            41.32,
            40.99,
            38.49,
            40.10,
            44.86,
            44.03,
            41.41,
            37.80,
            39.29,
            35.24,
            32.12,
            35.68,
            38.00,
            37.96,
            38.70,
            37.45,
            37.51,
            33.10,
            35.09,
            33.11,
            31.87,
            29.18,
            31.91,
            34.37,
            32.91,
            33.17,
            37.16,
            32.60,
            36.94,
            35.98,
            38.12
        ]
    },
    browsers            : {
        amount: 46085,
        series: [
            {
                name: 'Chrome',
                data: [22939]
            },
            {
                name: 'Firefox',
                data: [12102]
            },
            {
                name: 'Safari',
                data: [8483]
            },
            {
                name: 'Others',
                data: [2561]
            }
        ]
    },
    channels            : {
        amount: 46085,
        series: [
            {
                name: 'Direct',
                data: [27755]
            },
            {
                name: 'Search',
                data: [9839]
            },
            {
                name: 'Referral',
                data: [5942]
            },
            {
                name: 'Social',
                data: [2549]
            }
        ]
    },
    growthRate          : {
        amount: 38.33,
        mrr   : 45332,
        series: [
            {
                name: 'Predicted',
                data: [
                    {
                        x: moment().subtract(12, 'months').day(1).toDate(),
                        y: 48.84
                    },
                    {
                        x: moment().subtract(12, 'months').day(4).toDate(),
                        y: 53.51
                    },
                    {
                        x: moment().subtract(12, 'months').day(7).toDate(),
                        y: 52.93
                    },
                    {
                        x: moment().subtract(12, 'months').day(10).toDate(),
                        y: 49.08
                    },
                    {
                        x: moment().subtract(12, 'months').day(13).toDate(),
                        y: 50.27
                    },
                    {
                        x: moment().subtract(12, 'months').day(16).toDate(),
                        y: 48.37
                    },
                    {
                        x: moment().subtract(12, 'months').day(19).toDate(),
                        y: 44.84
                    },
                    {
                        x: moment().subtract(12, 'months').day(22).toDate(),
                        y: 40.71
                    },
                    {
                        x: moment().subtract(12, 'months').day(25).toDate(),
                        y: 41.24
                    },
                    {
                        x: moment().subtract(12, 'months').day(28).toDate(),
                        y: 45.63
                    },
                    {
                        x: moment().subtract(12, 'months').day(30).toDate(),
                        y: 44.66
                    },
                    {
                        x: moment().subtract(11, 'months').day(1).toDate(),
                        y: 38.20
                    },
                    {
                        x: moment().subtract(11, 'months').day(4).toDate(),
                        y: 39.68
                    },
                    {
                        x: moment().subtract(11, 'months').day(7).toDate(),
                        y: 41.02
                    },
                    {
                        x: moment().subtract(11, 'months').day(10).toDate(),
                        y: 39.41
                    },
                    {
                        x: moment().subtract(11, 'months').day(13).toDate(),
                        y: 35.66
                    },
                    {
                        x: moment().subtract(11, 'months').day(16).toDate(),
                        y: 38.53
                    },
                    {
                        x: moment().subtract(11, 'months').day(19).toDate(),
                        y: 38.53
                    },
                    {
                        x: moment().subtract(11, 'months').day(22).toDate(),
                        y: 40.69
                    },
                    {
                        x: moment().subtract(11, 'months').day(25).toDate(),
                        y: 38.79
                    },
                    {
                        x: moment().subtract(11, 'months').day(28).toDate(),
                        y: 42.98
                    },
                    {
                        x: moment().subtract(11, 'months').day(30).toDate(),
                        y: 46.36
                    },
                    {
                        x: moment().subtract(10, 'months').day(1).toDate(),
                        y: 43.55
                    },
                    {
                        x: moment().subtract(10, 'months').day(4).toDate(),
                        y: 40.65
                    },
                    {
                        x: moment().subtract(10, 'months').day(7).toDate(),
                        y: 36.50
                    },
                    {
                        x: moment().subtract(10, 'months').day(10).toDate(),
                        y: 33.79
                    },
                    {
                        x: moment().subtract(10, 'months').day(13).toDate(),
                        y: 31.91
                    },
                    {
                        x: moment().subtract(10, 'months').day(16).toDate(),
                        y: 29.68
                    },
                    {
                        x: moment().subtract(10, 'months').day(19).toDate(),
                        y: 29.57
                    },
                    {
                        x: moment().subtract(10, 'months').day(22).toDate(),
                        y: 33.13
                    },
                    {
                        x: moment().subtract(10, 'months').day(25).toDate(),
                        y: 37.08
                    },
                    {
                        x: moment().subtract(10, 'months').day(28).toDate(),
                        y: 35.86
                    },
                    {
                        x: moment().subtract(10, 'months').day(30).toDate(),
                        y: 37.60
                    },
                    {
                        x: moment().subtract(9, 'months').day(1).toDate(),
                        y: 39.65
                    },
                    {
                        x: moment().subtract(9, 'months').day(4).toDate(),
                        y: 39.01
                    },
                    {
                        x: moment().subtract(9, 'months').day(7).toDate(),
                        y: 34.10
                    },
                    {
                        x: moment().subtract(9, 'months').day(10).toDate(),
                        y: 37.48
                    },
                    {
                        x: moment().subtract(9, 'months').day(13).toDate(),
                        y: 39.29
                    },
                    {
                        x: moment().subtract(9, 'months').day(16).toDate(),
                        y: 38.46
                    },
                    {
                        x: moment().subtract(9, 'months').day(19).toDate(),
                        y: 37.71
                    },
                    {
                        x: moment().subtract(9, 'months').day(22).toDate(),
                        y: 40.15
                    },
                    {
                        x: moment().subtract(9, 'months').day(25).toDate(),
                        y: 35.89
                    },
                    {
                        x: moment().subtract(9, 'months').day(28).toDate(),
                        y: 31.50
                    },
                    {
                        x: moment().subtract(9, 'months').day(30).toDate(),
                        y: 31.81
                    },
                    {
                        x: moment().subtract(8, 'months').day(1).toDate(),
                        y: 30.50
                    },
                    {
                        x: moment().subtract(8, 'months').day(4).toDate(),
                        y: 25.74
                    },
                    {
                        x: moment().subtract(8, 'months').day(7).toDate(),
                        y: 28.23
                    },
                    {
                        x: moment().subtract(8, 'months').day(10).toDate(),
                        y: 28.48
                    },
                    {
                        x: moment().subtract(8, 'months').day(13).toDate(),
                        y: 30.00
                    },
                    {
                        x: moment().subtract(8, 'months').day(16).toDate(),
                        y: 32.16
                    },
                    {
                        x: moment().subtract(8, 'months').day(19).toDate(),
                        y: 32.99
                    },
                    {
                        x: moment().subtract(8, 'months').day(22).toDate(),
                        y: 37.68
                    },
                    {
                        x: moment().subtract(8, 'months').day(25).toDate(),
                        y: 35.24
                    },
                    {
                        x: moment().subtract(8, 'months').day(28).toDate(),
                        y: 39.18
                    },
                    {
                        x: moment().subtract(8, 'months').day(30).toDate(),
                        y: 41.37
                    },
                    {
                        x: moment().subtract(7, 'months').day(1).toDate(),
                        y: 41.45
                    },
                    {
                        x: moment().subtract(7, 'months').day(4).toDate(),
                        y: 43.78
                    },
                    {
                        x: moment().subtract(7, 'months').day(7).toDate(),
                        y: 39.41
                    },
                    {
                        x: moment().subtract(7, 'months').day(10).toDate(),
                        y: 39.32
                    },
                    {
                        x: moment().subtract(7, 'months').day(13).toDate(),
                        y: 43.80
                    },
                    {
                        x: moment().subtract(7, 'months').day(16).toDate(),
                        y: 42.43
                    },
                    {
                        x: moment().subtract(7, 'months').day(19).toDate(),
                        y: 43.67
                    },
                    {
                        x: moment().subtract(7, 'months').day(22).toDate(),
                        y: 38.79
                    },
                    {
                        x: moment().subtract(7, 'months').day(25).toDate(),
                        y: 43.57
                    },
                    {
                        x: moment().subtract(7, 'months').day(28).toDate(),
                        y: 41.81
                    },
                    {
                        x: moment().subtract(7, 'months').day(30).toDate(),
                        y: 44.82
                    },
                    {
                        x: moment().subtract(6, 'months').day(1).toDate(),
                        y: 46.19
                    },
                    {
                        x: moment().subtract(6, 'months').day(4).toDate(),
                        y: 47.69
                    },
                    {
                        x: moment().subtract(6, 'months').day(7).toDate(),
                        y: 49.01
                    },
                    {
                        x: moment().subtract(6, 'months').day(10).toDate(),
                        y: 46.40
                    },
                    {
                        x: moment().subtract(6, 'months').day(13).toDate(),
                        y: 51.28
                    },
                    {
                        x: moment().subtract(6, 'months').day(16).toDate(),
                        y: 50.15
                    },
                    {
                        x: moment().subtract(6, 'months').day(19).toDate(),
                        y: 53.60
                    },
                    {
                        x: moment().subtract(6, 'months').day(22).toDate(),
                        y: 56.08
                    },
                    {
                        x: moment().subtract(6, 'months').day(25).toDate(),
                        y: 52.72
                    },
                    {
                        x: moment().subtract(6, 'months').day(28).toDate(),
                        y: 56.60
                    },
                    {
                        x: moment().subtract(6, 'months').day(30).toDate(),
                        y: 60.26
                    },
                    {
                        x: moment().subtract(5, 'months').day(1).toDate(),
                        y: 58.36
                    },
                    {
                        x: moment().subtract(5, 'months').day(4).toDate(),
                        y: 56.59
                    },
                    {
                        x: moment().subtract(5, 'months').day(7).toDate(),
                        y: 55.75
                    },
                    {
                        x: moment().subtract(5, 'months').day(10).toDate(),
                        y: 54.74
                    },
                    {
                        x: moment().subtract(5, 'months').day(13).toDate(),
                        y: 54.27
                    },
                    {
                        x: moment().subtract(5, 'months').day(16).toDate(),
                        y: 58.65
                    },
                    {
                        x: moment().subtract(5, 'months').day(19).toDate(),
                        y: 57.00
                    },
                    {
                        x: moment().subtract(5, 'months').day(22).toDate(),
                        y: 60.52
                    },
                    {
                        x: moment().subtract(5, 'months').day(25).toDate(),
                        y: 57.60
                    },
                    {
                        x: moment().subtract(5, 'months').day(28).toDate(),
                        y: 56.48
                    },
                    {
                        x: moment().subtract(5, 'months').day(30).toDate(),
                        y: 55.10
                    },
                    {
                        x: moment().subtract(4, 'months').day(1).toDate(),
                        y: 54.35
                    },
                    {
                        x: moment().subtract(4, 'months').day(4).toDate(),
                        y: 52.39
                    },
                    {
                        x: moment().subtract(4, 'months').day(7).toDate(),
                        y: 54.52
                    },
                    {
                        x: moment().subtract(4, 'months').day(10).toDate(),
                        y: 54.16
                    },
                    {
                        x: moment().subtract(4, 'months').day(13).toDate(),
                        y: 51.95
                    },
                    {
                        x: moment().subtract(4, 'months').day(16).toDate(),
                        y: 51.19
                    },
                    {
                        x: moment().subtract(4, 'months').day(19).toDate(),
                        y: 46.35
                    },
                    {
                        x: moment().subtract(4, 'months').day(22).toDate(),
                        y: 48.33
                    },
                    {
                        x: moment().subtract(4, 'months').day(25).toDate(),
                        y: 45.84
                    },
                    {
                        x: moment().subtract(4, 'months').day(28).toDate(),
                        y: 48.22
                    },
                    {
                        x: moment().subtract(4, 'months').day(30).toDate(),
                        y: 43.30
                    },
                    {
                        x: moment().subtract(3, 'months').day(1).toDate(),
                        y: 45.82
                    },
                    {
                        x: moment().subtract(3, 'months').day(4).toDate(),
                        y: 43.48
                    },
                    {
                        x: moment().subtract(3, 'months').day(7).toDate(),
                        y: 41.32
                    },
                    {
                        x: moment().subtract(3, 'months').day(10).toDate(),
                        y: 40.99
                    },
                    {
                        x: moment().subtract(3, 'months').day(13).toDate(),
                        y: 38.49
                    },
                    {
                        x: moment().subtract(3, 'months').day(16).toDate(),
                        y: 40.10
                    },
                    {
                        x: moment().subtract(3, 'months').day(19).toDate(),
                        y: 44.86
                    },
                    {
                        x: moment().subtract(3, 'months').day(22).toDate(),
                        y: 44.03
                    },
                    {
                        x: moment().subtract(3, 'months').day(25).toDate(),
                        y: 41.41
                    },
                    {
                        x: moment().subtract(3, 'months').day(28).toDate(),
                        y: 37.80
                    },
                    {
                        x: moment().subtract(3, 'months').day(30).toDate(),
                        y: 39.29
                    },
                    {
                        x: moment().subtract(2, 'months').day(1).toDate(),
                        y: 35.24
                    },
                    {
                        x: moment().subtract(2, 'months').day(4).toDate(),
                        y: 32.12
                    },
                    {
                        x: moment().subtract(2, 'months').day(7).toDate(),
                        y: 35.68
                    },
                    {
                        x: moment().subtract(2, 'months').day(10).toDate(),
                        y: 38.00
                    },
                    {
                        x: moment().subtract(2, 'months').day(13).toDate(),
                        y: 37.96
                    },
                    {
                        x: moment().subtract(2, 'months').day(16).toDate(),
                        y: 38.70
                    },
                    {
                        x: moment().subtract(2, 'months').day(19).toDate(),
                        y: 37.45
                    },
                    {
                        x: moment().subtract(2, 'months').day(22).toDate(),
                        y: 37.51
                    },
                    {
                        x: moment().subtract(2, 'months').day(25).toDate(),
                        y: 33.10
                    },
                    {
                        x: moment().subtract(2, 'months').day(28).toDate(),
                        y: 35.09
                    },
                    {
                        x: moment().subtract(2, 'months').day(30).toDate(),
                        y: 33.11
                    },
                    {
                        x: moment().subtract(1, 'months').day(1).toDate(),
                        y: 31.87
                    },
                    {
                        x: moment().subtract(1, 'months').day(4).toDate(),
                        y: 29.18
                    },
                    {
                        x: moment().subtract(1, 'months').day(7).toDate(),
                        y: 31.91
                    },
                    {
                        x: moment().subtract(1, 'months').day(10).toDate(),
                        y: 34.37
                    },
                    {
                        x: moment().subtract(1, 'months').day(13).toDate(),
                        y: 32.91
                    },
                    {
                        x: moment().subtract(1, 'months').day(16).toDate(),
                        y: 33.17
                    },
                    {
                        x: moment().subtract(1, 'months').day(19).toDate(),
                        y: 37.16
                    },
                    {
                        x: moment().subtract(1, 'months').day(22).toDate(),
                        y: 32.60
                    },
                    {
                        x: moment().subtract(1, 'months').day(25).toDate(),
                        y: 36.94
                    },
                    {
                        x: moment().subtract(1, 'months').day(28).toDate(),
                        y: 35.98
                    },
                    {
                        x: moment().subtract(1, 'months').day(30).toDate(),
                        y: 38.12
                    }
                ]
            },
            {
                name: 'Actual',
                data: [
                    {
                        x: moment().subtract(12, 'months').day(1).toDate(),
                        y: 20.21
                    },
                    {
                        x: moment().subtract(12, 'months').day(4).toDate(),
                        y: 17.49
                    },
                    {
                        x: moment().subtract(12, 'months').day(7).toDate(),
                        y: 16.54
                    },
                    {
                        x: moment().subtract(12, 'months').day(10).toDate(),
                        y: 19.00
                    },
                    {
                        x: moment().subtract(12, 'months').day(13).toDate(),
                        y: 16.47
                    },
                    {
                        x: moment().subtract(12, 'months').day(16).toDate(),
                        y: 13.15
                    },
                    {
                        x: moment().subtract(12, 'months').day(19).toDate(),
                        y: 18.07
                    },
                    {
                        x: moment().subtract(12, 'months').day(22).toDate(),
                        y: 17.93
                    },
                    {
                        x: moment().subtract(12, 'months').day(25).toDate(),
                        y: 18.92
                    },
                    {
                        x: moment().subtract(12, 'months').day(28).toDate(),
                        y: 18.46
                    },
                    {
                        x: moment().subtract(12, 'months').day(30).toDate(),
                        y: 19.66
                    },
                    {
                        x: moment().subtract(11, 'months').day(1).toDate(),
                        y: 18.04
                    },
                    {
                        x: moment().subtract(11, 'months').day(4).toDate(),
                        y: 17.78
                    },
                    {
                        x: moment().subtract(11, 'months').day(7).toDate(),
                        y: 20.15
                    },
                    {
                        x: moment().subtract(11, 'months').day(10).toDate(),
                        y: 18.92
                    },
                    {
                        x: moment().subtract(11, 'months').day(13).toDate(),
                        y: 17.08
                    },
                    {
                        x: moment().subtract(11, 'months').day(16).toDate(),
                        y: 17.11
                    },
                    {
                        x: moment().subtract(11, 'months').day(19).toDate(),
                        y: 15.70
                    },
                    {
                        x: moment().subtract(11, 'months').day(22).toDate(),
                        y: 15.07
                    },
                    {
                        x: moment().subtract(11, 'months').day(25).toDate(),
                        y: 14.51
                    },
                    {
                        x: moment().subtract(11, 'months').day(28).toDate(),
                        y: 15.22
                    },
                    {
                        x: moment().subtract(11, 'months').day(30).toDate(),
                        y: 18.01
                    },
                    {
                        x: moment().subtract(10, 'months').day(1).toDate(),
                        y: 19.77
                    },
                    {
                        x: moment().subtract(10, 'months').day(4).toDate(),
                        y: 23.67
                    },
                    {
                        x: moment().subtract(10, 'months').day(7).toDate(),
                        y: 27.98
                    },
                    {
                        x: moment().subtract(10, 'months').day(10).toDate(),
                        y: 30.80
                    },
                    {
                        x: moment().subtract(10, 'months').day(13).toDate(),
                        y: 28.56
                    },
                    {
                        x: moment().subtract(10, 'months').day(16).toDate(),
                        y: 27.45
                    },
                    {
                        x: moment().subtract(10, 'months').day(19).toDate(),
                        y: 27.50
                    },
                    {
                        x: moment().subtract(10, 'months').day(22).toDate(),
                        y: 27.28
                    },
                    {
                        x: moment().subtract(10, 'months').day(25).toDate(),
                        y: 24.36
                    },
                    {
                        x: moment().subtract(10, 'months').day(28).toDate(),
                        y: 22.89
                    },
                    {
                        x: moment().subtract(10, 'months').day(30).toDate(),
                        y: 26.57
                    },
                    {
                        x: moment().subtract(9, 'months').day(1).toDate(),
                        y: 28.04
                    },
                    {
                        x: moment().subtract(9, 'months').day(4).toDate(),
                        y: 27.77
                    },
                    {
                        x: moment().subtract(9, 'months').day(7).toDate(),
                        y: 30.24
                    },
                    {
                        x: moment().subtract(9, 'months').day(10).toDate(),
                        y: 26.57
                    },
                    {
                        x: moment().subtract(9, 'months').day(13).toDate(),
                        y: 22.18
                    },
                    {
                        x: moment().subtract(9, 'months').day(16).toDate(),
                        y: 19.64
                    },
                    {
                        x: moment().subtract(9, 'months').day(19).toDate(),
                        y: 16.74
                    },
                    {
                        x: moment().subtract(9, 'months').day(22).toDate(),
                        y: 17.21
                    },
                    {
                        x: moment().subtract(9, 'months').day(25).toDate(),
                        y: 20.05
                    },
                    {
                        x: moment().subtract(9, 'months').day(28).toDate(),
                        y: 16.13
                    },
                    {
                        x: moment().subtract(9, 'months').day(30).toDate(),
                        y: 12.95
                    },
                    {
                        x: moment().subtract(8, 'months').day(1).toDate(),
                        y: 10.71
                    },
                    {
                        x: moment().subtract(8, 'months').day(4).toDate(),
                        y: 7.99
                    },
                    {
                        x: moment().subtract(8, 'months').day(7).toDate(),
                        y: 11.33
                    },
                    {
                        x: moment().subtract(8, 'months').day(10).toDate(),
                        y: 15.36
                    },
                    {
                        x: moment().subtract(8, 'months').day(13).toDate(),
                        y: 20.16
                    },
                    {
                        x: moment().subtract(8, 'months').day(16).toDate(),
                        y: 22.56
                    },
                    {
                        x: moment().subtract(8, 'months').day(19).toDate(),
                        y: 19.34
                    },
                    {
                        x: moment().subtract(8, 'months').day(22).toDate(),
                        y: 18.32
                    },
                    {
                        x: moment().subtract(8, 'months').day(25).toDate(),
                        y: 20.75
                    },
                    {
                        x: moment().subtract(8, 'months').day(28).toDate(),
                        y: 17.09
                    },
                    {
                        x: moment().subtract(8, 'months').day(30).toDate(),
                        y: 19.32
                    },
                    {
                        x: moment().subtract(7, 'months').day(1).toDate(),
                        y: 18.31
                    },
                    {
                        x: moment().subtract(7, 'months').day(4).toDate(),
                        y: 14.34
                    },
                    {
                        x: moment().subtract(7, 'months').day(7).toDate(),
                        y: 9.93
                    },
                    {
                        x: moment().subtract(7, 'months').day(10).toDate(),
                        y: 10.64
                    },
                    {
                        x: moment().subtract(7, 'months').day(13).toDate(),
                        y: 6.18
                    },
                    {
                        x: moment().subtract(7, 'months').day(16).toDate(),
                        y: 10.32
                    },
                    {
                        x: moment().subtract(7, 'months').day(19).toDate(),
                        y: 12.80
                    },
                    {
                        x: moment().subtract(7, 'months').day(22).toDate(),
                        y: 13.44
                    },
                    {
                        x: moment().subtract(7, 'months').day(25).toDate(),
                        y: 18.35
                    },
                    {
                        x: moment().subtract(7, 'months').day(28).toDate(),
                        y: 22.87
                    },
                    {
                        x: moment().subtract(7, 'months').day(30).toDate(),
                        y: 22.26
                    },
                    {
                        x: moment().subtract(6, 'months').day(1).toDate(),
                        y: 26.92
                    },
                    {
                        x: moment().subtract(6, 'months').day(4).toDate(),
                        y: 22.50
                    },
                    {
                        x: moment().subtract(6, 'months').day(7).toDate(),
                        y: 18.14
                    },
                    {
                        x: moment().subtract(6, 'months').day(10).toDate(),
                        y: 19.06
                    },
                    {
                        x: moment().subtract(6, 'months').day(13).toDate(),
                        y: 19.73
                    },
                    {
                        x: moment().subtract(6, 'months').day(16).toDate(),
                        y: 18.82
                    },
                    {
                        x: moment().subtract(6, 'months').day(19).toDate(),
                        y: 23.33
                    },
                    {
                        x: moment().subtract(6, 'months').day(22).toDate(),
                        y: 20.48
                    },
                    {
                        x: moment().subtract(6, 'months').day(25).toDate(),
                        y: 25.47
                    },
                    {
                        x: moment().subtract(6, 'months').day(28).toDate(),
                        y: 28.84
                    },
                    {
                        x: moment().subtract(6, 'months').day(30).toDate(),
                        y: 29.09
                    },
                    {
                        x: moment().subtract(5, 'months').day(1).toDate(),
                        y: 27.71
                    },
                    {
                        x: moment().subtract(5, 'months').day(4).toDate(),
                        y: 25.22
                    },
                    {
                        x: moment().subtract(5, 'months').day(7).toDate(),
                        y: 25.43
                    },
                    {
                        x: moment().subtract(5, 'months').day(10).toDate(),
                        y: 24.13
                    },
                    {
                        x: moment().subtract(5, 'months').day(13).toDate(),
                        y: 20.02
                    },
                    {
                        x: moment().subtract(5, 'months').day(16).toDate(),
                        y: 18.38
                    },
                    {
                        x: moment().subtract(5, 'months').day(19).toDate(),
                        y: 18.30
                    },
                    {
                        x: moment().subtract(5, 'months').day(22).toDate(),
                        y: 18.72
                    },
                    {
                        x: moment().subtract(5, 'months').day(25).toDate(),
                        y: 22.46
                    },
                    {
                        x: moment().subtract(5, 'months').day(28).toDate(),
                        y: 21.71
                    },
                    {
                        x: moment().subtract(5, 'months').day(30).toDate(),
                        y: 26.48
                    },
                    {
                        x: moment().subtract(4, 'months').day(1).toDate(),
                        y: 29.88
                    },
                    {
                        x: moment().subtract(4, 'months').day(4).toDate(),
                        y: 26.94
                    },
                    {
                        x: moment().subtract(4, 'months').day(7).toDate(),
                        y: 28.06
                    },
                    {
                        x: moment().subtract(4, 'months').day(10).toDate(),
                        y: 30.40
                    },
                    {
                        x: moment().subtract(4, 'months').day(13).toDate(),
                        y: 28.98
                    },
                    {
                        x: moment().subtract(4, 'months').day(16).toDate(),
                        y: 30.13
                    },
                    {
                        x: moment().subtract(4, 'months').day(19).toDate(),
                        y: 27.60
                    },
                    {
                        x: moment().subtract(4, 'months').day(22).toDate(),
                        y: 30.21
                    },
                    {
                        x: moment().subtract(4, 'months').day(25).toDate(),
                        y: 26.88
                    },
                    {
                        x: moment().subtract(4, 'months').day(28).toDate(),
                        y: 25.72
                    },
                    {
                        x: moment().subtract(4, 'months').day(30).toDate(),
                        y: 28.27
                    },
                    {
                        x: moment().subtract(3, 'months').day(1).toDate(),
                        y: 27.89
                    },
                    {
                        x: moment().subtract(3, 'months').day(4).toDate(),
                        y: 30.69
                    },
                    {
                        x: moment().subtract(3, 'months').day(7).toDate(),
                        y: 31.42
                    },
                    {
                        x: moment().subtract(3, 'months').day(10).toDate(),
                        y: 36.14
                    },
                    {
                        x: moment().subtract(3, 'months').day(13).toDate(),
                        y: 32.02
                    },
                    {
                        x: moment().subtract(3, 'months').day(16).toDate(),
                        y: 27.30
                    },
                    {
                        x: moment().subtract(3, 'months').day(19).toDate(),
                        y: 29.51
                    },
                    {
                        x: moment().subtract(3, 'months').day(22).toDate(),
                        y: 32.67
                    },
                    {
                        x: moment().subtract(3, 'months').day(25).toDate(),
                        y: 28.82
                    },
                    {
                        x: moment().subtract(3, 'months').day(28).toDate(),
                        y: 28.85
                    },
                    {
                        x: moment().subtract(3, 'months').day(30).toDate(),
                        y: 29.63
                    },
                    {
                        x: moment().subtract(2, 'months').day(1).toDate(),
                        y: 29.15
                    },
                    {
                        x: moment().subtract(2, 'months').day(4).toDate(),
                        y: 27.90
                    },
                    {
                        x: moment().subtract(2, 'months').day(7).toDate(),
                        y: 30.71
                    },
                    {
                        x: moment().subtract(2, 'months').day(10).toDate(),
                        y: 28.02
                    },
                    {
                        x: moment().subtract(2, 'months').day(13).toDate(),
                        y: 23.82
                    },
                    {
                        x: moment().subtract(2, 'months').day(16).toDate(),
                        y: 18.83
                    },
                    {
                        x: moment().subtract(2, 'months').day(19).toDate(),
                        y: 14.48
                    },
                    {
                        x: moment().subtract(2, 'months').day(22).toDate(),
                        y: 11.76
                    },
                    {
                        x: moment().subtract(2, 'months').day(25).toDate(),
                        y: 12.75
                    },
                    {
                        x: moment().subtract(2, 'months').day(28).toDate(),
                        y: 11.36
                    },
                    {
                        x: moment().subtract(2, 'months').day(30).toDate(),
                        y: 14.21
                    },
                    {
                        x: moment().subtract(1, 'months').day(1).toDate(),
                        y: 11.60
                    },
                    {
                        x: moment().subtract(1, 'months').day(4).toDate(),
                        y: 15.24
                    },
                    {
                        x: moment().subtract(1, 'months').day(7).toDate(),
                        y: 13.05
                    },
                    {
                        x: moment().subtract(1, 'months').day(10).toDate(),
                        y: 17.25
                    },
                    {
                        x: moment().subtract(1, 'months').day(13).toDate(),
                        y: 18.50
                    },
                    {
                        x: moment().subtract(1, 'months').day(16).toDate(),
                        y: 23.04
                    },
                    {
                        x: moment().subtract(1, 'months').day(19).toDate(),
                        y: 21.87
                    },
                    {
                        x: moment().subtract(1, 'months').day(22).toDate(),
                        y: 25.97
                    },
                    {
                        x: moment().subtract(1, 'months').day(25).toDate(),
                        y: 22.46
                    },
                    {
                        x: moment().subtract(1, 'months').day(28).toDate(),
                        y: 17.67
                    },
                    {
                        x: moment().subtract(1, 'months').day(30).toDate(),
                        y: 14.80
                    }
                ]
            }
        ]
    },
    devices             : {
        amount: 46085,
        series: [
            {
                name: 'Desktop',
                data: [26939]
            },
            {
                name: 'Mobile',
                data: [14102]
            },
            {
                name: 'Tablet',
                data: [4483]
            },
            {
                name: 'Others',
                data: [561]
            }
        ]
    },
    gender              : {
        series: [55, 45],
        labels: [
            'Male',
            'Female'
        ]
    },
    language            : {
        series: [75, 25],
        labels: [
            'Non-English',
            'English'
        ]
    },
    lastPayment         : {
        status  : 'paid',
        date    : moment().startOf('day').subtract(15, 'days').format('LL'),
        products: 27221.21,
        shipping: 7331.94,
        total   : 34553.15
    },
    nextPayment         : {
        status  : 'pending',
        date    : moment().startOf('day').subtract(15, 'days').add(1, 'month').format('LL'),
        products: 39819.41,
        shipping: 9112.51,
        total   : 48931.92
    },
    newVsReturning      : {
        series: [80, 20],
        labels: [
            'New',
            'Returning'
        ]
    },
    purchases           : {
        amount: 17663,
        data  : [4541, 4677, 4322, 4123],
        labels: [
            moment().subtract(31, 'days').format('DD MMM') + ' - ' + moment().subtract(24, 'days').format('DD MMM'),
            moment().subtract(23, 'days').format('DD MMM') + ' - ' + moment().subtract(16, 'days').format('DD MMM'),
            moment().subtract(15, 'days').format('DD MMM') + ' - ' + moment().subtract(8, 'days').format('DD MMM'),
            moment().subtract(7, 'days').format('DD MMM') + ' - ' + moment().format('DD MMM')
        ]
    },
    recentOrders        : [
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
    ],
    recentOrdersStats   : {
        todaysRevenue: 11763.34,
        taxes        : 789.22,
        todaysProfit : 10974.12
    },
    refunds             : {
        amount: 4523.11,
        data  : [
            20.21,
            17.49,
            16.54,
            19.00,
            16.47,
            13.15,
            18.07,
            17.93,
            18.92,
            18.46,
            19.66,
            18.04,
            17.78,
            20.15,
            18.92,
            17.08,
            17.11,
            15.70,
            15.07,
            14.51,
            15.22,
            18.01,
            19.77,
            23.67,
            27.98,
            30.80,
            28.56,
            27.45,
            27.50,
            27.28,
            24.36,
            22.89,
            26.57,
            28.04,
            27.77,
            30.24,
            26.57,
            22.18,
            19.64,
            16.74,
            17.21,
            20.05,
            16.13,
            12.95,
            10.71,
            7.99,
            11.33,
            15.36,
            20.16,
            22.56,
            19.34,
            18.32,
            20.75,
            17.09,
            19.32,
            18.31,
            14.34,
            9.93,
            10.64,
            6.18,
            10.32,
            12.80,
            13.44,
            18.35,
            22.87,
            22.26,
            26.92,
            22.50,
            18.14,
            19.06,
            19.73,
            18.82,
            23.33,
            20.48,
            25.47,
            28.84,
            29.09
        ]
    },
    totalVisits         : {
        amount: 62083,
        data  : [15521, 15519, 15522, 15521],
        labels: [
            moment().subtract(31, 'days').format('DD MMM') + ' - ' + moment().subtract(24, 'days').format('DD MMM'),
            moment().subtract(23, 'days').format('DD MMM') + ' - ' + moment().subtract(16, 'days').format('DD MMM'),
            moment().subtract(15, 'days').format('DD MMM') + ' - ' + moment().subtract(8, 'days').format('DD MMM'),
            moment().subtract(7, 'days').format('DD MMM') + ' - ' + moment().format('DD MMM')
        ]
    },
    uniquePurchases     : {
        amount: 2716,
        data  : [
            48.84,
            53.51,
            52.93,
            49.08,
            50.27,
            48.37,
            44.84,
            40.71,
            41.24,
            45.63,
            44.66,
            38.20,
            39.68,
            41.02,
            39.41,
            35.66,
            38.53,
            38.53,
            40.69,
            38.79,
            42.98,
            46.36,
            43.55,
            40.65,
            36.50,
            33.79,
            31.91,
            29.68,
            29.57,
            33.13,
            37.08,
            35.86,
            37.60,
            39.65,
            39.01,
            34.10,
            37.48,
            39.29,
            38.46,
            37.71,
            40.15,
            35.89,
            31.50,
            31.81,
            30.50,
            25.74,
            28.23,
            28.48,
            30.00,
            32.16,
            32.99,
            37.68,
            35.24,
            39.18,
            41.37,
            41.45,
            43.78,
            39.41,
            39.32,
            43.80,
            42.43,
            43.67,
            38.79,
            43.57,
            41.81,
            44.82,
            46.19,
            47.69,
            49.01,
            46.40,
            51.28,
            50.15,
            53.60,
            56.08,
            52.72,
            56.60,
            60.26
        ]
    },
    uniqueVisitors      : {
        amount: 46085,
        data  : [11577, 11441, 11544, 11523],
        labels: [
            moment().subtract(31, 'days').format('DD MMM') + ' - ' + moment().subtract(24, 'days').format('DD MMM'),
            moment().subtract(23, 'days').format('DD MMM') + ' - ' + moment().subtract(16, 'days').format('DD MMM'),
            moment().subtract(15, 'days').format('DD MMM') + ' - ' + moment().subtract(8, 'days').format('DD MMM'),
            moment().subtract(7, 'days').format('DD MMM') + ' - ' + moment().format('DD MMM')
        ]
    }
};
