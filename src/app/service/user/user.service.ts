import {Injectable} from '@angular/core';
import {ApiBaseResponseInterface, ApiConfigInterface, ApiService, NotificationInterface} from '../api/api.service';
import {isSuccess} from '@angular/http/src/http_utils';
import {MyLocalStorageService} from '../my-local-storage/my-local-storage.service';
import {HelperService, NotificationTypeInterface} from '../helper/helper.service';
import {BranchInterface, BranchUserInterface} from '../../page/module/branch/BranchApiInterface';
import {UserHistoryInterface} from '../../page/profile/ProfileApiInterface';
import {KeyValueInterface} from '../../components/floating-input/BaseForm';

@Injectable()
export class UserService {


    public userData: UserDataInterface = new UserDataInterface();
    public token: string;
    public isLoggedIn: boolean = false;
    public static staticApiService:ApiService = null;
    public notification:NotificationInterface;

    constructor(public apiService: ApiService,public localStorage:MyLocalStorageService, public helperService:HelperService) {
        UserService.staticApiService = apiService;
    }



    public loginLocalStorage(){
        if(this.localStorage.getEmail() && this.localStorage.getPassword()){
            this.apiExecuteLogin(this.localStorage.getEmail(), this.localStorage.getPassword());

        }
    }


    public isMe(id:number){
        return id == this.userData.id;
    }

    public apiExecuteLogin(email: string, password: string, ) {
        var url = `${ApiService.BASE_API_URL}user/login`;
        var params = {email: email, password: password};

        var config: ApiConfigInterface = {
            url:url,
            params:params,
            toastMessage: "Logging in",
        }

        this.apiService.post<LoginInterface>(config, (response: LoginInterface) => {

            if (response.isSuccess) {
                this.userData = response.data.user;
                this.token = response.data.token;
                this.isLoggedIn = true;
                this.localStorage.setEmail(email);
                this.localStorage.setPassword(password);
                //this.helperService.presentNotification(`Welcome back ${response.data.allUser.name}`);
                console.log('userLoggedIn',this);
            }else{
                //this.helperService.presentNotification("Wrong username or password", NotificationTypeInterface.danger);
            }

        })

    }


    public logout(isWithApi:boolean = true) {
        this.isLoggedIn = false;
        this.token = '';
        this.userData = new UserDataInterface();
        this.localStorage.setPassword(null);
        this.localStorage.setEmail(null);
        this.notification = null;
        if(isWithApi){
            this.apiExecuteLogout();

        }
        console.log('logout');
    }

    apiExecuteLogout(){
        this.apiService.get({url: `${ApiService.BASE_API_URL}user/logout`},()=>{

        });
    }


    public static apiExecuteGetUserById(id, onFinish: (data:UserDataInterface)=>void){
        var config:ApiConfigInterface = {
            url: ApiService.BASE_API_URL + "user/detail",
            params:{
                id: id
            },
            isSilent: true,
        }

        if(this.staticApiService) {
            this.staticApiService.post<UserDetailSearchInterface>(config,(response: UserDetailSearchInterface)=>{
                if(response.data.user){
                    onFinish(response.data.user);

                }
            });
        }else{
            console.log('ApiServiceError');
        }


    }

}


export interface LoginInterface extends ApiBaseResponseInterface {

    data: {
        token: string,
        user: UserDataInterface,
    }


}


export class UserDataInterface{

    isSuccess:boolean = false;
    message:string = "";

    email: string = "";
    id: number = -1;
    name: string = "";
    birthDate: string = "";
    reset: number =-1;
    phone: string = "";
    address:string = "";
    created_at:string = "";
    nbg:string = "";

    get_previledge? : PreviledgeInterface = {key:"", value:""};
    get_photo?: PhotosDataInterface;


    get_branch_user?:BranchUserInterface[];
    get_histories?:UserHistoryInterface[];
    get_me_as_head?:BranchInterface;
    get_me_as_pupil_scores?: ScoreInterface[];
    get_me_as_teacher_scores?: ScoreInterface[];


}

export interface PhotosDataInterface{
    path:string;
    nameSm:string;
    nameLg:string;
}

export interface ScoreInterface{
    created_at:string;
    description:string;
    get_pupil:UserDataInterface;
    get_teacher:UserDataInterface;
}
export interface PreviledgeInterface extends KeyValueInterface{

    isCanConfigureBranch?: boolean;
    allUserProfile?: boolean;
    pupilProfile?: boolean;
    pupilScore?: boolean;
    website?: boolean;


}

export interface UserDetailSearchInterface extends ApiBaseResponseInterface{

    data: {
        user: UserDataInterface;
    }


}
