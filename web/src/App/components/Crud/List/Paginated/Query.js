import React from 'react'
import {Query} from 'react-apollo'
import useDebounce from 'App/hooks/useDebounce'

export default function PaginatedQuery(props) {
  const [debouncedVariables, debounceLoading] = useDebounce(props.variables, 400)
  return (
    <Query
      fetchPolicy="network-only"
      query={props.query}
      variables={debouncedVariables}
      pollInterval={props.pollInterval}>
      {data => {
        const dataLoading =
          ((!data.data || !data.data.result) &&
            (data.networkStatus === 1 && Object.keys(data).length === 10)) ||
          data.networkStatus === 2

        const loading = dataLoading || debounceLoading
        return props.children({data, loading})
      }}
    </Query>
  )
}
