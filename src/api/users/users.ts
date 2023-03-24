const baseUrl = 'http://34.240.10.208:6000/'
const headers = {
    Prefer: 'dynamic=true',
    Authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJWR3BmeFRnSUZLTExFcU5JZkJzT21pU2w2SkVfODVHTThtRzZHc196VTNRIn0.eyJleHAiOjE2NzkzMDQyODksImlhdCI6MTY3OTMwMzk4OSwianRpIjoiNmY3OWJiZTItNWU3ZS00NTVhLTk5MzgtY2VmMDIyZjU0NWE1IiwiaXNzIjoiaHR0cDovL2VjMi01Mi0xNy00Mi01OS5ldS13ZXN0LTEuY29tcHV0ZS5hbWF6b25hd3MuY29tOjgwOTAvYXV0aC9yZWFsbXMvVGFza01hbmFnZXIiLCJhdWQiOiJ0YXNrTWFuYWdlciBDbGllbnQiLCJzdWIiOiIxYmRhZDg4Zi1iNzZhLTQ2N2QtOGE2OC05MjE0OWY1NTg3ZDMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJrb25nIiwic2Vzc2lvbl9zdGF0ZSI6IjRiOTYyNWFlLWJmNjYtNGEyYS1iNTFmLTQwOWY3NGQ0NjQ2NiIsImFjciI6IjEiLCJzY29wZSI6InRhc2tNYW5hZ2VyIiwic2lkIjoiNGI5NjI1YWUtYmY2Ni00YTJhLWI1MWYtNDA5Zjc0ZDQ2NDY2IiwiVGFza01hbmFnZXIiOnsiZW1wbG95ZWVJZCI6Ii0xIiwiUm9sZXMiOlsiYWRtaW4iLCJ1c2VyIl19LCJncm91cCI6WyIvVGFzayBNYW5hZ2VyL2FkbWluaXN0cmFkb3JlcyJdLCJ1c2VybmFtZSI6InVzdWFyaW8yIn0.TVfUlCcRYOMdenazJRxybuPHLqhhP3cP9y-tGm4io8aYQQk_Hht6mXVjx0W9KBD4NmuyiNHmm6mbFgogIYhO8QnzCAdF4GPBjnD_Wn4j9H5hXq_ZwOoMa3hk5YjbMJ2kZt9eE05oA-pJETpxT41uUJPcBD5cj_t315uF3Dg6t4on5ScukefjRXtuPM_UJJvBMoj5WpidfCZLu1Cohr9UF6H7IkUktOTCF7PihQ4YneXIhLUlq-eudbeH-z8Qh1bk4qt3WIQhFjusyLd3g_QL9NYDAwTbl6cqq4KQT2zvzOdeFvdxWAX3EVVxUs-laBW_xsLL3Urth7M8sn9Ico4DNA',
}

export type User = {
    id: string
    username: string
    firstName: string
    lastName: string
    lastName2: string
    phone: string
    nif: string
}

export async function getUsers(): Promise<User[]> {
    return fetch(`${baseUrl}`, {
        method: 'GET',
        headers,
    })
        .then((r) => r.json())
        .then((json: { data: User[] }) => json.data)
}

export async function deleteUser(userId: string) {
    return fetch(`${baseUrl}/${userId}`, { method: 'DELETE', headers }).then(
        (r) => r.json()
    )
}

export async function createUser(user: Omit<User, 'id'>) {
    return fetch(`${baseUrl}`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers,
    }).then((r) => r.json())
}

export async function updateUser(user: User) {
    return fetch(`${baseUrl}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers,
    }).then((r) => r.json())
}
