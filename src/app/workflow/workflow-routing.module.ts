import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardPageComponent
    },
    {
        path: 'project/:id',
        component: ProjectPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class WorkflowRoutingModule { }
