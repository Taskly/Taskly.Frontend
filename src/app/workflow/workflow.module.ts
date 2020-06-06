import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectComponent } from './project/project.component';
import { WorkflowRoutingModule } from './workflow-routing.module';
import { MaterialModule } from '../common/material.module';
import { WorkItemDetailsComponent } from './work-item-details/work-item-details.component';

@NgModule({
    declarations: [
        ProjectsListComponent,
        ProjectComponent,
        WorkItemDetailsComponent],
    imports: [
        CommonModule,
        WorkflowRoutingModule,
        MaterialModule
    ]
})
export class WorkflowModule {
}
