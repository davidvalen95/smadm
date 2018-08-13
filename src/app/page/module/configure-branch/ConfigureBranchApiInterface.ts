import {PhotosDataInterface} from '../../../service/user/user.service';
import {ApiBaseResponseInterface} from '../../../service/api/api.service';
import {BranchInterface} from '../branch/BranchApiInterface';


export interface BranchEventInterface{


    id:string;
    title:string;
    description:string;
    youtubeLink?:string;
    get_photos:PhotosDataInterface[];


}


export interface PlanningInterface{


    id:string;
    title:string;
    description:string;
    dueDate?:string;


}

export interface ConfigureBranchDetailTopInterface extends ApiBaseResponseInterface{

    data:{
        branch:BranchInterface;
        postMaxSize:number;
    }


}