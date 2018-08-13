import {Component, OnInit} from '@angular/core';
import * as Chartist from 'chartist';
import {UserService} from '../service/user/user.service';
import {ApiBaseResponseInterface, ApiConfigInterface, ApiService, FilterInterface} from '../service/api/api.service';
import {AppTopInterface} from './DashboardApiInterface';
import {UserProfileParamInterface} from '../user-profile/user-profile.component';
import {HelperService} from '../service/helper/helper.service';
import {RowFloatingInputInterface} from '../components/floating-input/row-floating-input/row-floating-input.component';
import {BaseForm} from '../components/floating-input/BaseForm';
import {ModalInterface} from '../app.component';
import {NgForm} from '@angular/forms';
import {AbsenceDateInterface} from '../page/module/absence/AbsenceApiInterface';

// import * as $ from 'jquery';
//
// import * as datatable from 'datatables.net-dt';
// require( 'datatables.net-dt' )();
declare var $: any;
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

    public param: UserProfileParamInterface = {};
    public top: AppTopInterface;

    public filter: FilterInterface = new FilterInterface();
    public filterForm: RowFloatingInputInterface[] = [];

    public onClickPagination: () => void = () => {
        this.apiExecuteGetTop(() => {

        })
    };

    public modalData: ModalInterface<any>;




    constructor(public userService: UserService, public apiService: ApiService, public helperService: HelperService) {
        this.initTop()

    }

    public download(data:AbsenceDateInterface){
        var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: true,
            useBom: true,
            headers: ["First Name", "Last Name", "ID"]
        };

        // new Angular5Csv(data.data, "Laporan tanggal "+ this.helperService.getReadableDate(new Date(data.latestAbsenceDate.targetDate)), options );




    }

    public initTop() {

        this.apiExecuteGetTop(() => {
            this.setupFilterForm();

            this.top.data.branchSummary.forEach((currentPupilSelector)=>{

                currentPupilSelector.forEach(current=>{
                    var title =  "Absence Report "+ this.helperService.getReadableDate(new Date(current.targetDate))

                    setTimeout(()=>{

                        $(document).ready(function() {

                            $(`#summaryTable${current.id}`).DataTable( {
                                dom: 'Bfrtip',
                                paging: false,
                                buttons: [
                                    {
                                        extend: 'excel',
                                        title: title,
                                    },
                                    {
                                        extend: 'print',
                                        title: title,
                                    }
                                ],

                                title: title,
                            } );
                        } );
                    },500)
                })


            })


        });


    }

    public setupFilterForm() {

        this.filterForm = [];

        var cmbEventType: BaseForm = new BaseForm('Event type', 'cmbEventType');
        cmbEventType.setInputTypeSelect(this.top.data.filter.cmbEventType)
        cmbEventType.value = this.filter.cmbEventType;
        cmbEventType.setIsRequired(false);
        cmbEventType.changeListener.subscribe((baseForm: BaseForm) => {
            this.filter.cmbEventType = baseForm.value;
        });


        this.filterForm.push({
            baseForms: [cmbEventType]
        });


    }

    startAnimationForLineChart(chart) {
        let seq: any, delays: any, durations: any;
        seq = 0;
        delays = 80;
        durations = 500;

        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                });
            } else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });

        seq = 0;
    };

    startAnimationForBarChart(chart) {
        let seq2: any, delays2: any, durations2: any;

        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });

        seq2 = 0;
    };

    ngOnInit() {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

        const dataDailySalesChart: any = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };

        const optionsDailySalesChart: any = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {top: 0, right: 0, bottom: 0, left: 0},
        }

        var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

        this.startAnimationForLineChart(dailySalesChart);


        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

        const dataCompletedTasksChart: any = {
            labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };

        const optionsCompletedTasksChart: any = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {top: 0, right: 0, bottom: 0, left: 0}
        }

        var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

        // start animation for the Completed Tasks Chart - Line Chart
        this.startAnimationForLineChart(completedTasksChart);


        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

        var dataEmailsSubscriptionChart = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

            ]
        };
        var optionsEmailsSubscriptionChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: {top: 0, right: 5, bottom: 0, left: 0}
        };
        var responsiveOptions: any[] = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];
        var emailsSubscriptionChart = new Chartist.Bar('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);

        //start animation for the Emails Subscription Chart
        this.startAnimationForBarChart(emailsSubscriptionChart);
    }


    public presentModal(type: string, data: any) {

        if (type == 'addThread') {
            this.setupThreadForm();
        }
    }

    public setupThreadForm() {

        var title = new BaseForm('title', 'title');
        title.rules.minlength = 20;
        title.rules.maxlength = 70;

        var message = new BaseForm('message', 'content');
        message.rules.minlength = 50;

        message.setInputTypeTextarea();

        this.modalData = {
            title: 'Create new thread',
            baseForms: [{baseForms: [title, message]}],
            subTitle: 'Thread bertujuan untuk sharing pertanyaan atau diskusi agar seluruh guru SM Bukit Zaitun dapat berdiskusi',
            buttons: [
                {
                    text: 'Submit',
                    class: 'btn btn-success',
                    onClick: (parentForm) => {
                        this.apiExecuteAddThread(parentForm);
                    }

                }
            ]
        };

    }

    public apiExecuteAddThread(form: NgForm) {


        console.log(form.value);

        if (form.valid) {

            var params = {
                cmd: 'addThread'
            }

            params = this.helperService.mergeObject(form.value, params);


            this.helperService.presentConfirmation({}, (isConfirmed) => {
                if (isConfirmed) {
                    var url: string = ApiService.BASE_API_URL + 'thread/op';
                    var config: ApiConfigInterface = {
                        url: url,
                        params: params,
                    }
                    this.apiService.post<ApiBaseResponseInterface>(config, (data) => {
                        if (data.isSuccess) {
                            this.helperService.closeModal();
                            this.initTop();

                        }
                    });
                }
            })
        } else {
            this.helperService.presentAlert({message: 'Form is not valid please check again'});
        }

    }

    public apiExecuteGetTop(onFinish: () => void) {


        var params = this.helperService.mergeObject({}, this.filter);
        var config: ApiConfigInterface = {
            url: `${ApiService.BASE_API_URL}app/top`,
            params: params,
        }
        this.apiService.get<AppTopInterface>(config, (data: AppTopInterface) => {
            console.log('top', data);


            this.top = data;


            onFinish();
        })
    }


}
