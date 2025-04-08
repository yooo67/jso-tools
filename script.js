function encodeBase64() {
  const input = document.getElementById("b64-input").value;
  const encoded = btoa(input);
  document.getElementById("b64-output").value = encoded;
}

function decodeBase64() {
  const input = document.getElementById("b64-input").value;
  try {
    const decoded = atob(input);
    document.getElementById("b64-output").value = decoded;
  } catch {
    document.getElementById("b64-output").value = "Invalid base64 input!";
  }
}

function convertTimestamp() {
  const ts = document.getElementById("timestamp-input").value;
  if (!ts) return;
  const date = new Date(parseInt(ts) * 1000);
  document.getElementById("timestamp-result").innerText = date.toString();
}

function encodeURL() {
  const input = document.getElementById("url-input").value;
  document.getElementById("url-output").value = encodeURIComponent(input);
}

function decodeURL() {
  const input = document.getElementById("url-input").value;
  document.getElementById("url-output").value = decodeURIComponent(input);
}
