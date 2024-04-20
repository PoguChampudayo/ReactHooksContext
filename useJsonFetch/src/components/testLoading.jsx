import React from 'react'
import { useJsonFetch } from '../hooks/useJsonFetch'

export const TestLoading = () => {
    const url = "http://localhost:7070/loading"
    const opts = {
        method: "GET"
    }
    const [data, loading, error] = useJsonFetch(url, opts);
  return (
    <div>
        <div>
            Data: {data.status}
        </div>
        <div>
            Loading: {loading? "True": "False"}
        </div>
        <div>
            Error: {error? error: "None"}
        </div>
    </div>
  )
}
