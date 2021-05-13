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
    SuccessModel,
    SuccessModelFromJSON,
    SuccessModelToJSON,
} from '../models'

/**
 *
 */
export class AuthApi extends runtime.BaseAPI {
    /**
     */
    async authRaw(): Promise<runtime.ApiResponse<SuccessModel>> {
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
            path: `/api/auth`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        })

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessModelFromJSON(jsonValue))
    }

    /**
     */
    async auth(): Promise<SuccessModel> {
        const response = await this.authRaw()
        return await response.value()
    }
}
