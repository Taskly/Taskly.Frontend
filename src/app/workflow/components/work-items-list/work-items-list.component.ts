import { Component, OnInit, Input } from '@angular/core';

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
    
    public displayedColumns: string[] = ['title', 'status'];

    public ngOnInit(): void {
    }

    public onWorkItemClick(id: string) {
        console.log(id);
    }
}
