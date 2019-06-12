export interface Tag
{
    id: string;
    title: string;
}

export interface Task
{
    id: string;
    type: 'task' | 'section';
    title: string;
    notes?: string | null;
    completed: boolean;
    dueDate: string | null;
    priority: 1 | 2 | 3;
    tags: string[];
    order: number;
}
