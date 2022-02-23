export interface TaskCardProps {
    category: string;
    description: string;
    date: string;
    comments: number;
    files: number;
    avatar: string;
}
export enum AlertTypes {
    warning = 0,
    success,
    error,
    info,
}
