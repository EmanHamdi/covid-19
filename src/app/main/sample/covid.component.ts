import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { CovidService } from './covid.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

import { BaseChartDirective, Color, Label } from 'ng2-charts';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
    selector: 'covid',
    templateUrl: './covid.component.html',
    styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit, OnChanges {

    // variables
    cronaVirusCasesCount: number;
    recoverdCount: number;
    deathCount: number;

    cronaCasesChart: any = {};
    recoverdChart: any;
    deathChart: any;

    historical: object[] = [];
    countries: string;

    countryData: any;
    casesData: any;

    markers: any[];
    lat: number;
    lng: number;
    zoom: number;


    //chart variable
    public barChartOptions: ChartOptions = {
        responsive: true,
        // We use these empty structures as placeholders for dynamic theming.
        scales: { xAxes: [{}], yAxes: [{}] },
        plugins: {
            datalabels: {
                anchor: 'end',
                align: 'end',
            }
        }
    };
    public barChartLabels: any[];
    public barChartType: ChartType = 'line';
    public barChartLegend = true;
    public barChartPlugins = [];
    public barChartData: ChartDataSets[] = [];
    startDateArry: any[] = [];
    blinkArry: any = [];



    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _covidService: CovidService
    ) {
        this._fuseTranslationLoaderService.loadTranslations(english, turkish);
        this.lat = 0;
        this.lng = 0;
        this.zoom = 2;
        this.markers = [];
    }


    ngOnInit() {

        //All Cases
        this._covidService.getAllCases().subscribe(res => {
            this.cronaVirusCasesCount = res.casesPerOneMillion;
            this.recoverdCount = res.recoveredPerOneMillion;
            this.deathCount = res.deathsPerOneMillion;

        })

        //All Historical Countries
        this._covidService.getAllHistoricalCountries().subscribe(res => {
            this.casesData = res;
        })
        //All Countries
        this._covidService.getAllCountries().subscribe(res => {
            console.log('countries', res[60]);
            this.countries = res
        })

        //Map
        this.markers.push({
            position: {
                lat: 40.4381311,
                lng: -3.8196233
            },
            label: {
                color: "black",
                text: "Madrid"
            }
        });

        this.markers.push({
            position: {
                lat: 48.8615515,
                lng: 2.3112233
            },
            label: {
                color: "black",
                text: "Paris"
            }
        });
    }

    ngOnChanges() {
        this.getDataChartCases();
        this.getDataChartRecovered();
        this.getDataChartDeth();
    }

    //Cases of Countries
    getCountryData(event) {
        this.countryData = event;
        this.cronaVirusCasesCount = event.casesPerOneMillion;
        this.recoverdCount = event.recoveredPerOneMillion;
        this.deathCount = event.deathsPerOneMillion
    }

    getDataChartCases() {
        for (let index = 0; index < this.casesData.length; index++) {
            if (this.casesData[index].country == this.countryData.country) {
                this.cronaCasesChart = this.casesData[index].timeline.cases;
            }
        }
        //Chart

        let array = [];
        this.blinkArry = [];
        this.startDateArry = [];
        this.blinkArry.push(this.cronaCasesChart);
        this.startDateArry.push(this.cronaCasesChart);

        for (let key in this.startDateArry[0]) {
            array.push(this.startDateArry[0][key])
        }
        this.barChartData = [{ data: array, label: 'cases' }];



        /* SOLUTION */
        this.barChartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        console.log('this is the fix!!!', array);

    }
    getDataChartRecovered() {
        for (let index = 0; index < this.casesData.length; index++) {
            if (this.casesData[index].country == this.countryData.country) {
                this.recoverdChart = this.casesData[index].timeline.recovered;
            }
        }
        //Chart

        let array = [];
        this.blinkArry = [];
        this.startDateArry = [];
        this.blinkArry.push(this.recoverdChart);
        this.startDateArry.push(this.recoverdChart);

        console.log('blinkArry', this.blinkArry);
        for (let key in this.startDateArry[0]) {
            array.push(this.startDateArry[0][key])
        }

        this.barChartData = [{ data: array, label: 'cases' }];

    }
    getDataChartDeth() {
        for (let index = 0; index < this.casesData.length; index++) {
            if (this.casesData[index].country == this.countryData.country) {
                this.deathChart = this.casesData[index].timeline.deaths;
            }
        }
        //Chart

        let array = [];
        this.blinkArry = [];
        this.startDateArry = [];
        this.blinkArry.push(this.deathChart);
        this.startDateArry.push(this.deathChart);

        console.log('blinkArry', this.blinkArry);
        for (let key in this.startDateArry[0]) {
            array.push(this.startDateArry[0][key])
        }

        this.barChartData = [{ data: array, label: 'cases' }];
    }


}

