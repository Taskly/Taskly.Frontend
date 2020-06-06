import { Component, OnInit, Input } from '@angular/core';

import { WorkflowClient } from 'src/app/common/workflow-client';
import { Project } from 'src/app/model/project';

@Component({
    selector: 'app-projects-list',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
    constructor() {
    }

    @Input()
    public projects: Project[];

    public ngOnInit(): void {
    }
}
