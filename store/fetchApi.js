const BaseUrl = "https://fakestoreapi.com/";

export async function getData(endpoint) {
  try {
    const data = await fetch(`${BaseUrl}${endpoint}`);
    const res = await data.json();
    return res;
  } catch (error) {
    console.log("Error: ", error);
  }
}
