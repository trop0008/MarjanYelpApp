export function getRepos(response) {
  return{
    type: 'Get_Repos',
    payload: response
  }
}

export function getRepoThunk() {
  return (dispatch)=> {
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch(fetchList(position.coords.latitude, position.coords.longitude));
            
      },
      (error) => {
        console.log("Error", error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    
    
}}

export function repoSelected(repo){
  return{
    type: 'Repo_Selected',
    payload: repo
  }
}



export function fetchList(lat, long) {
  return (dispatch) => {
    
    
    let myUrl = 'https://api.yelp.com/v3/businesses/search?term=delis&sort_by=distance&latitude=' + lat + '&longitude=' + long ;
    console.log(myUrl);
    fetch( myUrl, {
  method: 'GET',
  headers: {
      Authorization: 'Bearer q4rkX-9VHY8w-unsGSj5AFkYJnT6VBU_NdeMabv_Irq78I4bJqhIW8PqAtg0mpRvg3biUA8glct8Y5ybA3X0pG1BA2jvLkklhfKjW-xn3Fvcxi7JdQSBeG_B8gdJWnYx'
    
  },
  
})
    .then(e => e.json())
      .then(function(response){
        var arr = response.businesses;
        dispatch(getRepos(arr))
      }).catch((error) => {
           console.error("Error", error);
       });
  }
  
}