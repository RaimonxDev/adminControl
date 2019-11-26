export interface AsmNotification
{
    id: string;
    icon?: string;
    image?: string;
    title?: string;
    description?: string;
    time: string;
    link?: string | string[];
    useRouter?: boolean;
    read: boolean;
}
