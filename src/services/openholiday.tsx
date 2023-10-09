import ky from "ky";

async function listCountries() {
  const response = await ky.get("https://openholidaysapi.org/Countries", { retry: 1 });
  if (response.ok) {
    const jsonResponse = await response.json();
    return jsonResponse;
  }
  throw new Error("Error: " + response.statusText);
}

export { listCountries };
