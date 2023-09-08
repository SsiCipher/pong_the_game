import LoginModal from "./LoginModal"

const LoginViewModal = () => {
    //get redirect value from the modal and join it with api endpoint  ( /api/auth/provider/login?redirect=blabla)
    const {redirect} = LoginModal()

    
    const googleLink = "/api/auth/google/login" + "?redirect="+ redirect
    const ftLink = "/api/auth/42/login" + "?redirect="+ redirect
    const discordLink = "/api/auth/discord/login" + "?redirect=" + redirect

    return {
        googleLink, ftLink, discordLink
    }
}

export default LoginViewModal