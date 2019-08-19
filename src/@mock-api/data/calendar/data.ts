import * as moment from 'moment';

/* tslint:disable:max-line-length */
export const calendars = [
    {
        id     : '1a470c8e-40ed-4c2d-b590-a4f1f6ead6cc',
        title  : 'Personal',
        color  : '#4299E1',
        visible: true
    },
    {
        id     : '5dab5f7b-757a-4467-ace1-305fe07b11fe',
        title  : 'Work',
        color  : '#9F7AEA',
        visible: false
    },
    {
        id     : '09887870-f85a-40eb-8171-1b13d7a7f529',
        title  : 'Appointments',
        color  : '#ED64A6',
        visible: true
    }
];
export const events = [
    // Personal
    {
        id         : '3be50686-e3a1-4f4b-aa4d-5cb8517ba4e4',
        calendarId : '1a470c8e-40ed-4c2d-b590-a4f1f6ead6cc',
        ruleId     : null,
        title      : 'Portfolio Design',
        description: '',
        start      : moment().hour(9).minute(0).second(0).toISOString(), // Today 09:00
        end        : moment().add(1, 'day').hour(14).minute(0).second(0).toISOString(), // Tomorrow 14:00
        allDay     : false,
        classNames : [],
        editable   : true
    },
    {
        id         : '660f0dcd-48f8-4266-a89a-8ee0789c074a',
        calendarId : '1a470c8e-40ed-4c2d-b590-a4f1f6ead6cc',
        ruleId     : null,
        title      : 'Dinner with Mom',
        description: '',
        start      : moment().month(5).date(10).hour(18).minute(0).second(0).toISOString(), // 10th of the current month at 18:00
        end        : moment().month(5).date(10).hour(20).minute(0).second(0).toISOString(), // 10th of the current month at 20:00
        allDay     : false,
        classNames : [],
        editable   : true
    },
    {
        id         : '7471b840-5efb-45da-9092-a0f04ee5617b',
        calendarId : '1a470c8e-40ed-4c2d-b590-a4f1f6ead6cc',
        ruleId     : null,
        title      : 'Lunch with Becky',
        description: '',
        start      : moment().date(21).hour(12).minute(0).second(0).toISOString(), // 21st of the current month at noon
        end        : moment().date(21).hour(14).minute(0).second(0).toISOString(), // 21st of the current month at 14:00
        allDay     : false,
        classNames : [],
        editable   : true
    },
    // Work
    {
        id         : '0e848e4a-0333-42e3-b223-0209c4b58a3b',
        calendarId : '5dab5f7b-757a-4467-ace1-305fe07b11fe',
        ruleId     : null,
        title      : 'Design Review',
        description: '',
        start      : moment().date(19).hour(15).minute(0).second(0).toISOString(), // 19th of the current month at 15:00
        end        : moment().date(19).hour(17).minute(30).second(0).toISOString(), // 19th of the current month at 17:30
        allDay     : false,
        classNames : [],
        editable   : true
    },
    {
        id         : 'f619eb76-c21b-4bb0-aeff-41e765cae290',
        calendarId : '5dab5f7b-757a-4467-ace1-305fe07b11fe',
        ruleId     : null,
        title      : 'Consulting',
        description: '',
        start      : moment().date(8).hour(11).minute(30).second(0).toISOString(), // 8th of the current month at 11:30
        end        : moment().date(8).hour(12).minute(45).second(0).toISOString(), // 8th of the current month at 12:45
        allDay     : false,
        classNames : [],
        editable   : true
    }
];
export const recurringEvents = [
    // Personal
    {
        id             : 'c3e6c110-9b67-4e6b-a2ab-3046abf1b074',
        calendarId     : '1a470c8e-40ed-4c2d-b590-a4f1f6ead6cc',
        title          : 'Mom\'s Birthday',
        description    : '',
        allDay         : true,
        rrule          : {
            // Every (current month) on the 8th
            freq      : 'YEARLY',
            dtstart   : moment().startOf('year').toISOString(),
            bymonth   : moment().add(1, 'day').toISOString(),
            bymonthday: 8
        },
        duration       : null,
        classNames     : [],
        editable       : true,
        generatedEvents: {
            start: null,
            end  : null
        }
    },

    // Appointments
    {
        id             : 'd2220429-9214-4c4b-9da6-f8da2fbfd507',
        calendarId     : '09887870-f85a-40eb-8171-1b13d7a7f529',
        title          : 'Doctor\'s Visit',
        description    : '',
        allDay         : false,
        rrule          : {
            // Every month on the first Tuesday
            freq     : 'MONTHLY',
            dtstart  : moment().startOf('year').toISOString(),
            byweekday: 'TU',
            bysetpos : '1',
            // 10:00am
            byhour   : 10,
            byminute : 0,
            bysecond : 0
        },
        duration       : '01:30', // 1 hour 30 minutes
        classNames     : [],
        editable       : true,
        generatedEvents: {
            start: null,
            end  : null
        }
    },
    {
        id             : '4d88418c-cbdf-4f03-89e1-e3dca14a9e92',
        calendarId     : '09887870-f85a-40eb-8171-1b13d7a7f529',
        title          : 'Therapy Session',
        description    : '',
        allDay         : false,
        rrule          : {
            // Every 2 weeks on Saturday
            freq     : 'WEEKLY',
            dtstart  : moment().startOf('year').toISOString(),
            byweekday: 'SA',
            interval : 2,
            // 1:00pm
            byhour   : 13,
            byminute : 0,
            bysecond : 0
        },
        duration       : '02:00', // 2 hours
        classNames     : [],
        editable       : true,
        generatedEvents: {
            start: null,
            end  : null
        }
    },

    // Work
    {
        id             : 'd97ea3ca-0e5a-4b86-a4fa-5b80a261081e',
        calendarId     : '5dab5f7b-757a-4467-ace1-305fe07b11fe',
        title          : 'Meeting',
        description    : '',
        allDay         : false,
        rrule          : {
            // Every 2 weeks on Friday
            freq     : 'WEEKLY',
            dtstart  : moment().startOf('year').toISOString(),
            byweekday: 'FR',
            interval : 2,
            // 09:00am
            byhour   : 9,
            byminute : 0,
            bysecond : 0
        },
        duration       : '02:30', // 2 hours 30 minutes
        classNames     : [],
        editable       : true,
        generatedEvents: {
            start: null,
            end  : null
        }
    }
];
export const settings = {
    dateFormat : 'DD/MM/YYYY', // 31/12/2019
    timeFormat : '24', // 24-hour format
    startWeekOn: 1 // Monday
};
