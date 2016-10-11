UserModel.$inject = ['$http'];
export default UserModel;

function UserModel($http) {

  const model = {
      signUp,
      logIn,
      logOut,
      getAll,
      getOne,
      edit,
  };

  function signUp(userData) {
    return $http.post('/api/users/signup', userData)
    .then(function(res) {
      if (res.data.created) {
        return res.data
      }
    })
    .catch(function(err) {
      console.log('Users Api Err:', err);
      return err.data
    })
  }
  
  function logIn(userData) {
    return $http.post('/api/users/login', userData)
    .then(function (res) {
      if (res.data.loggedIn) {
        return res.data
      }
    })
    .catch(function(err) {
      console.log('Users Api Err:', err);
      return err.data
    })
  }

  function logOut() {
    return $http.post('/api/users/logout')    
  }

  function getAll() {
    return $http.get('/api/users/')  
    .then(function(res) {
      return res.data
    })
    .catch(function(err) {
      console.log('Users Api Err:', err);
      return err.data
    })
  }

  function getOne(userId) {
    return $http.get(`/api/users/${userId}`)
    .then(function(res) {
      return res.data
    })
    .catch(function(err) {
      console.log('Users Api Err:', err);
      return err.data
    })
  }

  function edit(userData) {
    return $http.put(`/api/users/${userData._id}`, userData)
    .then(function(res) {
      return res.data
    })
    .catch(function(err) {
      console.log('Users Api Err:', err);
      return err.data
    });
  };
 
  return model;
}
