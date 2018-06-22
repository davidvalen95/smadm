import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BranchInterface, BranchUserInterface} from '../../module/branch/BranchApiInterface';
import {HelperService} from '../../../service/helper/helper.service';
import {UserDataInterface, UserService} from '../../../service/user/user.service';
import {RowFloatingInputInterface} from '../../../components/floating-input/row-floating-input/row-floating-input.component';
import {NgForm} from '@angular/forms';
import {BaseForm} from '../../../components/floating-input/BaseForm';
import {ApiBaseResponseInterface, ApiConfigInterface, ApiService} from '../../../service/api/api.service';
import {ThreadDetailTopInterface} from '../ThreadApiInterface';
import {ModalInterface} from '../../../app.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.scss']
})
export class ThreadDetailComponent implements OnInit {

    public param: ThreadDetailParameterInterface = {};
    public top: ThreadDetailTopInterface = {isSuccess:false, message:""};
    title:string = 'branch';

    public rowBaseForms: RowFloatingInputInterface[] = []
    public formValueContainer = {};
    public modalData:ModalInterface<any> = {
        title: "Apply form",
        baseForms: [],
        buttons: [],
    }


    constructor(public changeDetectorRef: ChangeDetectorRef, public helperService: HelperService, public activatedRoute: ActivatedRoute, public apiService: ApiService, public userService: UserService) {

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


    }


    public setupForm() {

        this.rowBaseForms = [];


        var reply = new BaseForm("Reply", "content");
        reply.setInputTypeTextarea();


        this.rowBaseForms.push({baseForms:[reply]})

        this.setEditableForm();
    }




    public setEditableForm(){
        this.rowBaseForms.forEach(rowBaseForm=>{
            rowBaseForm.baseForms.forEach(baseForm=>{
                if(!baseForm.isReadOnly){
                    // baseForm.setIsReadOnly(!this.isCanEditProfile);
                }
            })
        })
    }

    public apiExecuteGetTop(onFinish: () => void) {

        var config: ApiConfigInterface = {
            url: `${ApiService.BASE_API_URL}thread/top`,
            params: {id: this.param.id, cmd:'detail'},
        }
        this.apiService.get<ThreadDetailTopInterface>(config, (data: ThreadDetailTopInterface) => {
            console.log('top', data);


            this.top = data;


            onFinish();
        })
    }


    public apiExecuteSubmitReply(json:any) {

        var params = {
            cmd: 'reply',
            id: this.top.data.thread.id,
        }

        params = this.helperService.mergeObject(json, params);
        var url:string = ApiService.BASE_API_URL + "thread/op";
        var config:ApiConfigInterface = {
            url: url,
            params: json,
        }
        this.apiService.post<ApiBaseResponseInterface>(config,(data)=>{
            if(data.isSuccess){
                this.topInit();

            }
        });



    }


    presentModal(type:string) {
        // this.setForm();

        if(type =='pupil' || type =='teacher'){
            // this.setupFindUserForm(type)
        }


    }






    private submitReply(form:NgForm){

        if (form.valid) {
            // this.formValueContainer['id'] = this.top.data.branch.id

            this.helperService.presentConfirmation({}, (isConfirmed) => {
                if(isConfirmed){
                    this.apiExecuteSubmitReply(form.value)

                }
            })
        } else {
            this.helperService.presentAlert({message: 'Form is not valid please check again'});
        }


    }




    public apiExecuteChangeClass(branchUser: BranchUserInterface, form:BaseForm){



        var url:string = ApiService.BASE_API_URL + "branch/op";
        var config:ApiConfigInterface = {
            url: url,
            params: {
                id: branchUser.id,
                class: form.value,
                cmd: 'changeClass',
            },
        }
        this.apiService.post<ApiBaseResponseInterface>(config,(data)=>{
            if(data.isSuccess){
                // this.helperService.closeModal();
                this.topInit();
            }
        });



    }



}


export interface ThreadDetailParameterInterface {
    id?: string;
}