import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import get from 'lodash/get'

import { View } from './View'
import { ME } from './query'

export const Container: React.FC = () => {
    // const { data, error, loading} = useQuery(ME)

    return (
        <View 
            account={null}
            error={null}
            isLoading={false}
            // account={get(data, 'me', null)}
            // error={error}
            // isLoading={loading}
        />
    )
}