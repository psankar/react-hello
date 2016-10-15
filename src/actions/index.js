export const selectUser = (user) => {
    console.log(user.Name);

    return {
        type: "USER_SELECTED",
        payload: user
    }
};