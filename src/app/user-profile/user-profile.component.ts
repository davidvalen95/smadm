import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiBaseResponseInterface, ApiConfigInterface, ApiService} from '../service/api/api.service';
import {ScoreInterface, UserDataInterface, UserService} from '../service/user/user.service';
import {ProfileTopInterface, UserHistoryInterface} from '../page/profile/ProfileApiInterface';
import {BaseForm, InputType} from '../components/floating-input/BaseForm';
import {RowFloatingInputInterface} from '../components/floating-input/row-floating-input/row-floating-input.component';
import * as moment from 'moment';
import Base = moment.unitOfTime.Base;
import {NgForm} from '@angular/forms';
import {HelperService} from '../service/helper/helper.service';
import {ModalInterface} from '../app.component';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

    public param: UserProfileParamInterface = {};
    public top: ProfileTopInterface = {isSuccess:false, message:""};

    public isCanEditProfile: boolean = false;

    public rowBaseForms: RowFloatingInputInterface[] = []
    public formValueContainer = {};
    public modalData:ModalInterface<any> = {
        title: "Apply form",
        baseForms: [],
        buttons: [],
    }

    constructor(public helperService: HelperService, public activatedRoute: ActivatedRoute, public apiService: ApiService, public userService: UserService) {

        this.activatedRoute.params.subscribe(data => {
            this.param.id = data['id'];


            console.log('param', data);

            this.topInit();


        })

    }



    ngOnInit() {
    }

    public topInit(){
        this.apiExecuteGetTop(() => {
            this.setupButtonLogic();
            this.setupForm();


        });
    }

    public setupButtonLogic() {

        this.isCanEditProfile = this.top.data.isCanEditProfile;

    }


    public setupForm() {


        this.rowBaseForms = [];
        this.formValueContainer = {};

        var name: BaseForm = new BaseForm('Name', 'name');
        name.value = this.top.data.user.name;
        name.classDisplay = 'col-xs-6 col-sm-9';

        var nbg: BaseForm = new BaseForm('NBG', 'nbg');
        nbg.value = this.top.data.user.nbg;
        nbg.classDisplay = 'col-xs-6 col-sm-3';
        nbg.setIsReadOnly(!this.top.data.isCanEditNbg);
        nbg.setIsRequired(false);


        this.rowBaseForms.push({baseForms: [name, nbg]})

        var email: BaseForm = new BaseForm('email', 'email');
        email.value = this.top.data.user.email;
        email.setIsRequired(false);

        var password = new BaseForm('Password' , 'password');
        password.inputType = InputType.password;
        password.classDisplay = 'col-xs-6'
        password.setIsReadOnly(!this.top.data.isCanChangePassword)
        password.isDisabled = !this.top.data.isCanChangePassword
        password.setIsRequired(false);
        password.infoBottom = "<span style='color:tomato;'>*</span>Isi HANYA jika ingin mengganti password, jangan isi bila tidak ingin mengganti password";
        var passwordConfirmation = new BaseForm('Confirm Password' , 'password_confirmation');
        passwordConfirmation.inputType = InputType.password;
        passwordConfirmation.classDisplay = 'col-xs-6'
        passwordConfirmation.setIsReadOnly(!this.top.data.isCanChangePassword)
        passwordConfirmation.isDisabled = !this.top.data.isCanChangePassword
        passwordConfirmation.setIsRequired(false);


        var address: BaseForm = new BaseForm('Address', 'address');
        address.value = this.top.data.user.address;

        var phone: BaseForm = new BaseForm('phone', 'phone');
        phone.value = this.top.data.user.phone;

        var birthDate: BaseForm = new BaseForm('Birth date', 'birthDate');
        birthDate.setInputTypeDate({});
        birthDate.value = this.top.data.user.birthDate;


        var profilePicture:BaseForm = new BaseForm("Change photo", 'photo');
        profilePicture.setIsRequired(false);
        profilePicture.setInputTypeFile({formContainer:this.formValueContainer});




        var fatherName = new BaseForm('Father Name', 'father');
        fatherName.classDisplay = 'col-xs-6';
        fatherName.setIsRequired(false);
        fatherName.value = this.top.data.user.father;

        var fatherPhone = new BaseForm('Father phone', 'fatherPhone');
        fatherPhone.classDisplay = 'col-xs-6';
        fatherPhone.setIsRequired(false);
        fatherPhone.value = this.top.data.user.fatherPhone;


        var motherName = new BaseForm('mother Name', 'mother');
        motherName.classDisplay = 'col-xs-6';
        motherName.setIsRequired(false);
        motherName.value = this.top.data.user.mother;


        var motherPhone = new BaseForm('mother phone', 'motherPhone');
        motherPhone.classDisplay = 'col-xs-6';
        motherPhone.setIsRequired(false);
        motherPhone.value = this.top.data.user.motherPhone;




        this.rowBaseForms.push({baseForms: [email, password, passwordConfirmation, address, phone, birthDate,fatherName,fatherPhone,motherName,motherPhone, profilePicture]})


        this.setEditableForm();
    }



    public setEditableForm(){
        this.rowBaseForms.forEach(rowBaseForm=>{
            rowBaseForm.baseForms.forEach(baseForm=>{
                if(!baseForm.isReadOnly){
                    baseForm.setIsReadOnly(!this.isCanEditProfile);
                }
            })
        })
    }

    public apiExecuteGetTop(onFinish: () => void) {

        var config: ApiConfigInterface = {
            url: `${ApiService.BASE_API_URL}user/top`,
            params: {id: this.param.id, cmd:'detail'},
        }
        this.apiService.get<ProfileTopInterface>(config, (data: ProfileTopInterface) => {
            this.top = data;
            onFinish();
        })
    }

    public submitUpdateProfileForm(form: NgForm) {


        if (form.valid) {

            this.formValueContainer['id'] = this.top.data.user.id
            this.formValueContainer['cmd'] = 'edit';


            this.formValueContainer = this.helperService.mergeObject(form.value,this.formValueContainer);
            console.log('submitUpdateProfileForm', this.formValueContainer, form);
            this.helperService.presentConfirmation({}, (isConfirmed) => {
                if(isConfirmed) {
                    this.apiExecuteSubmitForm(this.formValueContainer)
                }
            })
        } else {
            this.helperService.presentAlert({message: 'Form is not valid please check again'});
        }


    }

    public apiExecuteSubmitForm(json:any) {

        var url:string = ApiService.BASE_API_URL + "user/op";
        var config:ApiConfigInterface = {
            url: url,
            params: json,
        }
        this.apiService.post<ApiBaseResponseInterface>(config,(data)=>{
            if(data.isSuccess){
                this.helperService.closeModal();
                this.topInit();

            }
        });



    }


    presentModal(type:string, data?:any) {
        // this.setForm();

        if(type=='giveScore'){
            this.setupScoreForm(data);
        }


    }

    private setupScoreForm(score:ScoreInterface){

        this.modalData.baseForms = [];
        this.modalData.buttons = [];
        this.modalData.title = `Penilaian terhadap  ${this.top.data.user.name}`

        var description = new BaseForm("Description / Penilaian", 'score');
        description.setInputTypeTextarea();

        var status = new BaseForm("Status", "selectScoreStatus" );
        status.setInputTypeSelect(this.top.data.selectScoreStatus);
        status.infoBottom = "<p><span style='color:tomato;font-weight: bold;'>* </span>Beri penilaian terhadap murid sebagai track record murid dalam arsip. Penilaian terhadap murid akan sangat membantu mengawasi perkembangan murid tersebut</p>" +
            "<p><span style='color:tomato;font-weight: bold;'>* </span>Hanya guru-guru dari sekolah minggu yang dapat melihat penilaian track record murid untuk menjaga rahasia pelayanan</p>"


        if(score){
            description.value = score.description;
            if(score.get_select_score_status){
                status.value = score.get_select_score_status.value;

            }
        }

        this.modalData.baseForms = [{
            baseForms:[description, status]
        }]
        this.modalData.buttons.push({
            text: "Submit",
            class: "btn btn-success",
            onClick: (form:NgForm)=>{
                this.submitScoreForm(form,score);
            }
        })

        // this.modalData
    }
    private submitScoreForm(form:NgForm,score?:ScoreInterface){

        if (form.valid) {
            this.formValueContainer['id'] = this.top.data.user.id
            this.formValueContainer['cmd'] = 'giveScore',
            this.formValueContainer['scoreId'] = score.id || -1,

            this.formValueContainer = this.helperService.mergeObject(form.value,this.formValueContainer);
            this.helperService.presentConfirmation({}, (isConfirmed) => {
                if(isConfirmed) {
                    this.apiExecuteSubmitForm(this.formValueContainer)
                }
            })
        } else {
            this.helperService.presentAlert({message: 'Form is not valid please check again'});
        }


    }



}


export interface UserProfileParamInterface {
    id?: string;
}
