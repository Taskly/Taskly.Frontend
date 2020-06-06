import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { WorkItemsListComponent } from './components/work-items-list/work-items-list.component';
import { WorkflowRoutingModule } from './workflow-routing.module';
import { MaterialModule } from '../common/material.module';
import { WorkItemDetailsComponent } from './components/work-item-details/work-item-details.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

@NgModule({
    declarations: [
        ProjectsListComponent,
        WorkItemsListComponent,
        WorkItemDetailsComponent,
        DashboardPageComponent,
        ProjectPageComponent],
    imports: [
        CommonModule,
        WorkflowRoutingModule,
        MaterialModule
    ]
})
export class WorkflowModule {
}
