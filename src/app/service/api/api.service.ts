import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {Headers} from '@angular/http';
import {UserService} from '../user/user.service';
import {HelperService, NotificationTypeInterface} from '../helper/helper.service';
import {forEach} from '@angular/router/src/utils/collection';
import {KeyValueInterface} from '../../components/floating-input/BaseForm';
import {MyHelper} from '../../MyHelper';
import {isObject} from 'util';

@Injectable()
export class ApiService {


    // public static BASE_API_URL:string = "http://192.168.1.9:8111/sewaRuang/api/";
    // public static BASE_API_URL: string = 'http://localhost/sewaRuang/api/';
    // public static BASE_URL: string = 'http://localhost/sewaRuang/';
    //
    //
    //
    public static BASE_API_URL: string = 'http://localhost/sm/api/';
    public static BASE_URL: string = 'http://localhost/sm/';
    // public static BASE_API_URL: string = 'https://bukitzaitunsm.com/api/';
    // public static BASE_URL: string = 'https://bukitzaitunsm.com/';

    public baseApiUrl = ApiService.BASE_API_URL;
    public baseUrl = ApiService.BASE_URL;

    public userService: UserService;

    constructor(public httpClient: HttpClient, public helperService: HelperService) {
    }

    public setUser(userService: UserService) {
        this.userService = userService;
    }

    private getHttpParams(object){

    }
    public get<T>(config: ApiConfigInterface, onFinish: (data: T) => void) {


        console.log('apiGet', config.url, config);

        var httpParams: HttpParams = new HttpParams();
        for (var key in config.params) {
            var value = config.params[key];
            // if(isObject(value)){
            //     var copyValue = []
            //     for(var key in value){
            //         copyValue[key] = value;
            //     }
            //     value = copyValue;
            //
            // }
            httpParams = httpParams.append(key, value);

        }
        // this.helperService.presentToast({title: 'Loading', message: config.toastMessage, type: NotificationTypeInterface.info});
        this.httpClient.get(config.url, {withCredentials: true, params: httpParams}).toPromise().then((result: T) => {
            // this.showServerResponse(result);

            if(!result['isSuccess'] && result['message']){
                this.showServerResponse(result);

            }
            onFinish(result);
        }).catch((rejected) => {
            console.log(rejected, config.url);
            if (rejected &&  (rejected.statusText && (rejected.statusText.toLowerCase().indexOf('unauthorized') > -1) || rejected.statusText.toLowerCase().indexOf('unauthenticated') > -1)) {
                this.userService.logout(false);
                //this.helperService.presentNotification('Not Authenticated', NotificationTypeInterface.danger);
                this.helperService.presentToast({message:"You are not authenticated", type: NotificationTypeInterface.danger});


            } else {
                //this.helperService.presentNotification('Cannot fulfill request', NotificationTypeInterface.danger);
                this.helperService.presentToast({message:"Network Error", type: NotificationTypeInterface.danger});

            }

        });
    }

    public post<T>(config: ApiConfigInterface, onFinish: (data: T) => void) {


        if(!config.isSilent){
            this.helperService.presentToast({title: 'Submiting action', message: config.toastMessage, type: NotificationTypeInterface.info});

        }
        var formData = new FormData();

        var httpHeaders = new HttpHeaders()
        httpHeaders.set("Content-Type", 'multipart/form-data');

        for(var key in config.params){
            formData.append(key, config.params[key]);
        }

        this.httpClient.post(config.url, formData, {withCredentials: true, headers:httpHeaders}).toPromise().then((result: T) => {
            this.showServerResponse(result);
            if(!result['isSuccess'] && result['message']){
                // this.showServerResponse(result);

            }
            onFinish(result);
        }).catch((rejected) => {
            console.log(rejected, config.url);
            if (rejected &&  (rejected.statusText && (rejected.statusText.toLowerCase().indexOf('unauthorized') > -1) || rejected.statusText.toLowerCase().indexOf('unauthenticated') > -1)) {
                this.userService.logout(false);
                this.helperService.presentToast({message:"You are not authenticated", type: NotificationTypeInterface.danger});


            } else {
                try{
                    if(rejected['error']){
                        var error = JSON.parse(rejected['error']);
                        for(var key in error){
                            var value = error[key];
                            this.helperService.presentToast({type: NotificationTypeInterface.danger, title: MyHelper.ucWord(key), message: value})
                        }
                    }else{
                        this.helperService.presentToast({message:"Network Error", type: NotificationTypeInterface.danger});

                    }
                }catch(e){

                }


                //this.helperService.presentNotification('Cannot fulfill request', NotificationTypeInterface.danger);

            }


        });
    }


