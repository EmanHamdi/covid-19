import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { CovidComponent } from './covid.component';
import { ChartsModule } from 'ng2-charts';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AgmCoreModule } from '@agm/core';

const routes = [
    {
        path     : 'covid',
        component: CovidComponent
    }
];

@NgModule({
    declarations: [
        CovidComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule,
        ChartsModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        // AgmCoreModule.forRoot({
        //     // please get your own API key here:
        //     // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
        //     apiKey: 'https://www.google.com/maps/embed/v1/MAP_MODE?key=YAIzaSyAVJeNZP3VRI7hyeUeOkQ2fxt6CJigF8fU&parameters'

        // })

        AgmCoreModule.forRoot({
            apiKey: "AIzaSyAVJeNZP3VRI7hyeUeOkQ2fxt6CJigF8fU"
          })
    ],
    exports     : [
        CovidComponent
    ],
})

export class CovidModule
{
}
