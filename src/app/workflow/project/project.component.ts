import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { WorkflowClient } from 'src/app/common/workflow-client';
import { Project } from 'src/app/model/project';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
    constructor(route: ActivatedRoute, workflowClient: WorkflowClient) {
        this.route = route;
        this.workflowClient = workflowClient;
    }

    public project: Project;
    public displayedColumns: string[] = ['title', 'status'];

    public async ngOnInit(): Promise<void> {
        const projectId = this.route.snapshot.paramMap.get('id');
        this.project = await this.workflowClient.getProjectWithWorkItems(projectId);
    }

    public onWorkItemClick(id: string) {
        console.log(id);
    }

    private route: ActivatedRoute;
    private readonly workflowClient: WorkflowClient;
}
