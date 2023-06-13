import axios from "axios";

const getAccounts = async () => {
  const token = localStorage.getItem("usertoken");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Bankin-version": "2019-08-22",
      "Bankin-Device": "26ac2fb6-4b1f-4e7c-a35d-aaa40b5c00b5",
    },
  };
  let response = "";
  await axios
    .get("https://sync.bankin.com/v2/accounts", config)
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      console.log(err);
      response = err;
    });
  return response;
};

export default getAccounts;
