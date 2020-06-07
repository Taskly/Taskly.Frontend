import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WorkflowClient } from 'src/app/common/workflow-client';
import { Project } from 'src/app/model/project';
import { WorkItem } from 'src/app/model/work-item';

@Component({
    selector: 'app-project-page',
    templateUrl: './project-page.component.html',
    styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private workflowClient: WorkflowClient) {
    }

    public project: Project;
    public selectedWorkItem: WorkItem;

    public async ngOnInit(): Promise<void> {
        const projectId = this.route.snapshot.paramMap.get('id');
        this.project = await this.workflowClient.getProjectWithWorkItems(projectId);
    }
}
