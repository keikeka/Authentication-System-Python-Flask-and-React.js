const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      auth: false,
      token: null,
    },
    actions: {
      createUser: (email, password) => {
        fetch(process.env.BACKEND_URL + "/api/signup", {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => console.log(data));
      },

      login: (email, password) => {
        fetch(process.env.BACKEND_URL + "/api/login", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => {
            if (resp.status == 200) {
              setStore({
                auth: true,
              });
            } else {
              throw new Error("Incorrect password");
            }
            return resp.json();
          })
          .then((data) => localStorage.setItem("token", data.access_token))
          .catch((error) => alert(error));
      },

      setToken: () => {
        setStore({ token: localStorage.getItem("token") });
      },

      logout: () => {
        const currentUser = getStore();
        if ((currentUser.auth = true)) {
          setStore({
            auth: false,
          });
          localStorage.removeItem("token");
        }
      },
    },
  };
};

export default getState;
