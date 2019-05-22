import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamilyComponent } from './nuclearfamily/family/family.component';
import { SuperComponent } from './directive/super/super.component';
import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { ReviewComponent } from './review/review/review.component';
import { FatherComponent } from './nuclearfamily/father/father.component';
import { MotherComponent } from './nuclearfamily/mother/mother.component';
import { SonComponent } from './nuclearfamily/son/son.component';
import { DaugtherComponent } from './nuclearfamily/daugther/daugther.component';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';
import { TodoComponent } from './Task/todo/todo.component';
import { PipeComponent } from './pipes/pipe/pipe.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'family',
    pathMatch: "full"
  },
  {
    path: 'family',
    component: FamilyComponent,
    children: [
      {
        path: 'father',
        component: FatherComponent
      },
      {
        path: 'mother',
        component: MotherComponent
      },
      {
        path: 'son',
        component: SonComponent
      },
      {
        path: 'daugther',
        component: DaugtherComponent
      }
    ]
  },
  {
    path: 'directive',
    component: SuperComponent
  },
  {
    path: 'review',
    component: ReviewComponent
  },
  {
    path: 'form',
    component: TemplateformComponent
  },
  {
    path: 'reactive',
    component: ReactiveformComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'pipe',
    component: PipeComponent
  },
  {
    path: 'updatefriend',
    component: PipeComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
