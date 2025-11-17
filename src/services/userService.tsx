const baseUrl = 'http://localhost:5001/api/user'

const getUserName = async (id: number) => {

    try {
        const response = await fetch(baseUrl + `/${id}`)
        if (!response.ok) {
            throw new Error(`Reponse status: ${response.status}`)
        }
        const result = await response.json()


        return result.data.name
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message)
        }
    }
}


const create = async (newUser: { name: string, email: string, password: string }) => {
    try {
        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const result = await response.json()
        return result.data
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message)
        }
    }
}

export default { getUserName, create }