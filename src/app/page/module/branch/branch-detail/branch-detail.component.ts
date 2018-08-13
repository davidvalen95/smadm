import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {RowFloatingInputInterface} from '../../../../components/floating-input/row-floating-input/row-floating-input.component';
import {ProfileTopInterface} from '../../../profile/ProfileApiInterface';
import {ApiBaseResponseInterface, ApiConfigInterface, ApiService} from '../../../../service/api/api.service';
import {BaseForm, InputType} from '../../../../components/floating-input/BaseForm';
import {NgForm} from '@angular/forms';
import {HelperService} from '../../../../service/helper/helper.service';
import {UserDataInterface, UserService} from '../../../../service/user/user.service';
import {ModalInterface} from '../../../../app.component';
import {ActivatedRoute} from '@angular/router';
import {BranchDetailTopInterface, BranchInterface, BranchUserInterface} from '../BranchApiInterface';

declare const $: any;

@Component({
    selector: 'app-branch-detail',
    templateUrl: './branch-detail.component.html',
    styleUrls: ['./branch-detail.component.scss']
})


export class BranchDetailComponent implements OnInit {

    public param: BranchDetailParamInterface = {};
    public top: BranchDetailTopInterface = {isSuccess: false, message: ''};

    public isCanEditProfile: boolean = false;
    public isCanAddTeacher: boolean = false;
    public isCanAddPupil: boolean = false;
    title: string = 'branch';

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


            this.teacherActiveForms = [];
            this.pupilActiveForms = [];
            this.pupilClassForms = [];
            this.teacherClassForms = [];


            this.top.data.branch.get_users_as_teacher.forEach((current) => {

                this.setupBranchUserForm(current, 'teacher');

            });
            this.top.data.branch.get_users_as_pupil.forEach((current) => {

                this.setupBranchUserForm(current, 'pupil');

            });


