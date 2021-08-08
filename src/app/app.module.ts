import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { CovidModule } from 'app/main/sample/covid.module';
import { CovidTrackerComponent } from './covid-tracker/covid-tracker.component';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { AgmCoreModule } from '@agm/core';

const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'covid'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        CovidTrackerComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        CovidModule,
        ChartsModule,
        AgmCoreModule.forRoot({
            apiKey: "AIzaSyAVJeNZP3VRI7hyeUeOkQ2fxt6CJigF8fU"
          })
    ],
    bootstrap   : [
        AppComponent
    ],
    providers: [ThemeService]
})
export class AppModule
{
}
