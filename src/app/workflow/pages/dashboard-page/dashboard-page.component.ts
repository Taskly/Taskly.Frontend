import { Component, OnInit } from '@angular/core';

import { WorkflowClient } from 'src/app/common/workflow-client';
import { Project } from 'src/app/model/project';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
    constructor(
        private workflowClient: WorkflowClient) {
    }

    public projects: Project[];

    public async ngOnInit(): Promise<void> {
        this.projects = await this.workflowClient.getAllProjects();
    }
}
