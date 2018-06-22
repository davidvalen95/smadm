import {UserDataInterface} from '../../service/user/user.service';
import {ApiBaseResponseInterface} from '../../service/api/api.service';
import {AttachmentInfoInterface} from '../../components/floating-input/BaseForm';


export interface ThreadInterface{

    id:number;
    updated_at:string;
    created_at:string;


    title:string;
    get_replies: ThreadReplyInterface;
    get_last_reply: UserDataInterface;
    get_creator: UserDataInterface;


    firstReply: ThreadReplyInterface;
    isAlreadyRead:boolean;

}


export interface ThreadDetailTopInterface extends ApiBaseResponseInterface{

    data?:{
        thread: ThreadInterface;
    }

}


export interface ThreadReplyInterface{
    created_at:string;

    content:string;

    get_user:UserDataInterface;

    get_attachment: ThreadAttachmentInterface;
}

export  interface ThreadAttachmentInterface{

    path: string;
    name: string;

}