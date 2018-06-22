import {ApiBaseResponseInterface, ApiPaginationResponseInterface} from '../service/api/api.service';
import {BranchInterface, BranchSummaryInterface} from '../page/module/branch/BranchApiInterface';
import {UserHistoryInterface} from '../page/profile/ProfileApiInterface';
import {ThreadInterface} from '../page/thread/ThreadApiInterface';


export interface AppTopInterface extends ApiBaseResponseInterface{



    data:{
        activePupil: number;
        offPupil: number;
        branchSummary: BranchSummaryInterface;
        histories: ApiPaginationResponseInterface<UserHistoryInterface>;
        filter:{
            cmbEventType
        }
        thread: ApiPaginationResponseInterface<ThreadInterface>
        isCanHistory:boolean;
    }

}