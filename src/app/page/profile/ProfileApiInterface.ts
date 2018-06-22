import {UserDataInterface} from '../../service/user/user.service';
import {KeyValueInterface} from '../../components/floating-input/BaseForm';
import {ApiBaseResponseInterface} from '../../service/api/api.service';




export interface ProfileTopInterface extends ApiBaseResponseInterface{

    data?:{
        user: UserDataInterface;
        isCanEditProfile:boolean;
        isCanScore: boolean;
        isCanEditNbg:boolean ;
        isCanChangePassword:boolean;
    }

}


export interface UserHistoryInterface{

    id:number;
    created_at:string;

    description:string;
    get_user:UserDataInterface;
    get_event:KeyValueInterface;

}


