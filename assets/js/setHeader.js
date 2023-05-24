
async function check(){
  console.log("call the function");

  let token=localStorage.getItem("loginToken")

  if(token){
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('loginToken')}`;

  }else{
    window.location.replace("/auth/login")
  }
}





async function apiCall({url, method, body, headers}) {

return  fetch({}).then()

  
}
