
const baseUrl = 'http://localhost:5001/api/post'

const getAll = async ({ user_id }: { user_id?: string } = {}) => {
    const userParam = user_id ? `&user_id=${user_id}` : ''
    try {
        const response = await fetch(`${baseUrl}?limit=50${userParam}`)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const result = await response.json()
        return result.data.posts
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message)
        }

    }

}

const getBySearch = async(query: string) => {
    try {
        const response = await fetch(`${baseUrl}/search?search=${query}`)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const results = await response.json()

        return results.data
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message)
        }
    }
}

export default {getAll, getBySearch}