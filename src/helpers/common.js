export const setCityData = (cityData) => {
  sessionStorage.setItem('cityData', JSON.stringify(cityData));
}

export const getCityData = () => {
  const userStr = sessionStorage.getItem('cityData');
  if (userStr) return JSON.parse(userStr);
  else return null;
}


export const setExploreData = (exploreData) => {
    sessionStorage.setItem('exploreData', JSON.stringify(exploreData));
  }

export const getExploreData = () => {
    const exploreStr = sessionStorage.getItem('exploreData');
    if (exploreStr) return JSON.parse(exploreStr);
    else return null;
}


export const setSearchData = (lat,lng) => {
  sessionStorage.setItem('latitude', JSON.stringify(lat));
  sessionStorage.setItem('longitude', JSON.stringify(lng));

}

export const getLatitude = () => {
  const latStr = sessionStorage.getItem('latitude');
  if (latStr) return JSON.parse(latStr);
  else return null;
}
export const getLongitude = () => {
  const lngStr = sessionStorage.getItem('longitude');
  if (lngStr) return JSON.parse(lngStr);
  else return null;
}

export const setUserId = (userId) => {
  sessionStorage.setItem('userId', JSON.stringify(userId));
}

export const getUserId= () => {
  const userIdStr = sessionStorage.getItem('userId');
  if (userIdStr) return JSON.parse(userIdStr);
  else return null;
}

export const removeUserSession = () => {
  //sessionStorage.removeItem('token');
  sessionStorage.removeItem('userId');
  sessionStorage.removeItem('username');

}

export const setUsername = (username) => {
  sessionStorage.setItem('username', JSON.stringify(username));
}

export const getUsername= () => {
  const usernameStr = sessionStorage.getItem('username');
  if (usernameStr) return JSON.parse(usernameStr);
  else return null;
}