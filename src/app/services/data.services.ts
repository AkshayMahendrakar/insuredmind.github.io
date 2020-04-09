import { Injectable } from '@angular/core';
import { AjaxService } from './ajax.service';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    constructor(private ajaxService: AjaxService) { 
    }

   public getlogin(data){
        const url = '';
        let config = {
            url: url,
            data:data
        }
        var test = this.ajaxService.get(config)
        console.log("test",test)
        return this.ajaxService.get(config)
    }
}