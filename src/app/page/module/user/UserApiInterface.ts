import {ApiBaseResponseInterface, ApiFilterInterface, ApiPaginationResponseInterface} from '../../../service/api/api.service';
import {UserDataInterface} from '../../../service/user/user.service';
import {KeyValueInterface} from '../../../components/floating-input/BaseForm';


export interface UserListTopInterface extends ApiBaseResponseInterface{

    data:{
        filter:ApiFilterInterface;
        selectRoles: KeyValueInterface[];
        selectClasses: KeyValueInterface[];
        branches: KeyValueInterface[];
        users: ApiPaginationResponseInterface<UserDataInterface>;
    }



}