import {test} from '../../fixtures/crmfixtures.js'
import leaddata from '../../testData/lead.json'

test('',async ({lead}) => {
    await lead.leadmethod()
    await lead.createlead(leaddata.firstname,leaddata.lastname,leaddata.company)
    await lead.validations(leaddata.lastname)
})