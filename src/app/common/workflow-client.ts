import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ProjectsList } from '../model/projects-list';
import { Project } from '../model/project';

@Injectable({
    providedIn: 'root'
})
export class WorkflowClient {
    public constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    public async getAllProjects(): Promise<ProjectsList> {
        const url = 'api/projects';
        const projects = await this.httpClient.get<ProjectsList>(url).toPromise();
        return projects;
    }

    public async getProjectWithWorkItems(projectId: string): Promise<Project> {
        const url = `api/projects/${projectId}`;
        const project = await this.httpClient.get<Project>(url).toPromise();
        return project;
    }

    private readonly httpClient: HttpClient;
}
