export const post = async ({ url, body, success, failure, dispatch }) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const data = await res.json()
    dispatch({ type: success, data })
  } catch (e) {
    dispatch({ type: failure })
  }
}

export const get = async ({ url, body, success, failure, dispatch }) => {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')
      },
      body: JSON.stringify(body),
    })
    const data = await res.json()
    dispatch({ type: success, data })
  } catch (e) {
    dispatch({ type: failure })
  }
}

export const postForm = async ({ url, formData, success, failure, dispatch }) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')
      },
      body: urlencodeFormData(formData),
    })
    const data = await res.json()
    dispatch({ type: success, data })
  } catch (e) {
    dispatch({ type: failure })
  }
}



function urlencodeFormData(fd){
    var s = '';
    function encode(s){ return encodeURIComponent(s).replace(/%20/g,'+'); }
    for(var pair of fd.entries()){
        if(typeof pair[1]=='string'){
            s += (s?'&':'') + encode(pair[0])+'='+encode(pair[1]);
        }
    }
    return s;
}

