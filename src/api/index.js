const baseURL = 'https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-PT'

export const getPosts = async(token) => {
    try {
        const response = await fetch(`${baseURL}/posts`,{
          headers: {
            'Contect-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        const results = await response.json();
        return results;
    }catch(error) {
        console.log('error getting all posts')
    }
}

export const registerUser = async(username, password) => {
    try {
        const response = await fetch(`${baseURL}/users/register`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: {
                username: username,
                password: password
              }
            })
          })
          const result = await response.json();
          return result;

    } catch(error){
        console.log('error registering user')
    }
}

export const userLogin = async(username, password) => {
  try{
    const response = await fetch (`${baseURL}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    })
    const result = await response.json();
    return result;
  } catch(error){
    console.log('error signing in')
  }
}

export const getUserDetails = async (token) => {
  try{
    const response = await fetch(`${baseURL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    const result = await response.json();
    return result;
  } catch (error){
    console.log('error getting users details')
  }
}

export const createPost = async (token, {title, description, price, location, willDeliver}) => {
  try{
    const response = await fetch(`${baseURL}/posts`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    post: {
      title,
      description,
      price,
      location,
      willDeliver
    }
  })
})
  const result = await response.json();
  return result;
  } catch (error) {
    console.log('error creating post')
  }
}

export const deletePost = async (token, _id) => {
  try{
    const response = await fetch(`${baseURL}/posts/${_id}`, {
  method: "DELETE",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
})
  const result = await response.json();
  return result;
  } catch (error){
    console.log('error deleting post')
  }
}

export const postMessage = async ({postID, token, message}) => {
  try{
    const response = await fetch(`${baseURL}/posts/${postID}/messages`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    message
  })
})
 const result = await response.json();
 return result;
  }catch(error){
    console.log('error creating message')
  }
}

export const updatePost= async ({token, title, description, price, location, willDeliver, _id}) => {
  try{
    const response = await fetch(`${baseURL}/posts/${_id}`, {
  method: "PATCH",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    post: {
      title,
      description,
      price,
      location,
      willDeliver
    }
  })
})
  const result = await response.json();
  return result;
  }catch(error){
    console.log('error updating post')
  }
}