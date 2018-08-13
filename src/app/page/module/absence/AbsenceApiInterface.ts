import {ApiBaseResponseInterface, ApiPaginationResponseInterface} from '../../../service/api/api.service';
import {BranchInterface, BranchUserInterface} from '../branch/BranchApiInterface';
import {KeyValueInterface} from '../../../components/floating-input/BaseForm';
import {UserDataInterface} from '../../../service/user/user.service';

export interface AbsenceListTopInterface extends ApiBaseResponseInterface{


    data: {
        branch: BranchInterface;
        isCanAbsence:boolean ;
        userAbsenceRecords: ApiPaginationResponseInterface<UserAbsenceRecordInterface>;
        absenceDatesNotDone: AbsenceDateInterface[];
        absenceDateRecords: AbsenceDateInterface[][];
    };
}

export interface UserAbsenceRecordInterface{

    id:number;
    created_date:string;
    reason:string;
    branchUser:BranchUserInterface;
    absenceBranch: AbsenceBranchInterface;
    isFollowedUp:boolean;
    get_branch_user: BranchUserInterface;
}

export interface AbsenceBranchInterface{

    id:number;
    isDone:boolean;
    isPupil:boolean;

    get_select_class:KeyValueInterface;
    get_branch:BranchInterface;
    get_absence_date: AbsenceDateInterface;
    get_user_absence_record: UserAbsenceRecordInterface[] ;

    get_user_commiter: UserDataInterface;

}

export interface AbsenceDateInterface{
    created_date:string;
    id:number;
    targetDate:string;
    get_absence_branches: AbsenceBranchInterface[];

    notYetDone?:number;
    totalAbsence?: number;
    totalPupil?: number;
    notYetFollowedUp?:number;

    branches: BranchForSummaryInterface[];
}

export interface BranchForSummaryInterface extends  BranchInterface{
    totalAbsence: number;
    totalNotDone: number;
    totalPupil: number;
    availablePercentage: number;
    notYetFollowedUp:number;
    isPupil:boolean;
}