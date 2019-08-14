export interface Calendar
{
    id: string;
    title: string;
    color: string;
}

export interface CalendarEvent
{
    calendar: Calendar;
    id: string;
    calendarId: string;
    ruleId: string | null;
    title: string;
    description: string;
    start?: string | null;
    end?: string | null;
    allDay: boolean;
}
