import React from 'react'

function form(isLoggedIn) {
if(isLoggedIn.isLoggedIn){
  return <h1>Welcome back!</h1>
}
else{
  return <h1>Please sign up.</h1>
}

}
export default form
