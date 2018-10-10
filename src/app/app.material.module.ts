import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
    declarations: [],
    imports: [ CommonModule ,MatButtonModule,MatSidenavModule,MatMenuModule,MatToolbarModule],
    exports: [CommonModule ,MatButtonModule,MatSidenavModule,MatMenuModule,MatToolbarModule],
    providers: [],
})
export class AppMaterialModule {}