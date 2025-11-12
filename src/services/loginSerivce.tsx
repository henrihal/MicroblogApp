const baseUrl = 'http://localhost:5001/api/login'

const login = async (userCredentials: { email: string, password: string }) => {
    try {
        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userCredentials })
        })
        if (!response.ok) {
            throw new Error(`Login failed with status: ${response.status}`)
        }
        const result = await response.json()

        return result

    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message)
        }
    }

}
export default { login }