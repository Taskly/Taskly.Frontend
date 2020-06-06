import { Component, OnInit, Input } from '@angular/core';
import { WorkItem } from 'src/app/model/work-item';

@Component({
    selector: 'app-work-item-details',
    templateUrl: './work-item-details.component.html',
    styleUrls: ['./work-item-details.component.scss']
})
export class WorkItemDetailsComponent implements OnInit {
    constructor() {
    }

    @Input()
    public workItem: WorkItem;

    public ngOnInit(): void {
    }
}
