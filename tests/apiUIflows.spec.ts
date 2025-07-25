import 'dotenv/config'
import {test, expect, APIRequestContext, request} from '@playwright/test'
import { DashboardPage } from '../page-objects/DashboardPage'

const BASE_URL = process.env.BASE_URL
const headers = JSON.parse(process.env.HEADERS_JSON || '{}')

let apiContext: APIRequestContext

test.beforeAll( async() => {
    apiContext = await request.newContext({
        baseURL: BASE_URL,
        extraHTTPHeaders: headers
    })
}
)

test.afterAll( async() => {
    await apiContext.dispose()
})
