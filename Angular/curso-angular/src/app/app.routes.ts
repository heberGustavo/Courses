import { Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EventsComponent } from './components/events/events.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

export const routes: Routes = [
    { path: '', component: FirstComponentComponent },
    { path: 'list', component: ListRenderComponent },
    { path: 'list/:id', component: ItemDetailComponent },
    { path: 'change-number', component: ChangeNumberComponent },
    { path: 'directives', component: DirectivesComponent },
    { path: 'emitter', component: EmitterComponent },
    { path: 'events', component: EventsComponent },
    { path: 'if-render', component: IfRenderComponent },
    { path: 'pipes', component: PipesComponent },
    { path: 'two-way-data-binding', component: TwoWayBindingComponent },
];