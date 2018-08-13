import {UserDataInterface} from '../../../service/user/user.service';
import {KeyValueInterface} from '../../../components/floating-input/BaseForm';
import {ApiBaseResponseInterface, ApiFilterInterface, ApiPaginationResponseInterface} from '../../../service/api/api.service';
import {AbsenceDateInterface} from '../absence/AbsenceApiInterface';
import {BranchEventInterface, PlanningInterface} from '../configure-branch/ConfigureBranchApiInterface';


export interface BranchInterface{
    id:string;
    name:string;
    address:string;

    get_head:UserDataInterface;
    get_owner:UserDataInterface;

    get_users_as_teacher:BranchUserInterface[];
    get_users_as_pupil:BranchUserInterface[];



    //# untuk absensi, jadi hanya dapet target class itu saja
    get_branch_users:BranchUserInterface[];

    //# untuk branchEvent
    get_branch_events: BranchEventInterface[];

    get_plannings: PlanningInterface[];

}




export interface BranchUserInterface{

    id:number;
    isActive:boolean;
    dateIn:string;
    dateOut:string;
    get_user:UserDataInterface;
    get_branch:BranchInterface;
    get_role:KeyValueInterface;
    get_class:KeyValueInterface;


}


export interface BranchListTopInterface extends ApiBaseResponseInterface{

    data:{
        branches: ApiPaginationResponseInterface<BranchInterface>;
        myBranchUsers: BranchUserInterface[];
    }



}

export interface BranchDetailTopInterface extends ApiBaseResponseInterface{

    data?:{
        branch?:BranchInterface;
        selectClass?:KeyValueInterface[];

        isCanEditProfile:boolean;
        isCanAddTeacher:boolean;
        isCanAddPupil:boolean;
        isCanEditPupil:boolean;
        isCanAbsence:boolean;

        isCanConfigureWebBranch:boolean;
    }



}