import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BranchDetailTopInterface, BranchUserInterface} from '../../branch/BranchApiInterface';
import {RowFloatingInputInterface} from '../../../../components/floating-input/row-floating-input/row-floating-input.component';
import {BaseForm, InputType} from '../../../../components/floating-input/BaseForm';
import {HelperService} from '../../../../service/helper/helper.service';
import {NgForm} from '@angular/forms';
import {ApiBaseResponseInterface, ApiConfigInterface, ApiService} from '../../../../service/api/api.service';
import {UserDataInterface, UserService} from '../../../../service/user/user.service';
import {ModalInterface} from '../../../../app.component';
import {ActivatedRoute} from '@angular/router';
import {AbsenceBranchInterface, AbsenceDateInterface, AbsenceListTopInterface, UserAbsenceRecordInterface} from '../AbsenceApiInterface';

declare var $: any;

@Component({
    selector: 'app-absence-list',
    templateUrl: './absence-list.component.html',
    styleUrls: ['./absence-list.component.scss']
})


export class AbsenceListComponent implements OnInit {

    public param: BranchDetailParamInterface = {};
    public top: AbsenceListTopInterface;

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
    public absenceDateModalData: AbsenceDateInterface;

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
            url: `${ApiService.BASE_API_URL}absence/top`,
            params: {id: this.param.id, cmd: 'list'},
        }
        this.apiService.get<AbsenceListTopInterface>(config, (data: AbsenceListTopInterface) => {
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

        if (type == 'absence') {

            this.setupUserAbsence(data)

        }

        if (type == 'viewDetail') {

            this.absenceDateModalData = data;

        }

        if (type == 'followUp') {
            this.setupFollowUp(data);
        }

    }

    public setupFollowUp(userAbsenceRecord: UserAbsenceRecordInterface) {

        var rowFloating: RowFloatingInputInterface[] = [];

        var reason = new BaseForm('Reason / alasan', 'reason');
        reason.setInputTypeTextarea();


        rowFloating.push({baseForms: [reason]});


        this.modalData = null;

        setTimeout(() => {

            this.modalData = {
                title: `Follow up ${userAbsenceRecord.get_branch_user.get_user.name}`,
                baseForms: rowFloating,
                buttons: [
                    {
                        text: 'Cancel',
                        class: 'btn btn-default',
                        onClick: (form: NgForm) => {
                            $('#modal').modal('hide');
                        },
                    }, {
                        text: 'Submit',
                        class: 'btn btn-success',
                        onClick: (form: NgForm) => {
                            this.apiExecuteFollowUp(form, userAbsenceRecord)
                        }
                    }
                ]
            }
        }, 300)


    }

    public setupUserAbsence(absenceBranch: AbsenceBranchInterface) {


        if (!absenceBranch) {
            return;
        }

        var rowFloating: RowFloatingInputInterface[] = [];

        absenceBranch.get_branch.get_branch_users.forEach((branchUser: BranchUserInterface, i) => {

            var branchUserId = new BaseForm('branchUserId', `branchUserId[${i}]`);
            branchUserId.value = branchUser.id;
            branchUserId.setIsHidden(true);


            var name = new BaseForm('name', `name[${i}]`)
            name.classDisplay = 'col-xs-6 ';
            name.value = branchUser.get_user.name;
            name.setIsReadOnly(true);


            var reason = new BaseForm('reason / alasan', `reason[${i}]`);
            reason.infoBottom = `For ${branchUser.get_user.name}`;
            reason.classDisplay = 'col-xs-12 col-sm-6 mb-5';
            reason.setIsHidden(true);


            var followedUp = new BaseForm('Follow Up', `isFollowedUp[${i}]`);
            followedUp.setInputTypeSelectTrueFalse('Sudah', 'Belum');
            followedUp.changeListener.subscribe((baseForm) => {
                var isFollowedUp = this.helperService.parseBoolean(baseForm.value);


                reason.setIsHidden(!isFollowedUp, true);

                followedUp.setIsHidden(true);
            });
            followedUp.classDisplay = 'col-xs-6 ';
            followedUp.setIsHidden(true);
            followedUp.value = '0';


            var available = new BaseForm('available / hadir', `available[${i}]`)
            available.setInputTypeSelectTrueFalse('Hadir', 'Tidak hadir / absen');
            available.changeListener.subscribe((baseForm) => {
                var isAvailable = this.helperService.parseBoolean(baseForm.value);

                if (isAvailable) {
                    name.classDisplay = 'col-xs-6 ';
                    available.classDisplay = 'col-xs-6';
                    reason.setIsHidden(true, true);

                } else {
                    name.classDisplay = 'col-xs-6 col-sm-3';
                    available.classDisplay = 'col-xs-6 col-sm-3';
                }
                followedUp.setIsHidden(isAvailable, true);

            });
            available.classDisplay = 'col-xs-6 ';
            available.value = '1';


            rowFloating.push({
                baseForms: [branchUserId, name, available, followedUp, reason],
            })
        });


        setTimeout(() => {

            this.modalData = {
                title: 'Absensi untuk kelas ' + absenceBranch.get_select_class.key,
                baseForms: rowFloating,
                buttons: [{
                    text: 'Submit',
                    class: 'btn btn-success',
                    onClick: (form: NgForm) => {
                        this.apiExecuteSubmitAbsence(form, absenceBranch)
                    },
                }]
            }
        }, 300)


    }


    public apiExecuteFollowUp(form: NgForm, userAbsenceRecord: UserAbsenceRecordInterface) {

        if (form.valid) {
            var params = {
                id: userAbsenceRecord.id,
                cmd: 'followUp',
            };

            params = this.helperService.mergeObject(params, form.value);

            var url: string = ApiService.BASE_API_URL + 'absence/op';
            var config: ApiConfigInterface = {
                url: url,
                params: params
            }

            this.helperService.presentConfirmation({}, (isConfirmed) => {
                this.apiService.post<ApiBaseResponseInterface>(config, (data) => {
                    if (data.isSuccess) {
                        this.topInit();
                        userAbsenceRecord.reason = form.value.reason;
                        userAbsenceRecord.isFollowedUp = true;

                        $('#modal').modal('hide');
                    }
                });
            });

        } else {
            this.helperService.presentAlert({message: 'Form is not valid please check again'});
        }

    }

    public apiExecuteSubmitAbsence(form: NgForm, absenceBranch: AbsenceBranchInterface) {

        if (form.valid) {


            var params = {
                id: absenceBranch.id,
                cmd: 'addAbsenceBranch',
            };

            params = this.helperService.mergeObject(params, form.value);

            var url: string = ApiService.BASE_API_URL + 'absence/op';
            var config: ApiConfigInterface = {
                url: url,
                params: params
            }

            this.helperService.presentConfirmation({}, (isConfirmed) => {
                this.apiService.post<ApiBaseResponseInterface>(config, (data) => {
                    if (data.isSuccess) {
                        this.helperService.closeModal();
                        this.topInit();
                        // form.resetForm();
                    }
                });
            });

        } else {
            this.helperService.presentAlert({message: 'Form is not valid please check again'});
        }


    }


}


export interface BranchDetailParamInterface {
    id?: string;
}
