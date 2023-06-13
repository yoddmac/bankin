import axios from "axios";


const authenticate = async (email, password) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Bankin-version": "2019-08-22",
            "Bankin-Device": "26ac2fb6-4b1f-4e7c-a35d-aaa40b5c00b5",
        },
    };
    const user = {
      email: email,
      password: password,
    };
    let response = 500;
    await axios
      .post("https://sync.bankin.com/v2/authenticate", user, config)
      .then((res) => {
        localStorage.setItem("usertoken", res.data.access_token);
        response = 200;
      })
      .catch((err) => {
        return err;
      });
    return response;
  };

export default authenticate ;