            var title = 'Pupil data for ' + this.top.data.branch.name
            // $(document).ready(function () {
            //     $('table').DataTable({
            //         dom: 'Bfrtip',
            //         paging: false,
            //         buttons: [],
            //         sort: false,
            //
            //         "bDestroy": true
            //
            //     });
            //     // $('table').dataTable().fnDestroy();
            //     // $('table').dataTable().fnDestroy();
            //
            // });


        });
    }

    public setupButtonLogic() {

        this.isCanEditProfile = this.top.data.isCanEditProfile;
        this.isCanAddTeacher = this.top.data.isCanAddTeacher;
        this.isCanAddPupil = this.top.data.isCanAddPupil;


    }


    public setupForm() {


        this.rowBaseForms = [];
        this.formValueContainer = {};


        var name = new BaseForm('Name', 'name');
        name.value = this.top.data.branch.name;
        name.classDisplay = 'col-xs-6';
        var address = new BaseForm('address', 'address');
        address.value = this.top.data.branch.address;
        address.classDisplay = 'col-xs-6';

        var head = new BaseForm('Head Branch', 'head');
        head.classDisplay = 'col-xs-12';
        var config: ApiConfigInterface = {
            url: ApiService.BASE_API_URL + 'user/auto-complete',
            params: {
                previledge: {selector: '!=', value: 'pupil'}
            }
        }
        head.setIsRequired(false);
        head.setInputTypeAutoComplete(config);
        head.infoBottom = 'Kepala sekolah minggu';
        if (this.top.data.branch && this.top.data.branch.get_head) {
            head.setAutoCompleteValue({key: this.top.data.branch.get_head.name, value: this.top.data.branch.get_head.id});

        }


        var owner = new BaseForm('owner', 'owner');
        owner.classDisplay = 'col-xs-12';
        var config: ApiConfigInterface = {
            url: ApiService.BASE_API_URL + 'user/auto-complete',
            params: {
                previledge: {selector: '!=', value: 'pupil'}
            }
        }
        owner.setIsRequired(false);
        owner.setInputTypeAutoComplete(config);
        owner.infoBottom = 'Pemilik rumah';
        if (this.top.data.branch && this.top.data.branch.get_owner) {
            owner.setAutoCompleteValue({key: this.top.data.branch.get_owner.name, value: this.top.data.branch.get_owner.id});
        }


        this.rowBaseForms.push({baseForms: [name, address, owner, head]})


        this.setEditableForm();
    }


    public setEditableForm() {
        console.log('setEditable', this.isCanEditProfile, this.rowBaseForms, this.top);
        this.rowBaseForms.forEach(rowBaseForm => {
            rowBaseForm.baseForms.forEach(baseForm => {
                if (!baseForm.isReadOnly) {
                    baseForm.setIsReadOnly(!this.isCanEditProfile);
                }
            })
        })
    }

    public apiExecuteGetTop(onFinish: () => void) {

        var config: ApiConfigInterface = {
            url: `${ApiService.BASE_API_URL}branch/top`,
            params: {id: this.param.id, cmd: 'detail'},
        }
        this.apiService.get<BranchDetailTopInterface>(config, (data: BranchDetailTopInterface) => {
            console.log('top', data);


            this.top = data;


            onFinish();
        })
    }

    public submitUpdateProfileForm(form: NgForm) {

        console.log(this.formValueContainer);

        if (form.valid) {

            this.formValueContainer['id'] = this.top.data.branch.id
            this.formValueContainer['cmd'] = 'edit';


            this.formValueContainer = this.helperService.mergeObject(form.value, this.formValueContainer);

            this.helperService.presentConfirmation({}, (isConfirmed) => {

                if (isConfirmed) {
                    this.apiExecuteSubmitForm(this.formValueContainer)
                }
            })
        } else {
            this.helperService.presentAlert({message: 'Form is not valid please check again'});
        }


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


    presentModal(type: string) {
        // this.setForm();

        if (type == 'pupil' || type == 'teacher') {
            this.setupFindUserForm(type)
        }


    }


    private setupFindUserForm(type) {
        this.modalData.baseForms = [];
        this.modalData.buttons = [];
        this.formValueContainer = {};

        var user: UserDataInterface = null;
        var findUser = new BaseForm('Find User', 'findUser');
        findUser.classDisplay = 'col-xs-12';
        var config: ApiConfigInterface = {
            url: ApiService.BASE_API_URL + 'user/auto-complete',
            params: {}
        }
        // findUser.setIsRequired(false);
        findUser.setInputTypeAutoComplete(config);
        findUser.changeListener.subscribe(baseForm => {
            console.log('findUser', baseForm.value);

            UserService.apiExecuteGetUserById(baseForm.value, (userDetailData) => {
                console.log('userDetailData', userDetailData);
                email.setValue(userDetailData.email);
                name.setValue(userDetailData.name);
                nbg.setValue(userDetailData.nbg);
                address.setValue(userDetailData.address);
                phone.setValue(userDetailData.phone);
                birthDate.setValue(userDetailData.birthDate);
                user = userDetailData;
            })
        })


        var selectClass = new BaseForm('Class', 'class');
        selectClass.setInputTypeSelect(this.top.data.selectClass);


        var email = new BaseForm('Email', 'email');
        email.setIsRequired(false);
        email.setIsReadOnly(true);


        var name = new BaseForm('Name', 'name');
        name.classDisplay = 'col-xs-6';
        name.setIsRequired(false);
        name.setIsReadOnly(true);

        var nbg = new BaseForm('NBG', 'nbg');
        nbg.setIsRequired(false);
        nbg.setIsReadOnly(true);
        nbg.classDisplay = 'col-xs-6';


        var address = new BaseForm('Address', 'address');
        address.classDisplay = 'col-xs-6';
        address.setIsRequired(false);
        address.setIsReadOnly(true);


        var phone = new BaseForm('Phone', 'phone');
        phone.classDisplay = 'col-xs-6';
        phone.setIsRequired(false);
        phone.setIsReadOnly(true);


        var birthDate = new BaseForm('Birth Date / Tanggal Lahir', 'birthDate');
        birthDate.inputType = InputType.date
        birthDate.setIsRequired(false);
        birthDate.setIsReadOnly(true);


        if (type == 'pupil') {
            this.modalData.title = `Add new pupil / Tambah murid baru`;
        }
        if (type == 'teacher') {
            this.modalData.title = `Add new teacher / Tambah guru baru`;
        }

        this.modalData.baseForms = [{
            baseForms: [findUser, selectClass, email, name, nbg, address, phone, birthDate,]
        }];

        this.modalData.buttons.push({
            class: 'btn btn-success',
            text: 'Submit',
            onClick: () => {
                this.apiExecuteSubmitNewUserToBranch(user, type, selectClass.value);
            }
        })


        // this.modalData.baseForms = [{
        //     baseForms:[selectRole, branch, selectClass, email, name, nbg,address,phone ,birthDate,]
        // }];
        // this.modalData.buttons.push({
        //     text: "Submit",
        //     class: "btn btn-success",
        //     onClick: (form:NgForm)=>{
        //         this.submitNewUserForm(form);
        //     }
        // })
    }


    public apiExecuteSubmitNewUserToBranch(user: UserDataInterface, role: 'teacher' | 'pupil', selectClass) {

        var config: ApiConfigInterface = {
            url: ApiService.BASE_API_URL + 'branch/op',
            params: {
                cmd: 'addUserToBranch',
                id: user.id,
                role: role,
                branchId: this.top.data.branch.id,
                selectClass: selectClass
            }
        }

        this.apiService.post(config, (response) => {


            this.topInit();
            this.helperService.closeModal();
        })

    }


    private submitScoreForm(form: NgForm) {

        if (form.valid) {
            this.formValueContainer['id'] = this.top.data.branch.id
            this.formValueContainer['cmd'] = 'giveScore',

                this.formValueContainer = this.helperService.mergeObject(form.value, this.formValueContainer);
            this.helperService.presentConfirmation({}, (isConfirmed) => {
                if (isConfirmed) {
                    this.apiExecuteSubmitForm(this.formValueContainer)
                }
            })
        } else {
            this.helperService.presentAlert({message: 'Form is not valid please check again'});
        }


    }


    public setupBranchUserForm(branchUser: BranchUserInterface, role: 'teacher' | 'pupil') {

        var isCannotAdd = role == 'teacher' ? !this.top.data.isCanAddTeacher : !this.top.data.isCanEditPupil;

        var activeForm = new BaseForm('', 'isActive');
        activeForm.value = '' + branchUser.isActive;
        activeForm.setInputTypeSelectTrueFalse('Aktif', 'Non-Aktif');
        activeForm.setIsReadOnly(isCannotAdd);

        var activeOldValue = activeForm.value;
        activeForm.changeListener.subscribe(data => {

            this.helperService.presentConfirmation({message: 'Ubah keaktifan dari ' + branchUser.get_user.name}, (isConfirmed) => {
                if (isConfirmed) {

                    this.apiExecuteChangeActiveStatus(branchUser, activeForm);
                    activeOldValue = data.value;
                } else {
                    data.value = activeOldValue;
                }
            });

        });


        var classForm = new BaseForm('', 'class');
        classForm.value = '' + branchUser.get_class.value;
        classForm.setInputTypeSelect(this.top.data.selectClass, false);
        classForm.setIsReadOnly(isCannotAdd || !branchUser.isActive);

        var classOldValue = classForm.value;
        classForm.changeListener.subscribe(data => {

            this.helperService.presentConfirmation({message: 'Ubah kelas dari ' + branchUser.get_user.name}, (isConfirmed) => {
                if (isConfirmed) {

                    this.apiExecuteChangeClass(branchUser, classForm);
                    classOldValue = data.value;
                } else {
                    data.value = classOldValue;
                }
            });

        });


        var rowFloatingForm: RowFloatingInputInterface[] = [{
            baseForms: [activeForm],
        }]
        var classFloatingForm: RowFloatingInputInterface[] = [{
            baseForms: [classForm],
        }];

        if (role == 'teacher') {
            this.teacherActiveForms.push(rowFloatingForm);
            this.teacherClassForms.push(classFloatingForm);
        }
        if (role == 'pupil') {
            this.pupilActiveForms.push(rowFloatingForm);
            this.pupilClassForms.push(classFloatingForm);
        }


    }

    public apiExecuteChangeActiveStatus(branchUser: BranchUserInterface, form: BaseForm) {


        var url: string = ApiService.BASE_API_URL + 'branch/op';
        var config: ApiConfigInterface = {
            url: url,
            params: {
                id: branchUser.id,
                isActive: form.value,
                cmd: 'changeActiveStatus',
            },
        }
        this.apiService.post<ApiBaseResponseInterface>(config, (data) => {
            if (data.isSuccess) {
                // this.helperService.closeModal();
                this.topInit();
            }
        });


    }

    public apiExecuteAdvanceClass(branch: BranchInterface) {


        var url: string = ApiService.BASE_API_URL + 'branch/op';
        var config: ApiConfigInterface = {
            url: url,
            params: {
                id: branch.id,
                cmd: 'advanceClass',
            },
        }

        this.helperService.presentConfirmation({message: 'Are you sure to advance all pupil class? Don\'t continue if you not sure'}, (isConfirmed) => {
            if (isConfirmed) {

                this.apiService.post<ApiBaseResponseInterface>(config, (data) => {
                    if (data.isSuccess) {
                        // this.helperService.closeModal();
                        this.topInit();
                    }
                });
            }
        });


    }


    public apiExecuteChangeClass(branchUser: BranchUserInterface, form: BaseForm) {


        var url: string = ApiService.BASE_API_URL + 'branch/op';
        var config: ApiConfigInterface = {
            url: url,
            params: {
                id: branchUser.id,
                class: form.value,
                cmd: 'changeClass',
            },
        }
        this.apiService.post<ApiBaseResponseInterface>(config, (data) => {
            if (data.isSuccess) {
                // this.helperService.closeModal();
                this.topInit();
            }
        });


    }


}


export interface BranchDetailParamInterface {
    id?: string;
}
