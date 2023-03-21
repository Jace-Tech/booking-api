const { CREATE_ACCOUNT_ENDPOINT, SIGN_IN_ENDPOINT } = require("./base")


export const handleCreateAccount = async (data) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }

  try {
    const request = await fetch(CREATE_ACCOUNT_ENDPOINT, options);
    const response = await request.json();
    console.log(response);
    return response
  } catch (error) {
    console.log({error})
    return {success: false, message: error.message, data: null}
  }

}

export const handleSignInAccount = async (data) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }

  try {
    const request = await fetch(SIGN_IN_ENDPOINT, options);
    const response = await request.json();
    console.log(response);
    return response
  } catch (error) {
    console.log({error})
    return {success: false, message: error.message, data: null}
  }

}