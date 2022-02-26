export interface TaskCardProps {
    category: string;
    tags: string[];
    description: string;
    date: string;
    comments: number;
    files: number;
    avatar: string;
    id: string;
    isDone: boolean;
}
export enum AlertTypes {
    warning = 0,
    success,
    error,
    info,
}
