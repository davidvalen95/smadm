import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {BaseForm, InputType, KeyValueInterface, LabelType} from '../BaseForm';
import {NgForm, NgModel} from '@angular/forms';
import {ApiService} from '../../../service/api/api.service';

declare var $:any;

@Component({
    selector: 'app-floating-input',
    templateUrl: './floating-input.component.html',
    styleUrls: ['./floating-input.component.scss']
})
export class FloatingInputComponent implements OnInit {


    @Input() public baseForm: BaseForm;
    @Input() public parentForm: NgForm;

// public model:NgModel;
// @ViewChild('model') public set content(content:NgModel){
//   this.model = model;
//   this.parentForm.addControl(this.model);
//
// };

    @ViewChild('ionInputModel') public ionInputModel: NgModel;
    @ViewChild('ionSelectModel') public ionSelectModel: NgModel;
    @ViewChild('ionDateModel') public ionDateModel: NgModel;
    @ViewChild('ionTextareaModel') public ionTextareaModel: NgModel;
    @ViewChild('fileModel') public fileModel: NgModel;
    @ViewChild('ionRadioModel') public ionRadioModel: NgModel;
    public finalModel: NgModel;
    public inputType;
    public labelType;
    public allowedBroadcast;
    constructor(public apiService:ApiService) {
        this.baseForm = null;
        console.log('floatingInputComponentConstructor');

    }

    ngOnInit() {

        $(document).ready(function(){
            // $('.datetimepicker').datetimepicker();
        });


        if (this.baseForm ) {
            this.baseForm.changeListener.subscribe(((model: BaseForm) => {
                // this.parentForm.tes.setDirty()
                if (this.baseForm.inputType == InputType.number) {
                    console.log('listenerNumber val:', model.value, 'baseform: ', this.baseForm);
                    if (this.baseForm.rules.max < Number(model.value)) {
                        // console.log('listenerNumber catch error max', this.rowBaseForms.rules.max, Number(model.value ))
                        if(this.parentForm){
                            this.parentForm.getControl(this.finalModel).setErrors(['max'])

                        }

                    }
                    if (this.baseForm.rules.min > Number(model.value)) {
                        if(this.parentForm) {
                            this.parentForm.getControl(this.finalModel).setErrors(['min'])

                        }

                    }
                }

            }))
            switch (this.baseForm.inputType) {
                case InputType.text:
                case InputType.autocomplete:
                case InputType.password:
                case InputType.email:
                case InputType.file:
                case InputType.number:
                    this.finalModel = this.ionInputModel;
                    this.allowedBroadcast = 'ioninput';
                    break;
                case InputType.select:
                    this.finalModel = this.ionSelectModel;
                    this.allowedBroadcast = 'ionselect';
                    break;
                case InputType.date:
                case InputType.datetime:
                    this.finalModel = this.ionInputModel;
                    this.allowedBroadcast = 'iondatetime';
                    // this.inputType = InputType.text;
                    // $('#floatingInputText').datetimepicker({
                    //     format: 'LT'
                    // });
                    break;
                case InputType.textarea:
                    this.finalModel = this.ionTextareaModel;
                    this.allowedBroadcast = 'iontextarea';
                    break;

                case InputType.radio:
                    this.finalModel = this.ionRadioModel;
                    this.allowedBroadcast = 'ionradio';

                    break;
            }
            if(this.parentForm) {
                this.parentForm.addControl(this.finalModel);

            }
            this.inputType = InputType[this.baseForm.inputType];
            this.labelType = LabelType[this.baseForm.labelType];


        }

    }

    autoCompleteSelected(keyValue:KeyValueInterface){
        this.baseForm.autoCompleteOption.selected = keyValue
        this.baseForm.autoCompleteOption.searchValue = this.baseForm.autoCompleteOption.selected.key;
        this.baseForm.value = keyValue.value;
        this.broadcast('ioninput')

    }
    cancelAutoComplete(){
        setTimeout(()=>{

            this.baseForm.autoCompleteOption.searchValue = this.baseForm.autoCompleteOption.selected.key;
            this.baseForm.autoCompleteOption.apiList  = null;
        },250);

    }
    apiExecuteAutoComplete(autoCompleteInput:NgModel){

        console.log('apiExecuteAutoComplete', this.baseForm )
        var value = this.baseForm.autoCompleteOption.searchValue;

        if(value == ''){
            return;
        }
        this.baseForm.autoCompleteOption.config.params['keyword'] = value;

        if(new Date().getTime() - this.baseForm.autoCompleteOption.lastRequest.getTime() > 150){
            this.baseForm.autoCompleteOption.lastRequest = new Date();
            this.apiService.multiDimensionalPost(this.baseForm.autoCompleteOption.config, (response:KeyValueInterface[])=>{
                console.log('keyValueSearch', response)

                this.baseForm.autoCompleteOption.apiList = response;
            });

        }

    }
    //

    ngAfterContentInit() {



        // this.rowBaseForms.isHidden = false;
    }

    debug() {
        console.log('debug');
    }

    onFieldClicked(model) {
        console.log('onFieldClicked');
        if (this.baseForm.isSearchBar) {
            // var param:SearchBarParam = {
            //     rowBaseForms: this.rowBaseForms
            // }
            // console.log('onFieldClicked');
            // this.navController.push(SearchBarPage, param)

        }


        if (this.baseForm.inputType == InputType.date) {
            // this.showCalendar();
            // this.showCalendarPage();
        }
        this.baseForm.inputClickListener.next(model);
    }


    public broadcast(origin, event?:Event) {

        // console.log('broadcastION',origin,this.allowedBroadcast,this.rowBaseForms.name ,this.rowBaseForms.value);
        if (origin == this.allowedBroadcast) {
            this.baseForm.broadcastIonChange(origin,event);

            console.log('broadcast', this.baseForm, event);



            }



    }


}

