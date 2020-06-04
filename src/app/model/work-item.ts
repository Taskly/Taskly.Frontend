import { WorkItemStatus } from './work-item-status';

export interface WorkItem {
    id: string;
    title: string;
    description: string;
    status: WorkItemStatus;
}
