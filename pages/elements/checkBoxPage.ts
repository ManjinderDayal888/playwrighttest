import {expect,Page,Locator} from '@playwright/test';

export class CheckBoxPage{  
  
    constructor(private page:Page){
      
    }   

    async open(){
      await this.page.goto('/checkbox');
      expect(this.page.getByRole('heading',{name:'Check Box'})).toBeVisible();
    }

    get expandAllButton():Locator{
      return this.page.getByRole('button',{name:'Expand all'});
    }   

    get collapseAllButton():Locator{
      return this.page.getByRole('button',{name:'Collapse all'});
    }
    async clickExpandAll(){
      await this.expandAllButton.click();
    }
    async clickCollapseAll(){
      await this.collapseAllButton.click();
    }
}