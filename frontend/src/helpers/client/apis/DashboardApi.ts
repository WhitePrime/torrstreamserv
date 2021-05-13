/* tslint:disable */
/* eslint-disable */
/**
 * Torrents Stream Server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime'
import {
    ApiErrorModel,
    ApiErrorModelFromJSON,
    ApiErrorModelToJSON,
    UsageModel,
    UsageModelFromJSON,
    UsageModelToJSON,
} from '../models'

/**
 *
 */
export class DashboardApi extends runtime.BaseAPI {
    /**
     */
    async getUsageRaw(): Promise<runtime.ApiResponse<UsageModel>> {
        const queryParameters: runtime.HTTPQuery = {}

        const headerParameters: runtime.HTTPHeaders = {}

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken
            const tokenString = typeof token === 'function' ? token('apiKey', []) : token

            if (tokenString) {
                headerParameters['Authorization'] = `Bearer ${tokenString}`
            }
        }
        const response = await this.request({
            path: `/api/usage`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        })

        return new runtime.JSONApiResponse(response, (jsonValue) => UsageModelFromJSON(jsonValue))
    }

    /**
     */
    async getUsage(): Promise<UsageModel> {
        const response = await this.getUsageRaw()
        return await response.value()
    }
}
