import { Component, OnInit } from '@angular/core';

import { WorkflowClient } from 'src/app/common/workflow-client';
import { Project } from 'src/app/model/project';

@Component({
    selector: 'app-projects-list',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
    constructor(workflowClient: WorkflowClient) {
        this.workflowClient = workflowClient;
    }

    public projects: Array<Project>

    public async ngOnInit(): Promise<void> {
        const projectsList = await this.workflowClient.getAllProjects();
        this.projects = projectsList.items;
    }

    private readonly workflowClient: WorkflowClient;
}
