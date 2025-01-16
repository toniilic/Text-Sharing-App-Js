const sharedText = document.getElementById("sharedText");
const saveButton = document.getElementById("saveButton");
const loadButton = document.getElementById("loadButton");
const registerButton = document.getElementById("registerButton");
const loginButton = document.getElementById("loginButton");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

let token = "";

registerButton.addEventListener("click", async () => {
    const response = await fetch("/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: usernameInput.value,
            password: passwordInput.value,
        }),
    });
    const data = await response.json();
    if (response.ok) {
        alert("User registered successfully!");
    } else {
        alert(`Error: ${data.error}`);
    }
});

loginButton.addEventListener("click", async () => {
    const response = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: usernameInput.value,
            password: passwordInput.value,
        }),
    });
    const data = await response.json();
    if (response.ok) {
        token = data.token;
        alert("Login successful!");
    } else {
        alert(`Error: ${data.error}`);
    }
});

saveButton.addEventListener("click", async () => {
    const response = await fetch("/api/text", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ text: sharedText.value }),
    });
    const data = await response.json();
    if (response.ok) {
        alert("Text saved successfully!");
    } else {
        alert(`Error: ${data.error}`);
    }
});

loadButton.addEventListener("click", async () => {
    const response = await fetch("/api/text", {
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });
    const data = await response.json();
    if (response.ok) {
        sharedText.value = data.text;
    } else {
        alert(`Error: ${data.error}`);
    }
});
