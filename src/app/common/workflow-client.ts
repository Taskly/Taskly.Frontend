import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ProjectsList } from '../model/projects-list';

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

    private readonly httpClient: HttpClient;
}