    public multiDimensionalPost<T>(config: ApiConfigInterface, onFinish: (data: T) => void) {

        if(!config.isSilent){
            this.helperService.presentToast({title: 'Submiting action', message: config.toastMessage, type: NotificationTypeInterface.info});

        }
        this.httpClient.post(config.url, config.params, {withCredentials: true}).toPromise().then((result: T) => {
            this.showServerResponse(result);
            if(!result['isSuccess'] && result['message']){
                // this.showServerResponse(result);

            }
            onFinish(result);
        }).catch((rejected) => {
            console.log(rejected, config.url);
            if (rejected && (rejected.statusText && (rejected.statusText.toLowerCase().indexOf('unauthorized') > -1) || rejected.statusText.toLowerCase().indexOf('unauthenticated') > -1)) {
                this.userService.logout(false);
                this.helperService.presentToast({message:"You are not authenticated", type: NotificationTypeInterface.danger});


            } else {
                try{
                    if(rejected['error']){
                        var error = JSON.parse(rejected['error']);
                        for(var key in error){
                            var value = error[key];
                            this.helperService.presentToast({type: NotificationTypeInterface.danger, title: MyHelper.ucWord(key), message: value})
                        }
                    }
                }catch(e){

                }


                //this.helperService.presentNotification('Cannot fulfill request', NotificationTypeInterface.danger);
                this.helperService.presentToast({message:"Network Error", type: NotificationTypeInterface.danger});

            }


        });
    }


    private showServerResponse(result: any) {
        if (typeof result['isSuccess'] !== 'undefined' && typeof result['message'] !== 'undefined') {
            var isSuccess: boolean = this.helperService.parseBoolean(result['isSuccess']);
            var message: string = result['message'];
            if (message == '') {
                return;
            }
            var notificationType: NotificationTypeInterface = isSuccess ? NotificationTypeInterface.success : NotificationTypeInterface.danger;
            this.helperService.presentToast({title: 'Response', message: message, type: notificationType});

        }
    }


}


export interface ApiBaseResponseInterface {
    message: string;
    isSuccess: boolean;

}

export interface ApiPaginationResponseInterface<T> {
    current_page: number;
    data: T[];
    first_page_url: string
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url?: string;
    path: string;
    per_page: number;
    prev_page_url?: string;
    to: number;
    total: number;
}


export interface ApiConfigInterface {
    url: string;
    params?: any;
    toastMessage?: string;
    toastType?: NotificationTypeInterface;
    isSilent?:boolean;
}


export class FilterInterface {
    public cmbStatus: string = '';
    public page: number = 1;
    public searchValue: string = '';
    public cmbSearchBy: string = '';
    public cmbClass: string = '';
    public cmbBranch: string = '';
    public cmbRole: string = '';
    public isOpen: boolean = true;
    public cmbEventType:string = "";
}

export interface ApiFilterInterface {
    cmbStatus?: KeyValueInterface[];
    cmbClass?: KeyValueInterface[];
    cmbBranch?: KeyValueInterface[];
    cmbRole?: KeyValueInterface[];
    cmbSearchBy?: KeyValueInterface[];
    searchValue: string;
}

export interface NotificationInterface extends ApiBaseResponseInterface {

    data: {
        newPupil: number;
        // advertisement: number;
    }

}