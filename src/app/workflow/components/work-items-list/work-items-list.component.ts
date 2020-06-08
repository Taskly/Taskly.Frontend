import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { WorkItem } from 'src/app/model/work-item';

@Component({
    selector: 'app-work-items-list',
    templateUrl: './work-items-list.component.html',
    styleUrls: ['./work-items-list.component.scss']
})
export class WorkItemsListComponent implements OnInit {
    constructor() {
    }

    @Input()
    public workItems: WorkItem[];

    @Output()
    public workItemClick = new EventEmitter<WorkItem>();
    
    public displayedColumns: string[] = ['title', 'status', 'created'];

    public ngOnInit(): void {
    }

    public onWorkItemClick(workItem: WorkItem) {
        this.workItemClick.emit(workItem)
    }
}
