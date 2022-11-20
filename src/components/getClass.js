function getClass(vote) {
  if (vote >= 7) {
    return "borderColorG";
  } else if (vote >= 5) {
    return "borderColorY";
  } else {
    return "borderColorR";
  }
}
export default getClass;
