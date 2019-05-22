import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyComponent } from './nuclearfamily/family/family.component';
import { MotherComponent } from './nuclearfamily/mother/mother.component';
import { SonComponent } from './nuclearfamily/son/son.component';
import { DaugtherComponent } from './nuclearfamily/daugther/daugther.component';
import { FatherComponent } from './nuclearfamily/father/father.component';
import { SuperComponent } from './directive/super/super.component';
import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { ReviewComponent } from './review/review/review.component';
import { TitleComponent } from './review/title/title.component';
import { ImageComponent } from './review/image/image.component';
import { DescriptionComponent } from './review/description/description.component';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';
import { TodoComponent } from './Task/todo/todo.component';
import { PipeComponent } from './pipes/pipe/pipe.component';
import { SortstringPipe } from './custompipe/sortstring.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FamilyComponent,
    MotherComponent,
    SonComponent,
    DaugtherComponent,
    FatherComponent,
    SuperComponent,
    NotfoundComponent,
    ReviewComponent,
    TitleComponent,
    ImageComponent,
    DescriptionComponent,
    TemplateformComponent,
    ReactiveformComponent,
    TodoComponent,
    PipeComponent,
    SortstringPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
