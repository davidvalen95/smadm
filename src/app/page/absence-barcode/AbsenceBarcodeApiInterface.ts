import {ApiBaseResponseInterface} from '../../service/api/api.service';
import {UserDataInterface} from '../../service/user/user.service';
import {AbsenceDateInterface} from '../module/absence/AbsenceApiInterface';


export interface AbsenceBarcodeResponseInterface extends ApiBaseResponseInterface{



    data:{
        user?:UserDataInterface;
    }
}


export interface AbsenceBarcodeTopInterface extends ApiBaseResponseInterface {
    data:{
        latestDate: AbsenceDateInterface;
    }
}