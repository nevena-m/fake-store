import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const fakeStoreBaseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8080/',
})

export default fakeStoreBaseQuery;