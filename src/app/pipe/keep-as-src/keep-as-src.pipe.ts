import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'keepAsSrc'
})
@Injectable()
export class KeepAsSrcPipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) {

    }




    transform(value: any, args?: any): any {
      console.log('keepAsSrc', value);
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
