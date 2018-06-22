import {Component, OnInit, ViewChild} from '@angular/core';
import {ContainerKeyValueInterface} from '../../../../components/key-value/key-value/key-value.component';
import {UserListTopInterface} from '../../user/UserApiInterface';
import {UserService} from '../../../../service/user/user.service';
import {RowFloatingInputInterface} from '../../../../components/floating-input/row-floating-input/row-floating-input.component';
import {ApiConfigInterface, ApiService, FilterInterface} from '../../../../service/api/api.service';
import {BaseForm, InputType} from '../../../../components/floating-input/BaseForm';
import {NgForm} from '@angular/forms';
import {HelperService} from '../../../../service/helper/helper.service';
import {ModalInterface} from '../../../../app.component';
import {BranchInterface, BranchListTopInterface} from '../BranchApiInterface';


@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

    public top: BranchListTopInterface;
    public modalData: ModalInterface<any> = {baseForms:[], title: "", buttons: []};
    public rowBaseForms: RowFloatingInputInterface[] = [];
    public filter: FilterInterface = new FilterInterface();
    public title: string = "Branch";
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


        this.apiExecuteGetTop((response)=>{
            this.getFilter();
            this.setupFilterForm();
            this.setupForms();
        });
    }

    ngOnInit() {

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
        //
        // var cmbRole:BaseForm = new BaseForm("Role", 'cmbRole');
        // cmbRole.setInputTypeSelect(this.top.data.filter.cmbRole)
        // cmbRole.value = this.filter.cmbRole;
        // cmbRole.setIsRequired(false);
        // cmbRole.changeListener.subscribe((baseForm:BaseForm)=>{
        //     this.filter.cmbRole = baseForm.value;
        // });
        //
        //
        // var cmbBranch:BaseForm = new BaseForm("Branch / Cabang", 'cmbBranch');
        // cmbBranch.setInputTypeSelect(this.top.data.filter.cmbBranch)
        // cmbBranch.value = this.filter.cmbBranch;
        // cmbBranch.setIsRequired(false);
        // cmbBranch.changeListener.subscribe((baseForm:BaseForm)=>{
        //     this.filter.cmbBranch = baseForm.value;
        // })
        // cmbBranch.classDisplay = 'col-xs-6';
        //
        //
        // var cmbClass:BaseForm = new BaseForm("Class", 'cmbClass');
        // cmbClass.setInputTypeSelect(this.top.data.filter.cmbClass)
        // cmbClass.value = this.filter.cmbClass;
        // cmbClass.setIsRequired(false);
        // cmbClass.changeListener.subscribe((baseForm:BaseForm)=>{
        //     this.filter.cmbClass = baseForm.value;
        // })
        // cmbClass.classDisplay = 'col-xs-6';
        //
        //
        //
        // var cmbSearchBy:BaseForm = new BaseForm("Search By", 'cmbSearchBy');
        // cmbSearchBy.setInputTypeSelect(this.top.data.filter.cmbSearchBy)
        // cmbSearchBy.value = this.filter.cmbSearchBy;
        // cmbSearchBy.setIsRequired(false);
        // cmbSearchBy.changeListener.subscribe((baseForm:BaseForm)=>{
        //     this.filter.cmbSearchBy = baseForm.value;
        // })
        // cmbSearchBy.classDisplay = 'col-xs-6';
        //
        //
        //
        //
        // var searchValue:BaseForm = new BaseForm("Search Value", 'searchValue');
        // searchValue.value = this.filter.searchValue;
        // searchValue.setIsRequired(false);
        // searchValue.changeListener.subscribe((baseForm:BaseForm)=>{
        //     this.filter.searchValue = baseForm.value;
        // })
        // searchValue.classDisplay = 'col-xs-6';
        //
        //
        //
        //
        // this.filterForm.push({
        //     baseForms: [cmbRole, cmbBranch, cmbClass, cmbSearchBy, searchValue]
        // });
    }
    public getFilter(){
        // this.filter.cmbStatus = "pa";

    }

    public apiExecuteGetTop(onFinished?:(response:BranchListTopInterface)=>void) {

        var params = {
            cmd: 'list',
        };

        params = this.helperService.mergeObject(params,this.filter);

        var config: ApiConfigInterface = {
            url: ApiService.BASE_API_URL + 'branch/top',
            toastMessage: 'Branch module data',
            params:params,
        };



        this.apiService.get<BranchListTopInterface>(config, (response) => {
            if (response.isSuccess) {
                this.top = response;
                if(onFinished){
                    onFinished(response);
                }
            }
        });
    }

    presentModal(type:string,data?:any) {
        // this.setForm();

        if(type == 'addBranch'){
            this.setupAddBranchForm();
        }
        if(type == 'editBranch'){
            this.setupAddBranchForm(data);

        }

    }

    private setupAddBranchForm(data?:BranchInterface){
        this.modalData.baseForms = [];
        this.modalData.buttons = [];
        this.modalData.title = `Add new branch`;
        this.formValueContainer = {};






        var name = new BaseForm('Name' , 'name');
        name.classDisplay = 'col-xs-6';
        if(data){
            name.value = data.name
        }



        var address = new BaseForm('address' , 'address');
        address.classDisplay = 'col-xs-6';
        if(data){
            address.value = data.address;

        }








        this.modalData.baseForms = [{
            baseForms:[name,address,]
        }];
        this.modalData.buttons.push({
            text: "Submit",
            class: "btn btn-success",
            onClick: (form:NgForm)=>{
                this.submitAddBranchForm(form);
            }
        })
    }


    private submitAddBranchForm(form:NgForm){

        if (form.valid) {

            this.formValueContainer['cmd'] = 'addBranch',
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
            url: ApiService.BASE_API_URL + 'branch/op',
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
