export const logInUser = (username) => {
    return {
      type: "LOG_IN_USER",
      value: username,
    };
  };
  
  export const logOutUser = () => {
    return {
      type: "LOG_OUT_USER",
    };
  };
  
  export const removeTaqueria = (index) => {
    return {
      type: "REMOVE_TAQUERIA",
      value: index,
    };
  };
  
  export const addListing = (listing) => {
    return {
      type: "CREATE_LISTING",
      value: listing,
    };
  };