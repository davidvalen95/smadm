import { Component, OnInit } from '@angular/core';
import {HelperService} from '../../service/helper/helper.service';
import {NgForm, NgModel} from '@angular/forms';
import {ApiConfigInterface, ApiService, FilterInterface} from '../../service/api/api.service';
import {BaseForm, InputType} from '../../components/floating-input/BaseForm';
import {RowFloatingInputInterface} from '../../components/floating-input/row-floating-input/row-floating-input.component';
import {ContainerKeyValueInterface} from '../../components/key-value/key-value/key-value.component';
import {UserDataInterface, UserService} from '../../service/user/user.service';
import {ModalInterface} from '../../app.component';
import {AbsenceBarcodeResponseInterface, AbsenceBarcodeTopInterface} from './AbsenceBarcodeApiInterface';
import {UserListTopInterface} from '../module/user/UserApiInterface';

@Component({
  selector: 'app-absence-barcode',
  templateUrl: './absence-barcode.component.html',
  styleUrls: ['./absence-barcode.component.scss']
})
export class AbsenceBarcodeComponent implements OnInit {


    public top:AbsenceBarcodeTopInterface;
    public modalData: ModalInterface<any>= {
        buttons: [],
        baseForms: [],
        title: "Register user"
    };
    public baseForm: RowFloatingInputInterface[] = [];
    public filter: FilterInterface = new FilterInterface();
    public title: string = 'Page title';
    public filterForm: RowFloatingInputInterface[] = [];
    public readableModalData: ContainerKeyValueInterface[] = [];
    public approvalForm: RowFloatingInputInterface[] = [];
    public onClickPagination: () => void = () => {

    };

    public lastUser:UserDataInterface;
    private _nbg: string = "";
    private timeoutId;

    public set nbg(string:string){
        this._nbg = string;

        if(this.timeoutId){
            clearTimeout(this.timeoutId);
        }

        this.timeoutId = setTimeout(()=>{
            console.log('500',string);
            this.timeoutId = null;
            this.apiAbsenceBarcode(this.nbg);
            this._nbg = "";
        },300)

    }
    public get nbg(){
        return this._nbg;
    }







    constructor( public apiService:ApiService, public helperService:HelperService, public userService: UserService) {


        this.initTop();

    }

    ngOnInit() {
    }


    login(form:NgForm){

        var nbg = form.value.nbg;
        var password = form.value.password;

        this.userService.apiExecuteLogin(nbg,password);
    }


    public setFilter() {

        this.filter.cmbSearchBy = 'page';

    }


    presentModal() {
        var title = `Register admin`;
        this.modalData = {
            title: "Register user",
            baseForms: [{baseForms: []}],
            buttons:[],

        };

    }



    public initTop(){

        this.apiExecuteGetTop((response:AbsenceBarcodeTopInterface)=>{
        });
    }



    public apiExecuteGetTop(onFinished?:(response:AbsenceBarcodeTopInterface)=>void) {

        var params = {
            cmd: 'barcode',
        };

        params = this.helperService.mergeObject(params,this.filter);

        var config: ApiConfigInterface = {
            url: ApiService.BASE_API_URL + 'absence/barcode/top',
            toastMessage: 'User module data',
            params:params,
        };



        this.apiService.get<AbsenceBarcodeTopInterface>(config, (response) => {
            if (response.isSuccess) {
                this.top = response;
                if(onFinished){
                    onFinished(response);
                }
            }
        });
    }


    apiFormSubmit(params: any, message: string = 'Submiting form') {
        console.log('apiFormSubmit', params);
        this.helperService.presentConfirmation({}, (isConfirmed) => {
            if(isConfirmed) {

                var config: ApiConfigInterface = {
                    url: ApiService.BASE_API_URL + 'user/op',
                    params: params,
                    toastMessage: 'Submitting form',
                }
                this.apiService.post<any>(config, (data) => {
                    console.log(data);
                    // this.apiExecuteGetTop();
                    // this.helperService.closeModal();
                    //this.helperService.presentNotification('Form is submitted');
                    // this.userService.apiExecuteGetNotification();
                });
            }
        });

    }


    public nbgOnChange(nbg:NgModel){
        console.log(nbg.value);
    }

    public apiAbsenceBarcode(nbg:string){

        var config: ApiConfigInterface = {
            url: ApiService.BASE_API_URL + "absence/barcode",
            isSilent: true,
            params: {
                nbg:nbg
            },

        }

        this.apiService.post<any>(config, (response:AbsenceBarcodeResponseInterface) => {

            if(response.isSuccess && response.data.user){
                this.lastUser = response.data.user;
            }
        });
    }
}
