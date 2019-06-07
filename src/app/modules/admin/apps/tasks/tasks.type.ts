export interface Tag
{
    id: string;
    title: string;
}

export interface SubTask
{
    id: string;
    title: string;
    completed: boolean;
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
    subTasks: SubTask[];
    order: number;

    loadedCompletely?: boolean;
}

export interface TasksCount
{
    completed: number;
    notCompleted: number;
}
