import { NgModule }      from '@angular/core';
import {IsLoggedInPipe} from './isLoggedIn/is-logged-in.pipe';
import { UcWordPipe } from './uc-word/uc-word.pipe';
import { KeepAsHtmlPipe } from './keep-as-html/keep-as-html.pipe';
import { StatusParsingPipe } from './status-parsing/status-parsing.pipe';
import {KeepAsSrcPipe} from './keep-as-src/keep-as-src.pipe';


@NgModule({
    imports:        [],
    declarations:   [
        IsLoggedInPipe,
        UcWordPipe,
        KeepAsHtmlPipe,
        StatusParsingPipe,
        KeepAsSrcPipe,
    ],
    exports:        [
        IsLoggedInPipe,
        UcWordPipe,
        KeepAsHtmlPipe,
        StatusParsingPipe,
        KeepAsSrcPipe,


    ],
})

export class PipeModule {

}