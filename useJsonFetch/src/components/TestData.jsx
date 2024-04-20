import React from 'react'
import { useJsonFetch } from '../hooks/useJsonFetch'

export const TestData = () => {
    const url = "http://localhost:7070/data"
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
            Error: {error? error: "None"}
        </div>
    </div>
  )
}
