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
    title: string;
    description: string;
    start?: number | Date | null;
    end?: number | Date | null;
    allDay: boolean;
}
