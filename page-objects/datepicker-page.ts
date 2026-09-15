import {Page} from '@playwright/test'

export class DatepickerPage{

    private readonly page:Page
    constructor (page:Page){
        this.page=page
    }

    async selectCommonDatePickerDateFrom(daysFromToday:number){
        
    }
}