export const setExploreData = (exploreData) => {
    sessionStorage.setItem('exploreData', JSON.stringify(exploreData));
  }

export const getExploreData = () => {
    const userStr = sessionStorage.getItem('exploreData');
    if (userStr) return JSON.parse(userStr);
    else return null;
}