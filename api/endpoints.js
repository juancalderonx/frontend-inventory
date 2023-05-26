document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    login();
  });

async function login() {
  const url = "http://localhost:3000/api/v1/auth/login";
  const userNameInput = document.getElementById("userName");
  const passwordInput = document.getElementById("pass");

  const data = {
    email: userNameInput.value,
    password: passwordInput.value,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const user = await response.json();
      console.log("Usuario autenticado:", user);
      window.location.href = "./home.html";
    } else {
      console.error("Error en la petición:", response.status);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

function getAllProducts() {
  fetch("http://localhost:3000/api/v1/products/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error en la petición");
      }
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
