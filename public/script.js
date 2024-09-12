const sharedText = document.getElementById("sharedText");
const saveButton = document.getElementById("saveButton");
const loadButton = document.getElementById("loadButton");

saveButton.addEventListener("click", async () => {
    const response = await fetch("/api/text", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: sharedText.value }),
    });
    const data = await response.json();
    if (data.success) {
        alert("Text saved successfully!");
    }
});

loadButton.addEventListener("click", async () => {
    const response = await fetch("/api/text");
    const data = await response.json();
    sharedText.value = data.text;
});
