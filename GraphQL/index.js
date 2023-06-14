const { request, gql } = require('graphql-request')

const endpoint = 'https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr'

const query = gql`
    {
        Movie(title: "Inception") {
            releaseDate
            actors {
                name
            }
        }
    }
`

request(endpoint, query).then((data) => console.log(data))
