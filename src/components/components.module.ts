import { NgModule } from '@angular/core';
import { TouchEventComponent } from './touch-event/touch-event';
import { ResetComponent } from './reset/reset';
@NgModule({
	declarations: [TouchEventComponent,
    ResetComponent],
	imports: [],
	exports: [TouchEventComponent,
    ResetComponent]
})
export class ComponentsModule {}
