import Vue from 'vue'
import Router from 'vue-router'

import Platform from '@/components/platform/Platform'
import AccessData from '@/components/AccessData'

Vue.use(Router)

export default new Router({
    "mode": 'history',
    "routes": [
        {
            "path": '/',
            "name": 'platform',
            "components": {
                "platform": Platform
            },
            "children": [
                {
                    "path": '/des/access-data',
                    "name": AccessData,
                    "components": {
                        "workspace": AccessData
                    }
                }
            ]
        }
    ]
})
