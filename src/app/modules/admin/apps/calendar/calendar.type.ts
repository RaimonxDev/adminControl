export interface Calendar
{
    id: string;
    title: string;
    color: string;
    visible: boolean;
}

export interface CalendarEvent
{
    id: string;
    calendarId: string;
    ruleId: string | null;
    title: string;
    description: string;
    start?: string | null;
    end?: string | null;
    allDay: boolean;
    classNames: string[];
    editable: boolean;
}

export interface CalendarSettings
{
    dateFormat: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY-MM-DD' | 'll';
    timeFormat: '12' | '24';
    startWeekOn: 6 | 0 | 1;
}
