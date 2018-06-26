import { NgModule } from '@angular/core';
import { CustomHeaderComponent } from './custom-header/custom-header';
import { CustomFooterComponent } from './custom-footer/custom-footer';
import {HomePage} from '../pages/home/home'

@NgModule({
	declarations: [CustomHeaderComponent,
    CustomFooterComponent,
   
    ,
    ],
	imports: [],
	exports: [CustomHeaderComponent,
    CustomFooterComponent,

    ,
    ]
})
export class ComponentsModule {}
