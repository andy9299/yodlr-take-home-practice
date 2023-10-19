const form = document.getElementById("signup-form");

form.onsubmit = async (e) => {
  e.preventDefault();
  const formData = {};
  for (const input of form.getElementsByClassName("form-control")) {
    formData[input.name] = input.value;
  }
  const res = await fetch("/users", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });
  const data = await res.json();
  if (res.ok) {
    window.location.href = "/index.html";
  }
  else {
    alert(`Error: ${data.message}`);
  }

};