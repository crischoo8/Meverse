const apiKey =
  "pat55QOu3yd823Utv.546f225dd594b97ce83db9d5a98f5dc9473321bce84ccb071c557d572f297395";
const baseId = "app1mVWq6wPqttmvG";
const tableName = "Fav%20List";

const addFav = async (name) => {
  const data = {
    "fields": {
      "Name": `${name}`
    }
};
  const response = await fetch(
    `https://api.airtable.com/v0/${baseId}/${tableName}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const newFav = await response.json();
  return newFav;
};
export default {
  addFav,
};
