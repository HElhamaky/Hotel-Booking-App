import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatBadgeModule } from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    imports:[],
    exports:[
        MatSliderModule,
        MatBadgeModule,
        MatButtonModule
    ]
})

export class MaterialModule {

}