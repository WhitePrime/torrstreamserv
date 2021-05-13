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
import { ApiErrorModel, ApiErrorModelFromJSON, ApiErrorModelToJSON } from '../models'

export interface GetPlaylistRequest {
    torrent: string
    file?: string
    fileType?: string
    fileIndex?: string
}

export interface GetPlaylist2Request {
    torrent: string
    file?: string
    fileType?: string
    fileIndex?: string
}

export interface GetStreamRequest {
    torrent: string
    file?: string
    fileType?: string
    fileIndex?: string
}

export interface GetStream2Request {
    torrent: string
    file?: string
    fileType?: string
    fileIndex?: string
}

/**
 *
 */
export class StreamApi extends runtime.BaseAPI {
    /**
     * Returns [m3u multimedia playlist](https://en.wikipedia.org/wiki/M3U) of the torrent. Supports same parameters as stream endpoint.
     */
    async getPlaylistRaw(
        requestParameters: GetPlaylistRequest
    ): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters.torrent === null || requestParameters.torrent === undefined) {
            throw new runtime.RequiredError(
                'torrent',
                'Required parameter requestParameters.torrent was null or undefined when calling getPlaylist.'
            )
        }

        const queryParameters: runtime.HTTPQuery = {}

        if (requestParameters.file !== undefined) {
            queryParameters['file'] = requestParameters.file
        }

        if (requestParameters.fileType !== undefined) {
            queryParameters['fileType'] = requestParameters.fileType
        }

        if (requestParameters.fileIndex !== undefined) {
            queryParameters['fileIndex'] = requestParameters.fileIndex
        }

        const headerParameters: runtime.HTTPHeaders = {}

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken
            const tokenString = typeof token === 'function' ? token('apiKey', []) : token

            if (tokenString) {
                headerParameters['Authorization'] = `Bearer ${tokenString}`
            }
        }
        const response = await this.request({
            path: `/playlist/{torrent}`.replace(
                `{${'torrent'}}`,
                encodeURIComponent(String(requestParameters.torrent))
            ),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        })

        return new runtime.BlobApiResponse(response)
    }

    /**
     * Returns [m3u multimedia playlist](https://en.wikipedia.org/wiki/M3U) of the torrent. Supports same parameters as stream endpoint.
     */
    async getPlaylist(requestParameters: GetPlaylistRequest): Promise<Blob> {
        const response = await this.getPlaylistRaw(requestParameters)
        return await response.value()
    }

    /**
     * Returns [m3u multimedia playlist](https://en.wikipedia.org/wiki/M3U) of the torrent. Supports same parameters as stream endpoint.
     */
    async getPlaylist2Raw(
        requestParameters: GetPlaylist2Request
    ): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters.torrent === null || requestParameters.torrent === undefined) {
            throw new runtime.RequiredError(
                'torrent',
                'Required parameter requestParameters.torrent was null or undefined when calling getPlaylist2.'
            )
        }

        const queryParameters: runtime.HTTPQuery = {}

        if (requestParameters.torrent !== undefined) {
            queryParameters['torrent'] = requestParameters.torrent
        }

        if (requestParameters.file !== undefined) {
            queryParameters['file'] = requestParameters.file
        }

        if (requestParameters.fileType !== undefined) {
            queryParameters['fileType'] = requestParameters.fileType
        }

        if (requestParameters.fileIndex !== undefined) {
            queryParameters['fileIndex'] = requestParameters.fileIndex
        }

        const headerParameters: runtime.HTTPHeaders = {}

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken
            const tokenString = typeof token === 'function' ? token('apiKey', []) : token

            if (tokenString) {
                headerParameters['Authorization'] = `Bearer ${tokenString}`
            }
        }
        const response = await this.request({
            path: `/playlist`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        })

        return new runtime.BlobApiResponse(response)
    }

    /**
     * Returns [m3u multimedia playlist](https://en.wikipedia.org/wiki/M3U) of the torrent. Supports same parameters as stream endpoint.
     */
    async getPlaylist2(requestParameters: GetPlaylist2Request): Promise<Blob> {
        const response = await this.getPlaylist2Raw(requestParameters)
        return await response.value()
    }

    /**
     * Create a file stream from torrents by `torrent` parameter. By default the biggest file will be returned, but it is possible to select file manually using `file`, `fileType`, `fileIndex` parameters. Endpoint can be protected by passing signed payload with JWT token (`token` parameter).
     */
    async getStreamRaw(requestParameters: GetStreamRequest): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters.torrent === null || requestParameters.torrent === undefined) {
            throw new runtime.RequiredError(
                'torrent',
                'Required parameter requestParameters.torrent was null or undefined when calling getStream.'
            )
        }

        const queryParameters: runtime.HTTPQuery = {}

        if (requestParameters.file !== undefined) {
            queryParameters['file'] = requestParameters.file
        }

        if (requestParameters.fileType !== undefined) {
            queryParameters['fileType'] = requestParameters.fileType
        }

        if (requestParameters.fileIndex !== undefined) {
            queryParameters['fileIndex'] = requestParameters.fileIndex
        }

        const headerParameters: runtime.HTTPHeaders = {}

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken
            const tokenString = typeof token === 'function' ? token('apiKey', []) : token

            if (tokenString) {
                headerParameters['Authorization'] = `Bearer ${tokenString}`
            }
        }
        const response = await this.request({
            path: `/stream/{torrent}`.replace(
                `{${'torrent'}}`,
                encodeURIComponent(String(requestParameters.torrent))
            ),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        })

        return new runtime.BlobApiResponse(response)
    }

    /**
     * Create a file stream from torrents by `torrent` parameter. By default the biggest file will be returned, but it is possible to select file manually using `file`, `fileType`, `fileIndex` parameters. Endpoint can be protected by passing signed payload with JWT token (`token` parameter).
     */
    async getStream(requestParameters: GetStreamRequest): Promise<Blob> {
        const response = await this.getStreamRaw(requestParameters)
        return await response.value()
    }

    /**
     * Create a file stream from torrents by `torrent` parameter. By default the biggest file will be returned, but it is possible to select file manually using `file`, `fileType`, `fileIndex` parameters. Endpoint can be protected by passing signed payload with JWT token (`token` parameter).
     */
    async getStream2Raw(requestParameters: GetStream2Request): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters.torrent === null || requestParameters.torrent === undefined) {
            throw new runtime.RequiredError(
                'torrent',
                'Required parameter requestParameters.torrent was null or undefined when calling getStream2.'
            )
        }

        const queryParameters: runtime.HTTPQuery = {}

        if (requestParameters.torrent !== undefined) {
            queryParameters['torrent'] = requestParameters.torrent
        }

        if (requestParameters.file !== undefined) {
            queryParameters['file'] = requestParameters.file
        }

        if (requestParameters.fileType !== undefined) {
            queryParameters['fileType'] = requestParameters.fileType
        }

        if (requestParameters.fileIndex !== undefined) {
            queryParameters['fileIndex'] = requestParameters.fileIndex
        }

        const headerParameters: runtime.HTTPHeaders = {}

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken
            const tokenString = typeof token === 'function' ? token('apiKey', []) : token

            if (tokenString) {
                headerParameters['Authorization'] = `Bearer ${tokenString}`
            }
        }
        const response = await this.request({
            path: `/stream`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        })

        return new runtime.BlobApiResponse(response)
    }

    /**
     * Create a file stream from torrents by `torrent` parameter. By default the biggest file will be returned, but it is possible to select file manually using `file`, `fileType`, `fileIndex` parameters. Endpoint can be protected by passing signed payload with JWT token (`token` parameter).
     */
    async getStream2(requestParameters: GetStream2Request): Promise<Blob> {
        const response = await this.getStream2Raw(requestParameters)
        return await response.value()
    }
}
