import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { APIURL } from '../assets/constants';
import {Product} from '../types/product';

export const crawlData = createApi({
    reducerPath: 'crawlData',
    baseQuery: fetchBaseQuery({baseUrl: APIURL + 'api/'}),
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