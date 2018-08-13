import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiBaseResponseInterface, ApiConfigInterface, ApiService} from '../../../../service/api/api.service';
import {AbsenceBranchInterface, AbsenceListTopInterface, UserAbsenceRecordInterface} from '../../absence/AbsenceApiInterface';
import {BranchUserInterface} from '../../branch/BranchApiInterface';
import {BaseForm} from '../../../../components/floating-input/BaseForm';
import {RowFloatingInputInterface} from '../../../../components/floating-input/row-floating-input/row-floating-input.component';
import {UserService} from '../../../../service/user/user.service';
import {HelperService} from '../../../../service/helper/helper.service';
import {ModalInterface} from '../../../../app.component';
import {ActivatedRoute} from '@angular/router';
import {BranchEventInterface, ConfigureBranchDetailTopInterface, PlanningInterface} from '../ConfigureBranchApiInterface';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Component({
    selector: 'app-configure-branch-detail',
    templateUrl: './configure-branch-detail.component.html',
    styleUrls: ['./configure-branch-detail.component.scss']
})
export class ConfigureBranchDetailComponent implements OnInit {

    public param: ConfigureBranchDetailParam = {};
    public top: ConfigureBranchDetailTopInterface;

    title: string = 'Absence';

    public rowBaseForms: RowFloatingInputInterface[] = []
    public formValueContainer = {};
    public modalData: ModalInterface<any> = {
        title: 'Apply form',
        baseForms: [],
        buttons: [],
    }

    public teacherActiveForms: RowFloatingInputInterface[][] = [];
    public teacherClassForms: RowFloatingInputInterface[][] = [];
    public pupilActiveForms: RowFloatingInputInterface[][] = [];
    public pupilClassForms: RowFloatingInputInterface[][] = [];

    public followUpModalData: RowFloatingInputInterface[] = [];

    constructor(public changeDetectorRef: ChangeDetectorRef, public helperService: HelperService, public activatedRoute: ActivatedRoute, public apiService: ApiService, public userService: UserService) {

        this.activatedRoute.params.subscribe(data => {
            this.param.id = data['id'];


            console.log('param', data);

            this.topInit();


        })

    }


    ngOnInit() {
    }

    public topInit() {
        this.apiExecuteGetTop(() => {
            this.setupButtonLogic();
            this.setupForm();


        });
    }

    public setupButtonLogic() {


    }


    public setupForm() {


        this.rowBaseForms.push({baseForms: []})


        this.setEditableForm();
    }


    public setEditableForm() {
        // console.log('setEditable', this.isCanEditProfile, this.rowBaseForms, this.top);
        // this.rowBaseForms.forEach(rowBaseForm=>{
        //     rowBaseForm.baseForms.forEach(baseForm=>{
        //         if(!baseForm.isReadOnly){
        //             baseForm.setIsReadOnly(!this.isCanEditProfile);
        //         }
        //     })
        // })
    }

    public apiExecuteGetTop(onFinish: () => void) {

        var config: ApiConfigInterface = {
            url: `${ApiService.BASE_API_URL}branch/config/web/top`,
            params: {id: this.param.id, cmd: 'detail'},
        }
        this.apiService.get<ConfigureBranchDetailTopInterface>(config, (data: ConfigureBranchDetailTopInterface) => {
            console.log('top', data);


            this.top = data;
            this.teacherActiveForms = [];
            this.pupilActiveForms = [];


            onFinish();
        })
    }


    public apiExecuteSubmitForm(json: any) {

        var url: string = ApiService.BASE_API_URL + 'branch/op';
        var config: ApiConfigInterface = {
            url: url,
            params: json,
        }
        this.apiService.post<ApiBaseResponseInterface>(config, (data) => {
            if (data.isSuccess) {
                this.helperService.closeModal();
                this.topInit();

            }
        });


    }


    presentModal(type: string, data: any) {
        // this.setForm();

        if (type == 'addEvent' || type == 'editEvent') {

            this.setupEventModal(data)

        }

        if(type =='addPlanning' || type =='editPlanning'){
            this.setupPlanningModal(data)
        }





    }

    public setupPlanningModal(planning: PlanningInterface) {

        var rowFloating: RowFloatingInputInterface[] = [];

        if(!planning){
            planning = {
                dueDate: null,
                title: null,
                description: null,
                id: null,
            }
        }


        var title = new BaseForm('title', `title`);
        title.value = planning.title || "" ;
        var description = new BaseForm('description', `description`);
        description.value = planning.description || "" ;
        description.setInputTypeTextarea();

        var date = new BaseForm("date",'dueDate');
        date.setInputTypeDate({});
        date.value = planning.dueDate || "";





        rowFloating.push({
            baseForms: [title,description, date,],
        })

        setTimeout(() => {

            this.modalData = {
                baseForms: rowFloating,
                title: 'Event form',
                buttons: [{
                    text: 'Submit',
                    class: 'btn btn-success',
                    onClick: (form: NgForm) => {
                        this.apiExecuteSubmitPlanning(form, planning)
                    },
                }]
            }
        }, 300)


    }


