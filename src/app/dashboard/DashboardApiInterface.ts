import {ApiBaseResponseInterface, ApiPaginationResponseInterface} from '../service/api/api.service';
import {BranchInterface} from '../page/module/branch/BranchApiInterface';
import {UserHistoryInterface} from '../page/profile/ProfileApiInterface';
import {ThreadInterface} from '../page/thread/ThreadApiInterface';
import {AbsenceDateInterface} from '../page/module/absence/AbsenceApiInterface';


export interface AppTopInterface extends ApiBaseResponseInterface{



    data:{
        activePupil: number;
        offPupil: number;
        branchSummary: AbsenceDateInterface[][];
        histories: ApiPaginationResponseInterface<UserHistoryInterface>;
        filter:{
            cmbEventType
        }
        thread: ApiPaginationResponseInterface<ThreadInterface>
        isCanHistory:boolean;
    }

}