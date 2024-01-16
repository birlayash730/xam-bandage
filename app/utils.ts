export function stringToColor(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    color += ("00" + value.toString(16)).substr(-2);
  }
  return color;
}

export function capitalizeFirstLetter(word: string) {
  if (!word) {
    return "";
  }
  const firstLetter = word[0];
  const rest = word.slice(1, word.length);
  return firstLetter.toLocaleUpperCase() + rest;
}

export function pickRandomItems<T>(arr: T[], numItems = 5) {
  let result = [];
  for (let i = 0; i < numItems; i++) {
    if (arr.length > 0) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      result.push(arr[randomIndex]);
      arr.splice(randomIndex, 1);
    }
  }
  return result;
}

export function parseJwt(token: string) {
  var base64Url = token?.split(".")[1];
  var base64 = base64Url ? base64Url.replace(/-/g, "+").replace(/_/g, "/") : "";
  var jsonPayload = base64
    ? decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      )
    : "";
  return jsonPayload ? JSON.parse(jsonPayload) : "";
}
