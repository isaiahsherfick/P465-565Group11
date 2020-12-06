export const setCityData = (cityData) => {
  sessionStorage.setItem('cityData', JSON.stringify(cityData));
}

export const setmapCityData = (mapcityData) => {
  sessionStorage.setItem('mapcityData', JSON.stringify(mapcityData));
}
export const getmapCityData = () => {
  const userStr = sessionStorage.getItem('mapcityData');
  if (userStr) return JSON.stringify(userStr);
  else return null;
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

export const getItinerary = () => {
  const userStr = sessionStorage.getItem('Itinerary');
  if (userStr) return JSON.parse(userStr);
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
  //if (userIdStr) return userIdStr;
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

export const setStartCity = (startCity) => {
  sessionStorage.setItem('startCity', startCity);
}



export const getmapstartCity = () => {
  const userStr = sessionStorage.getItem('startCity');
  if (userStr) return JSON.stringify(userStr);
  else return null;
}


export const getstartCity = () => {
  const userStr = sessionStorage.getItem('startCity');
  const userArr = userStr.split(',');
  const city = JSON.stringify(userArr[0]);
  console.log("rasm", city);
  if (city) return JSON.parse(city);
  else return null;
}

export const setFlightData = (flightData) => {
  sessionStorage.setItem('flightData', JSON.stringify(flightData));
}

export const getFlightData = () => {
  const flightStr = sessionStorage.getItem('flightData');
  if (flightStr) return JSON.parse(flightStr);
  else return null;
}

localStorage.setItem('flightPrice', parseInt(0));
export const setPrice = (flightData) => {
  //sessionStorage.setItem('flightPrice', parseInt(flightData));
  localStorage.flightPrice = Number(localStorage.flightPrice) + parseInt(flightData);
}

export const getPrice = () => {
  const flightStr = localStorage.getItem('flightPrice');
  if (flightStr) return JSON.parse(flightStr);
  else return null;
}