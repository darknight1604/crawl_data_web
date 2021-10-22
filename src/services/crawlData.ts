import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Product} from '../types/product';

export const crawlData = createApi({
    reducerPath: 'crawlData',
    baseQuery: fetchBaseQuery({baseUrl: 'https://d980-42-114-225-40.ngrok.io/api/'}),
    endpoints: (builder) => ({
        getDataCollection: builder.query<Array<Product>, void>({
            query: () => `crawl-data/0`,
          }),
        getDataSearchView: builder.query<Array<Product>, void>({
            query: () => `crawl-data/1`,
          }),
        getDataSoldOut: builder.query<Array<Product>, void>({
            query: () => `crawl-data/2`,
          }),  
    })
})

export const {useGetDataCollectionQuery , useGetDataSearchViewQuery, useGetDataSoldOutQuery } = crawlData