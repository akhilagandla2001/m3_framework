import { expect } from "@playwright/test"
import { dropdown } from "../utils/dropdown"

export class leads{
    #lead
    #createlead
    #salutattiontype
    #firstname
    #lastname
    #company
    #save
    #validation
    constructor(page){
        this.#lead=page.getByRole('link',{name:'Leads'})
        this.#createlead=page.getByRole('img',{name:'Create Lead...'})
        this.#salutattiontype = page.locator('//select[@name="salutationtype"]')
        this.#firstname = page.locator('//input[@name="firstname"]')
        this.#lastname = page.locator('//input[@name="lastname"]')
        this.#company = page.locator('//input[@name="company"]')
        this.#save = page.locator('(//input[@title="Save [Alt+S]"])[1]')
        this.#validation =  page.locator('//span[@class="dvHeaderText"]')
    }
    async leadmethod(){
        await this.#lead.click()
    }
    async createlead(firstname,lastname,company){
       await this.#createlead.click()
       await dropdown(this.#salutattiontype,{value:'Ms.'})
       await this.#firstname.fill(firstname)
       await this.#lastname.fill(lastname)
       await this.#company.fill(company)
       await this.#save.click()
    }
    async validations(lastname){
        await expect(this.#validation).toContainText(lastname)
    }
}