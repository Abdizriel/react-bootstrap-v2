import { useQuery, useApolloClient } from '@apollo/react-hooks'
import isNil from 'lodash/isNil'

export default function useCacheQuery(query: any, variables: any) {
  const client = useApolloClient()
  let data = null
  let loading = true
  let error = null

  try {
    data = client.readQuery({
      query,
      ...(!isNil(variables) ? { variables } : {})
    })
    loading = false
  } catch (e) {
    const {
      data: queryData,
      loading: queryLoading,
      error: queryError
    } = useQuery(query, { variables, fetchPolicy: 'network-only' })
    data = queryData
    loading = queryLoading
    error = queryError

    if (!isNil(data)) {
      client.writeQuery({
        query,
        variables,
        data
      })
    }
  }

  return { data, loading, error }
}