    public setupEventModal(realBranchEvent: BranchEventInterface) {

        var rowFloating: RowFloatingInputInterface[] = [];

        var branchEvent:BranchEventInterface = realBranchEvent;

        if(!realBranchEvent){
            branchEvent = {
                title: "",
                description: "",
                youtubeLink: "",
                id: "",
                get_photos: [],
            }
        }
        var title = new BaseForm('title', `title`);
        title.value = branchEvent.title ;
        var description = new BaseForm('description', `description`);
        description.value = branchEvent.description ;
        description.setInputTypeTextarea();


        var youtube = new BaseForm("add youtube", "youtubeLink");
        youtube.setIsRequired(false);



        var photo = new BaseForm('photo', `photo`);
        photo.setInputTypeFile(
            {
                formContainer:this.formValueContainer,
                isMultilple: true,

            }
        );
        photo.setInputFileImageOnly();
        photo.infoBottom += `<p style='color:tomato'>*Total size must below ${this.top.data.postMaxSize}. if many file then try to upload 1 by 1 later</p>`;





        rowFloating.push({
            baseForms: [title,description, youtube,photo, ],
        })

        setTimeout(() => {

            this.modalData = {
                baseForms: rowFloating,
                title: 'Event form',
                buttons: [{
                    text: 'Submit',
                    class: 'btn btn-success',
                    onClick: (form: NgForm) => {
                        this.apiExecuteSubmitBranchEvent(form, realBranchEvent)
                    },
                }]
            }
        }, 300)


    }



    public apiExecuteSubmitPlanning(form: NgForm, planning?:PlanningInterface) {

        if (form.valid) {

            console.log('apiExecuteSubmitBranchEvent', planning);

            var params = {
                cmd: planning.id ? "editPlanning" : 'addPlanning',
                branchId: this.top.data.branch.id,
                planningId: planning ? planning.id : "",
            };

            params = this.helperService.mergeObject(params, form.value);

            var url: string = ApiService.BASE_API_URL + 'branch/config/web/op';
            var config: ApiConfigInterface = {
                url: url,
                params: params
            }

            this.helperService.presentConfirmation({}, (isConfirmed) => {
                if(isConfirmed){
                    this.apiService.post<ApiBaseResponseInterface>(config, (data) => {
                        if (data.isSuccess) {
                            this.helperService.closeModal();
                            this.topInit();
                            // form.resetForm();
                        }
                    });
                }

            });

        } else {
            this.helperService.presentAlert({message: 'Form is not valid please check again'});
        }


    }


    public apiExecuteSubmitBranchEvent(form: NgForm, branchEvent?:BranchEventInterface) {

        if (form.valid) {

            console.log('apiExecuteSubmitBranchEvent', branchEvent);

            var params = {
                cmd: branchEvent ? "editEvent" : 'addEvent',
                branchId: this.top.data.branch.id,
                branchEventId: branchEvent ? branchEvent.id : "",
            };

            params = this.helperService.mergeObject(params, form.value);
            params = this.helperService.mergeObject(params, this.formValueContainer);

            var url: string = ApiService.BASE_API_URL + 'branch/config/web/op';
            var config: ApiConfigInterface = {
                url: url,
                params: params
            }

            this.helperService.presentConfirmation({}, (isConfirmed) => {
                if(isConfirmed){
                    this.apiService.post<ApiBaseResponseInterface>(config, (data) => {
                        if (data.isSuccess) {
                            this.helperService.closeModal();
                            this.topInit();
                            // form.resetForm();
                        }
                    });
                }

            });

        } else {
            this.helperService.presentAlert({message: 'Form is not valid please check again'});
        }


    }


    public apiExecuteDeleteEvent(id:number){


        var params = {
            cmd: 'deleteEvent',
            branchEventId: id,
        };

        params = this.helperService.mergeObject(params, this.formValueContainer);

        var url: string = ApiService.BASE_API_URL + 'branch/config/web/op';
        var config: ApiConfigInterface = {
            url: url,
            params: params
        }

        this.helperService.presentConfirmation({}, (isConfirmed) => {
            if(isConfirmed){
                this.apiService.post<ApiBaseResponseInterface>(config, (data) => {
                    if (data.isSuccess) {
                        this.helperService.closeModal();
                        this.topInit();
                        // form.resetForm();
                    }
                });
            }

        });

    }




    public apiExecuteDeletePlanning(id:number){


        var params = {
            cmd: 'deletePlanning',
            planningId: id,
        };

        params = this.helperService.mergeObject(params, this.formValueContainer);

        var url: string = ApiService.BASE_API_URL + 'branch/config/web/op';
        var config: ApiConfigInterface = {
            url: url,
            params: params
        }

        this.helperService.presentConfirmation({}, (isConfirmed) => {
            if(isConfirmed){
                this.apiService.post<ApiBaseResponseInterface>(config, (data) => {
                    if (data.isSuccess) {
                        this.helperService.closeModal();
                        this.topInit();
                        // form.resetForm();
                    }
                });
            }

        });

    }




    public apiExecuteDeletePhoto(photoId:number, branchEventId:number){


        var params = {
            cmd: 'deletePhoto',
            branchEventId: branchEventId,
            photoId: photoId,
        };

        params = this.helperService.mergeObject(params, this.formValueContainer);

        var url: string = ApiService.BASE_API_URL + 'branch/config/web/op';
        var config: ApiConfigInterface = {
            url: url,
            params: params
        }

        this.helperService.presentConfirmation({message: "Delete this photo/video?"}, (isConfirmed) => {
            if(isConfirmed){
                this.apiService.post<ApiBaseResponseInterface>(config, (data) => {
                    if (data.isSuccess) {
                        this.helperService.closeModal();
                        this.topInit();
                        // form.resetForm();
                    }
                });
            }

        });

    }





}


export interface ConfigureBranchDetailParam {
    id?: string;
}