const reconForm = document.getElementById("reconForm");
const targetInput = document.getElementById("targetInput");
const resultBox = document.getElementById("reconResult");

reconForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const target = targetInput.value.trim();

  resultBox.innerText = `🔍 Scanning ${target}...\nPlease wait...`;

  try {
    const response = await fetch("https://bugxploit-backend.onrender.com/scan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ target })
    });

    const data = await response.json();

    if (data.error) {
      resultBox.innerText = `❌ Error: ${data.error}`;
    } else {
      resultBox.innerText = `✅ Subdomains:\n${data.subdomains.join("\n")}\n\n📡 Nmap Result:\n${data.nmap}`;
    }
  } catch (err) {
    resultBox.innerText = `❌ Failed to fetch data: ${err}`;
  }
});
