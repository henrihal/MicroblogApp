const baseUrl = 'http://localhost:5001/api/login'

const login = async (userCredentials: { email: string, password: string }) => {
    try {
        const response = await fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify({ email: userCredentials.email, password: userCredentials.password })
        })
        if (!response.ok) {
            return new Error(`Response status: ${response.status}`)
        }
        const result = await response.json()
        return {
            token: result.token,
            user: {
                id: result.user.id,
                email: result.user.email
            }
        }

    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message)
        }
    }

}
export default { login }