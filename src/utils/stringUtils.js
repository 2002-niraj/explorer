export const formateString = (str, defaultVal = "Not specified" )=>{
  if (typeof str !== "string" || !str.trim() || str === "n/a") {
    return defaultVal;
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}