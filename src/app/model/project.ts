import { WorkItem } from './work-item';

export interface Project {
    id: string;
    title: string;
    description: string;
    workItems: WorkItem[];
}
