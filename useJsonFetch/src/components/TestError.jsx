import React from 'react'
import { useJsonFetch } from '../hooks/useJsonFetch'

export const TestError = () => {
    const url = "http://localhost:7070/error"
    const opts = {
        method: "GET"
    }
    const [data, loading, error] = useJsonFetch(url, opts);
  return (
    <div>
        <div>
            Data: {data.status?data.status:"Error occured"}
        </div>
        <div>
            Error: {error? error: "None"}
        </div>
    </div>
  )
}
