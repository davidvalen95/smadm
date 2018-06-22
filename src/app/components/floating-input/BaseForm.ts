import {ReplaySubject} from 'rxjs/ReplaySubject';
import {NgForm, NgModel} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {HttpParams} from '@angular/common/http';
import {ApiConfigInterface} from '../../service/api/api.service';
import {MyHelper} from '../../MyHelper';


export class BaseForm{

    public labelType: LabelType = LabelType.stacked;
    public inputType: InputType = InputType.text;

    public placeholder: string                              = "";
    public selectOptions: KeyValueInterface[]                        = [];
    public rules: InputRules                                = {isRequired: true, min: 0};
    private isHidden: boolean                                = false;
    public styling: InputStyle                              = {};
    public value: any                                       = "";
    public isReadOnly: boolean                              = false;
    public dateSetting: DateSetting                         = {min: "1900-01-01"};
    public changeListener: ReplaySubject<BaseForm>          = new ReplaySubject(0);
    public inputClickListener: ReplaySubject<BaseForm>      = new ReplaySubject(0);
    public labelClickListener: ReplaySubject<BaseForm>      = new ReplaySubject(0);
    public buttonRightClickListener: ReplaySubject<NgModel> = new ReplaySubject(0);
    public searchBarSetting?: SearchBarSetting              = null;
    public isSearchBar: boolean                             = false;
    public isDisabled: boolean                              = false;
    public isInitializeState: boolean                       = false;
    public infoBottom: string                               = "";
    private lastBroadcast: number;
    private lastBroadcastWithNumber: number                 = -1;
    public classDisplay:string = "col-xs-12";
    public title:string = "";
    public infoFileName:string;
    public autoCompleteOption:AutoCompleteOptionInterface = {config:{url:""}, searchValue: "", lastRequest:new Date()};

    //# for file auto add
    private formValueContainer = null;


    public attachmentInfo: AttachmentInfoInterface = {isSet: false}


    public buttonRightSuccess: ButtonSettingInterface = {
        label: "",
        isHidden: true,
        clickListener: new ReplaySubject(0)
    };
    public buttonRightDanger: ButtonSettingInterface  = {
        label: "",
        isHidden: true,
        clickListener: new ReplaySubject(0)
    };

    private isSelectProcessing: boolean = false;

    constructor(public label: string,
                public name?: string,) {

        this.placeholder = `Enter ${this.label}`;


        // var promise: Promise<any> = Promise.resolve("tes");
        this.changeListener.subscribe((model: BaseForm) => {
            if (this.inputType == InputType.number && this.rules.max) {
                // if ((model.value as number) > this.rules.max) {
                //   // model.
                // }

                var test;
            }
            //
            // if(this.inputType == InputType.select){
            //   this.value = model.value;
            // }

        })


    }



    public setAutoCompleteValue(keyValue: AutoCompleteKeyValueInterface){

        this.value = keyValue.value
        this.autoCompleteOption.selected = keyValue;
        this.autoCompleteOption.searchValue = keyValue.key;
        this.autoCompleteOption.searchValue = keyValue.key;

        setTimeout(()=>{
            this.autoCompleteOption.searchValue = keyValue.key;
            console.log('setAutoCOmpleteValue', this.autoCompleteOption, this.value)
        },400);
    }



    public setInputTypeAutoComplete(config:ApiConfigInterface, selectedKeyValue:AutoCompleteKeyValueInterface = {key:"",value:"",display:""}){
        this.inputType = InputType.autocomplete;

        if(!config.params){
            config.params = {};
        }
        if(!config.isSilent){
            config.isSilent =  true;

        }
        this.autoCompleteOption = {
            config: config,
            searchValue: "",
            selected: selectedKeyValue,
            lastRequest: new Date(),


        }
    }

    public setIsHidden(isHidden: boolean = null, isRequiredWhenVisible: boolean = false) {
        var logic = isHidden != null ? isHidden : !this.isHidden;

        this.isHidden = logic;

        if (this.isHidden) {
            // this.value            = '';
            this.rules.isRequired = false;
        } else {
            this.rules.isRequired = isRequiredWhenVisible;
        }

        return this;
    }

    public setDateAdvanceDay(param: string, day: number = 1) {
        if (param == null || param == "") {
            return;
        }
        try {
            var date = new Date(param);
            date.setDate(date.getDate() + day);
            this.value = date.toISOString();
        } catch (error) {

        }

        return this;
    }


    /**
     *
     * @param {object} formValueContainer value json di controller buat submit
     * @returns {this}
     */
    public setInputTypeFile(formValueContainer: object) {
        this.inputType = InputType.file;
        // this.value = "0 ";
        // this.fileCallbackEvent = callbackEvent;

        this.formValueContainer = formValueContainer;
        return this;

    }

