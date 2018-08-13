import { Component, OnInit } from '@angular/core';
import {PreviledgeInterface, UserService} from '../../service/user/user.service';
import {NgForm} from '@angular/forms';
import {ApiConfigInterface, ApiService, FilterInterface} from '../../service/api/api.service';
import {HelperService} from '../../service/helper/helper.service';
import {ContainerKeyValueInterface} from '../../components/key-value/key-value/key-value.component';
import {RowFloatingInputInterface} from '../../components/floating-input/row-floating-input/row-floating-input.component';
import {ModalInterface} from '../../app.component';
import {BaseForm, InputType} from '../../components/floating-input/BaseForm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {




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






  constructor( public apiService:ApiService, public helperService:HelperService, public userService: UserService) { }

  ngOnInit() {
  }

  ngAfterContentInit(){
      console.log('halo');
  }


  login(form:NgForm){

    var nbg = form.value.nbg;
    var password = form.value.password;

    this.userService.apiExecuteLogin(nbg,password);
  }


    public setFilter() {

        this.filter.cmbSearchBy = 'page';

    }



    public setRegisterForm() {

        if (!this.modalData) {
            // return;
        }

        //
        // email: string = "";
        // id: number = -1;
        // name: string = "";
        // reset: number =-1;
        // phone: string = "";
        // address:string;
        // get_previledge? : PreviledgeInterface;
        // get_photo?: PhotosDataInterface;


        var email = new BaseForm('Email', 'email');
        email.setInputTypeEmail();
        var password = new BaseForm('Password' , 'password');
        password.inputType = InputType.password;
        password.classDisplay = 'col-xs-6'
        var passwordConfirmation = new BaseForm('Confirm Password' , 'password_confirmation');
        passwordConfirmation.inputType = InputType.password;
        passwordConfirmation.classDisplay = 'col-xs-6'



        var name = new BaseForm('Name' , 'name');
        var address = new BaseForm('Address' , 'address');
        var nbg = new BaseForm('NBG' , 'nbg');
        nbg.infoBottom = "*Contoh B0001, B5099 dst";
        var phone = new BaseForm('Phone','phone');

        var birthDate = new BaseForm('Birth Date / Tanggal Lahir', 'birthDate');
        birthDate.inputType = InputType.date

        var registerKey = new BaseForm('Register Key' , 'registerKey');

        return [email, password,passwordConfirmation, name, nbg, address,phone, birthDate, registerKey]





    }



    presentModal() {
        var title = `Register admin`;
        this.modalData = {
            title: "Register user",
            baseForms: [{baseForms: this.setRegisterForm()}],
            buttons:[],

    };

    }

    formSubmit(form: NgForm) {
        console.log('formSubmitRaw', form);
        if (form.valid) {
            var params = {
                cmd: 'registerAdmin',
                // id: this.modalData.isApprove ? this.modalData.data.id : '-1',
            }
            params = this.helperService.mergeObject(params, form.value);

            this.apiFormSubmit(params);
        } else {
            // //this.helperService.presentNotification("Please check mark in red",NotificationTypeInterface.danger);
            this.helperService.presentAlert({message: 'Please check mark in red', title: 'Form is not valid'});
        }
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
}
