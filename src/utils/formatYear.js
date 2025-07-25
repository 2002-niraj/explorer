export function formatBirthYear(birthYear) {
 
     if (!birthYear || birthYear.toLowerCase() === "unknown") {
    return "Not specified";
     }

     const isBBY = birthYear.toUpperCase().includes("BBY");
  const isABY = birthYear.toUpperCase().includes("ABY");
  const number = parseFloat(birthYear);

    if (isBBY) {
    return `${number} year${number !== 1 ? "s" : ""} before the Battle of Yavin`;
  } else if (isABY) {
    return `${number} year${number !== 1 ? "s" : ""} after the Battle of Yavin`;
  } else {
    return birthYear;
  }


}    