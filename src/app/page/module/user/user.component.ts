import {Component, OnInit, ViewChild} from '@angular/core';
import {ContainerKeyValueInterface} from '../../../components/key-value/key-value/key-value.component';
import {HelperService} from '../../../service/helper/helper.service';
import {ApiConfigInterface, ApiService, FilterInterface} from '../../../service/api/api.service';
import {NgForm} from '@angular/forms';
import {BaseForm, InputType, KeyValueInterface} from '../../../components/floating-input/BaseForm';
import {RowFloatingInputInterface} from '../../../components/floating-input/row-floating-input/row-floating-input.component';
import {UserService} from '../../../service/user/user.service';
import {isArray, isObject} from 'util';
import {HttpParams} from '@angular/common/http';
import {MyHelper} from '../../../MyHelper';
import {UserListTopInterface} from './UserApiInterface';
import {ModalInterface} from '../../../app.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    public top: UserListTopInterface;
    public modalData: ModalInterface<any> = {baseForms:[], title: "", buttons: []};
    public rowBaseForms: RowFloatingInputInterface[] = [];
    public title: string = "Module Room";
    public filter: FilterInterface = new FilterInterface();
    public filterForm: RowFloatingInputInterface[] = [];
    public readableModalData: ContainerKeyValueInterface[] = [];
    public approvalForm:RowFloatingInputInterface[] = [];
    public formValueContainer:any = {};
    public onClickPagination:()=>void = ()=>{
        this.apiExecuteGetTop((response)=>{

        })
    };
    @ViewChild('formModal') formModal;
    constructor(public userService:UserService,   public apiService: ApiService, public helperService: HelperService) {
        this.initTop();

    }

    ngOnInit() {

    }


    public initTop(){

        this.apiExecuteGetTop((response)=>{

            this.setupFilterForm();
            this.setupForms();
        });
    }

    public setupForms() {

        this.rowBaseForms = [];
        var buildingName: BaseForm = new BaseForm('Name', 'name');

        this.rowBaseForms.push({
            baseForms: [name]
        });



    }

    public setApprovalForm(){
        // this.approvalForm = [];
        // var approve = new BaseForm("Approval status","status");
        // approve.setInputTypeSelect(this.top.data.approveForm.status);
        //
        // approve.changeListener.subscribe((form)=>{
        //     reason.setIsRequired(form.value == "re");
        // });
        // // approve.setinput
        // this.approvalForm.push({
        //     baseForms:[approve]
        // });
        // var reason = new BaseForm("Reason (email)",'statusReason');
        // reason.setIsRequired(false);
        // reason.setInputTypeTextarea();
        // reason.infoBottom = "*Alasan ini akan dikirim dalam format email";
        // this.approvalForm.push({
        //     baseForms:[reason]
        // })
        //


    }



    public setupFilterForm(){





        this.filterForm = [];

        var cmbRole:BaseForm = new BaseForm("Role", 'cmbRole');
        cmbRole.setInputTypeSelect(this.top.data.filter.cmbRole)
        cmbRole.value = this.filter.cmbRole;
        cmbRole.setIsRequired(false);
        cmbRole.changeListener.subscribe((baseForm:BaseForm)=>{
            this.filter.cmbRole = baseForm.value;
        });


        var cmbBranch:BaseForm = new BaseForm("Branch / Cabang", 'cmbBranch');
        cmbBranch.setInputTypeSelect(this.top.data.filter.cmbBranch)
        cmbBranch.value = this.filter.cmbBranch;
        cmbBranch.setIsRequired(false);
        cmbBranch.changeListener.subscribe((baseForm:BaseForm)=>{
            this.filter.cmbBranch = baseForm.value;
        })
        cmbBranch.classDisplay = 'col-xs-6';


        var cmbClass:BaseForm = new BaseForm("Class", 'cmbClass');
        cmbClass.setInputTypeSelect(this.top.data.filter.cmbClass)
        cmbClass.value = this.filter.cmbClass;
        cmbClass.setIsRequired(false);
        cmbClass.changeListener.subscribe((baseForm:BaseForm)=>{
            this.filter.cmbClass = baseForm.value;
        })
        cmbClass.classDisplay = 'col-xs-6';



        var cmbSearchBy:BaseForm = new BaseForm("Search By", 'cmbSearchBy');
        cmbSearchBy.setInputTypeSelect(this.top.data.filter.cmbSearchBy)
        cmbSearchBy.value = this.filter.cmbSearchBy;
        cmbSearchBy.setIsRequired(false);
        cmbSearchBy.changeListener.subscribe((baseForm:BaseForm)=>{
            this.filter.cmbSearchBy = baseForm.value;
        })
        cmbSearchBy.classDisplay = 'col-xs-6';




        var searchValue:BaseForm = new BaseForm("Search Value", 'searchValue');
        searchValue.value = this.filter.searchValue;
        searchValue.setIsRequired(false);
        searchValue.changeListener.subscribe((baseForm:BaseForm)=>{
            this.filter.searchValue = baseForm.value;
        })
        searchValue.classDisplay = 'col-xs-6';




        this.filterForm.push({
            baseForms: [cmbRole, cmbBranch, cmbClass, cmbSearchBy, searchValue]
        });
    }


    public apiExecuteGetTop(onFinished?:(response:UserListTopInterface)=>void) {

        var params = {
          cmd: 'list',
        };

        params = this.helperService.mergeObject(params,this.filter);

        var config: ApiConfigInterface = {
            url: ApiService.BASE_API_URL + 'user/top',
            toastMessage: 'User module data',
            params:params,
        };



        this.apiService.get<UserListTopInterface>(config, (response) => {
            if (response.isSuccess) {
                this.top = response;
                if(onFinished){
                    onFinished(response);
                }
            }
        });
    }

    presentModal(type:string) {
        // this.setForm();

        if(type == 'newUser'){
            this.setupNewUserForm();
        }


    }


    private setupNewUserForm(){
        this.modalData.baseForms = [];
        this.modalData.buttons = [];
        this.modalData.title = `Add new user`;
        this.formValueContainer = {};


        var branch = new BaseForm('SM Cabang', 'branch');
        branch.setInputTypeSelect(this.top.data.branches);
        branch.classDisplay = 'col-xs-4';


        var selectClass = new BaseForm('Kelas', 'selectClass');
        selectClass.setInputTypeSelect(this.top.data.selectClasses);
        selectClass.classDisplay = 'col-xs-4';


        var email = new BaseForm('Email', 'email');
        email.setInputTypeEmail();
        email.infoBottom = "Email untuk user 'murid', tidak membutuhkan email karena tidak perlu login. Hanya untuk melengkapi data saja. Tidak diharuskan agar tidak mempersulit pendataan murid"
        // email.setIsHidden(true, true);






        var name = new BaseForm('Name' , 'name');
        name.classDisplay = 'col-xs-6';

        var nbg = new BaseForm('NBG' , 'nbg');
        nbg.infoBottom = "*Contoh B0001, B5099 dst";
        nbg.setIsRequired(false);
        nbg.classDisplay = 'col-xs-6';


        var address = new BaseForm('Address' , 'address');
        address.classDisplay = 'col-xs-6';


        var phone = new BaseForm('Phone','phone');
        phone.classDisplay = 'col-xs-6';




        var selectRole = new BaseForm("Role / peran", "selectRole");
        selectRole.setInputTypeSelect(this.top.data.selectRoles);
        selectRole.changeListener.subscribe((baseForm)=>{
            if(baseForm.value == 'teacher'){
                email.infoBottom = "Penambahan guru membutuhkan data email dibutuhkan untuk fitur mengirim email, fitur login, dan menggunakan modul di website ini";

            }
            if(baseForm.value == 'pupil'){
                email.infoBottom = "User 'murid', tidak membutuhkan email karena tidak perlu login. Hanya untuk melengkapi data saja. Tidak diharuskan agar tidak mempersulit pendataan murid"

            }
            email.setIsRequired(baseForm.value == 'teacher');
            nbg.setIsRequired(baseForm.value =='teacher');
        });
        selectRole.classDisplay = 'col-xs-4';


        var birthDate = new BaseForm('Birth Date / Tanggal Lahir', 'birthDate');
        birthDate.inputType = InputType.date


        this.modalData.baseForms = [{
            baseForms:[selectRole, branch, selectClass, email, name, nbg,address,phone ,birthDate,]
        }];
        this.modalData.buttons.push({
            text: "Submit",
            class: "btn btn-success",
            onClick: (form:NgForm)=>{
                this.submitNewUserForm(form);
            }
        })
    }


    private submitNewUserForm(form:NgForm){

        if (form.valid) {

            this.formValueContainer['cmd'] = 'addUser',
            this.formValueContainer = this.helperService.mergeObject(this.formValueContainer,form.value);
            this.helperService.presentConfirmation({}, (isConfirmed) => {
                if(isConfirmed) {
                    this.apiExecuteSubmitForm(this.formValueContainer)
                }
            })
        } else {
            this.helperService.presentAlert({message: 'Form is not valid please check again'});
        }


    }


    apiExecuteSubmitForm(params:any){
        console.log('apiFormSubmit',params);

        var config: ApiConfigInterface = {
            url: ApiService.BASE_API_URL + 'user/op',
            params: params,
            toastMessage: 'Submitting form',
        }
        this.apiService.post<any>(config, (data) => {
            console.log(data);
            this.apiExecuteGetTop();
            this.helperService.closeModal();
        });


    }

}
