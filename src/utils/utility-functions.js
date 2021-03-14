/**
 * @function
 * @param {string} query
 * @returns {string} capitalized query
 */

export const capitalizeInput = (query) => {
  const queryArray = query.split(" ");

  const capitalizedArr = queryArray.map(
    (query) => query.charAt(0).toUpperCase() + query.slice(1)
  );
  return capitalizedArr.join(" ");
};
