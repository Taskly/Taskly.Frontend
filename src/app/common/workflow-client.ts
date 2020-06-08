import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Project } from '../model/project';
import { WorkItem } from '../model/work-item';

@Injectable({
    providedIn: 'root'
})
export class WorkflowClient {
    public constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    public async getProject(id: string): Promise<Project> {
        const url = `api/projects/${id}`;
        const project = await this.httpClient.get<Project>(url).toPromise();
        return project;
    }

    public async getAllProjects(): Promise<Project[]> {
        const url = 'api/projects';
        const projects = await this.httpClient.get<Project[]>(url).toPromise();
        return projects;
    }

    public async getWorkItemsByProject(projectId: string): Promise<WorkItem[]> {
        const url = `api/work-items?projectId=${projectId}`;
        const workItems = await this.httpClient.get<WorkItem[]>(url).toPromise();
        return workItems;
    }

    private readonly httpClient: HttpClient;
}