    public setInputTypeDate(dateSetting: DateSetting) {
        this.placeholder = `Select ${this.label}`;
        this.inputType   = InputType.date;
        // Return today's date and time

        dateSetting.hourValues = "";
        if (dateSetting.min == null){
            var year = new Date().getFullYear() - 1;
            dateSetting.min = `${year}-01-01`;

        }

        if (dateSetting.max == null)
            dateSetting.max = BaseForm.getAdvanceDate(712);

        if (dateSetting.displayFormat == null) {
            dateSetting.displayFormat = "DDD DD MMM YYYY";
        }

        if (dateSetting.min instanceof Date) {
            dateSetting.min = (<Date>dateSetting.min).toISOString()
        }
        if (dateSetting.max instanceof Date) {
            dateSetting.max = (<Date>dateSetting.max).toISOString()
        }

        this.dateSetting = dateSetting;
        console.log(`setting ${this.name}`, this.dateSetting)


        return this;
    }

    public setIsReadOnly(isReadOnly:boolean){
        this.isReadOnly = isReadOnly;
        this.setIsRequired(false);
        if(isReadOnly){
            this.title = "This field is not editable";
        }else{
            this.title = "";
        }
    }
    public setDateTimezone(timezone: number = 8) {

        this.value = new Date((new Date().getTime() - new Date().getTimezoneOffset()) + timezone * 3600 * 1000).toISOString();
        return this;
    }


    public setInputTypeTime() {
        this.placeholder = `Select ${this.label}`;

        var dateSetting: DateSetting = {};
        dateSetting.displayFormat    = "HH:mm";
        this.inputType               = InputType.date;
        dateSetting.min              = '00:00';
        dateSetting.max              = "23:59";
        dateSetting.hourValues       = "";
        dateSetting.isTime           = true;
        var prefix                   = "";

        for (var i = 0; i < 24; i++) {
            dateSetting.hourValues += prefix;
            dateSetting.hourValues += ("" + '0' + i).slice(-2);

            prefix = ",";
        }

        console.log('timesetting', dateSetting);
        this.dateSetting = dateSetting;

        return this;
    }

    public setInputTypeText() {
        this.inputType   = InputType.text;
        this.placeholder = `Enter ${this.label}`;
        return this;

    }

    public setInputTypeTextarea() {
        this.inputType = InputType.textarea;

        return this;
    }

    public setInputTypeSelect(options: KeyValueInterface[], isFirstSelected = true) {

        // console.log('bb', options , options  ? options : []);
        if (!this.isSelectProcessing) {
            this.isSelectProcessing = true;
            this.placeholder        = `Select ${this.label}`;
            this.inputType          = InputType.select;
            this.selectOptions      = options  ? options : [];

            var text: string = "sdoifjiojdf";

            this.isSelectProcessing = false;
            if(isFirstSelected && options.length > 0){
                this.value = options[0].value;
                this.changeListener.next(this);

            }

        }

        console.log('setInputTypeSelect', this.selectOptions);

        return this;

    }

    public setInputTypeSelectTrueFalse(labelTrue="Yes", labelFalse='no') {




        if (!this.isSelectProcessing) {
            this.selectOptions      = [];
            this.isSelectProcessing = true;
            this.placeholder        = `Select ${this.label}`;
            this.inputType          = InputType.select;
            this.selectOptions      = [{
                key:MyHelper.ucWord(labelTrue),value:"1",
            },{
                key: MyHelper.ucWord(labelFalse), value: "0",
            }];

            this.isSelectProcessing = false;


        }

        return this;

    }

    public setInputTypeSelectChain<T>(observable: Observable<T>, processData: (data: T) => KeyValueInterface[], isFirstDefault:boolean = false) {
        this.placeholder = `Select ${this.label}`;

        this.inputType = InputType.select;

        // parsing as key value
        observable.subscribe((data: T) => {
            this.selectOptions = processData(data)
            if(isFirstDefault && this.value == ""){
                this.value = this.selectOptions[0].value;
                console.log("firstDefault", this.value);
            }
            console.log('selectOptions', this.selectOptions)
        })

        return this;

    }

    public activateButtonRightDanger(label: string): ReplaySubject<BaseForm> {
        this.buttonRightDanger.label    = label;
        this.buttonRightDanger.isHidden = false;
        return this.buttonRightDanger.clickListener;
    }

    public setInputTypeSearchBar(url: string, httpParams: HttpParams, paramBindEvent: string[], processData: (serverResponse: any) => KeyValueInterface[]) {
        this.placeholder = `Search ${this.label}`;

        this.value = "-";
        this.isSearchBar      = true;
        this.inputType        = InputType.text;
        // this.isReadOnly       = true
        this.searchBarSetting = {
            url: url,
            httpParams: httpParams,
            httpParamBindEvent: paramBindEvent,
            processData: processData
        }
        this.placeholder      = "Click here to search " + this.label;

        return this;
    }

    public setRulesPatternNumberOnly() {
        this.inputType                = InputType.number;
        this.rules.pattern            = "[0-9]+";
        this.rules.patternInformation = "Only number";

        return this;
    }

