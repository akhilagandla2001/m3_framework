import {test as base} from './login.js'
import { leads } from '../pages/lead.js'

export let test = base.extend({
    lead : async ({loginfixture},use) => {
        let leadobj = new leads(loginfixture)
        use(leadobj)
    }
})