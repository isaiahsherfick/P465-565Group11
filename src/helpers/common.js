export const setExploreData = (exploreData) => {
    sessionStorage.setItem('exploreData', JSON.stringify(exploreData));
  }

export const getExploreData = () => {
    const userStr = sessionStorage.getItem('exploreData');
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