    public setInputTypeEmail() {
        this.rules.pattern            = '[\\w]+(\\.[\\w+])*@[\\w]+(.[\\w]+)*\\.[a-zA-Z]{2,4}'
        this.rules.patternInformation = "Must valid email";

        return this;
    }


    public static getAdvanceDate(advance: number, from = new Date(),) {
        from.setDate(from.getDate() + advance);

        return from;
    }

    public getServerDateFormat() {
        if (this.inputType == InputType.date) {
            var mmm = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            try {
                var date = new Date(this.value);
                return ('0' + date.getUTCDate()).slice(-2) + ` ${mmm[date.getUTCMonth()]} ${date.getUTCFullYear()}`
            } catch (e) {
                console.log('error', e.toString())
            }

        }

        return this.value;
    }

    public getInputTypeText(): string {
        // console.log('getInputTypeText', InputType[this.inputType])
        return InputType[this.inputType];
    }

    public broadcastIonChange(origin, event?:Event) {

        // if(this.lastBroadcast && new Date().getTime() - this.lastBroadcast < 1000 ){
        //    return;
        // this.lastBroadcastWithNumber++;
        //# IONCHANGE ANEH TRIGGER 4 KALI
        // console.log('broadcastIonChange', origin, this.name, this.value);
        // if (this.lastBroadcastWithNumber % 4 > 0) {
        //   return;
        // }
        // console.log('lastbroadcastWithnumber', this.lastBroadcastWithNumber);

        this.lastBroadcast = new Date().getTime();
        this.changeListener.next(this) //# my BaseForm

        if(this.inputType == InputType.file && event){

            this.formValueContainer[this.name] = event.target['files'][0];
            this.infoFileName = `File set. ${event.target['files'][0].name}`



        }


    }

    public broadcastNgChange(event, parentForm: NgForm) {

        if (this.inputType == InputType.text) {
            this.changeListener.next(this);
        }

        if (this.inputType == InputType.file) {


        }
    }


    private getReadOnlyForDate(){
        if(this.dateSetting.isTime){
            return this.value;
        }else{
            return this.getServerDateFormat();

        }
    }

    public getReadOnlyValue(): string {

        switch (this.inputType) {
            case InputType.date:
                return this.getReadOnlyForDate();
            case InputType.email:
            case InputType.number:
            case InputType.password:
            case InputType.text:
                return this.value !== '' ? this.value : "-";
            case InputType.select:

                var bank: string = "";

                //# get the label(key) if type select
                this.selectOptions.map((keyValue) => {
                    if (keyValue.value == this.value) {
                        bank = keyValue.key
                    }
                });
                return bank;

            default:
                return "-";
        }

    }

    public setFileAttachmentInfo(name: string, url: string) {
        name = !name ? "Attachment " : name;
        if (!url || url == "") {
            return;
        }
        this.attachmentInfo = {
            isSet: true,
            name: name,
            url: url,
        }

        return this;
    }

    public setIsRequired(isRequired: boolean) {

        this.rules.isRequired = isRequired;

        if (this.inputType == InputType.file) {
            if (this.attachmentInfo.isSet) {
                this.rules.isRequired = false;
            }
        }


        return this;
    }

    public setValue(value: string) {
        this.value = value;
        return this;
    }

    public getSelectOptionJsonOrigin() : KeyValueInterface{
        var filter = this.selectOptions.filter((data)=>{
            return data.value == this.value;
        });

        if(filter[0]){
            return filter[0];
        }else{
            return null;
        }
    }


}

export interface KeyValueInterface {


    value: any,
    key: string,
    order?: number,
    originJson?:any;
}

export interface InputRules {
    isRequired?: boolean,
    minlength?: number,
    maxlength?: number,
    pattern?: string,
    patternInformation?: string,
    max?: number
    min?: number
}

export interface InputStyle {
    label?: string,


}

export enum InputType {
    text, select, password, email, date, number, textarea, file,datetime, radio, autocomplete
}

export enum LabelType {
    inline, stacked


}

export interface DateSetting {
    min?: string | Date;
    max?: string | Date;
    displayFormat?: string;
    hourValues?: string;
    isTime?: boolean;
}

export interface SearchBarSetting {
    url: string;
    processData: (serverResponse: any) => KeyValueInterface[]
    httpParams: HttpParams;
    httpParamBindEvent: string[];
}

export interface ButtonSettingInterface {
    label: string;
    clickListener: ReplaySubject<BaseForm>;
    isHidden: boolean;
}

export interface AttachmentInfoInterface {
    isSet: boolean;
    name?: string;
    url?: string;
}

export interface AutoCompleteOptionInterface{
    config:ApiConfigInterface;
    searchValue: string;
    selected?: AutoCompleteKeyValueInterface;
    apiList?: AutoCompleteKeyValueInterface[];
    lastRequest: Date;
}

export interface AutoCompleteKeyValueInterface extends KeyValueInterface{
    display?:string;
}