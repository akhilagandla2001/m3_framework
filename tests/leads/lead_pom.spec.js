import {test} from '@playwright/test'
import { login } from '../../pages/login'
import logindata from '../../testData/login.json'
import { leads } from '../../pages/lead'
import leaddata from '../../testData/lead.json'

test('lead with pom ',async ({page}) => {
    let loginobj = new login(page)
    await loginobj.launch(logindata.url)
    await loginobj.actions(logindata.username,logindata.password)
    let leadobj = new leads(page)
    await leadobj.leadmethod()
    await leadobj.createlead(leaddata.firstname,leaddata.lastname,leaddata.company)
    await leadobj.validations(leaddata.lastname)
})