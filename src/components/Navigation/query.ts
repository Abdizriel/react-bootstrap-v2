import gql from 'graphql-tag'

export const ME = gql`
    {
        me {
            id
            name
            email
        }
    }
`;