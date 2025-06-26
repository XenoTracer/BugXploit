document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reconForm');
  const targetInput = document.getElementById('targetInput');
  const subdomainsOutput = document.getElementById('subdomains');
  const nmapOutput = document.getElementById('nmapResult');
  const resultCard = document.getElementById('resultCard');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const target = targetInput.value.trim();

    if (!target) {
      alert("⚠️ Please enter a valid domain or IP address.");
      return;
    }

    // Show loading state
    subdomainsOutput.textContent = "⏳ Scanning for subdomains...";
    nmapOutput.textContent = "⏳ Running simulated Nmap scan...";
    resultCard.style.display = 'block';

    try {
      const response = await fetch('https://bugxploit-backend.onrender.com/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ target: target })
      });

      const result = await response.json();

      if (result.error) {
        subdomainsOutput.textContent = `❌ Error: ${result.error}`;
        nmapOutput.textContent = "";
        return;
      }

      // Output subdomains
      if (result.subdomains && result.subdomains.length > 0) {
        subdomainsOutput.textContent = result.subdomains.join('\n');
      } else {
        subdomainsOutput.textContent = "⚠️ No subdomains found.";
      }

      // Output Nmap (static)
      nmapOutput.textContent = result.nmap || "⚠️ Nmap not available.";

    } catch (error) {
      subdomainsOutput.textContent = "❌ Failed to fetch data.";
      nmapOutput.textContent = "";
    }
  });
});
