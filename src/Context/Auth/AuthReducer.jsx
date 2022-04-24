const AuthReducer = (authState, action) => {
    switch (action.type) {
        case 'login':
            return {
                login: true,
                token: action.payload.token,
                user: {
                    name: action.payload.user.name,
                    email: action.payload.user.email,
                    photo: action.payload.user.photo.secure_url,
                },
            };

        case 'logout':
            return {
                login: false,
                token: '',
                user: {
                    name: '',
                    email: '',
                    photo: '',
                },
            };
        default:
            return authState;
    }
};

export default AuthReducer;
