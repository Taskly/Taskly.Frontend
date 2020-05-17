import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectComponent } from './project/project.component';
import { WorkflowRoutingModule } from './workflow-routing.module';

@NgModule({
    declarations: [
        ProjectsListComponent,
        ProjectComponent],
    imports: [
        CommonModule,
        WorkflowRoutingModule
    ]
})
export class WorkflowModule {
}
