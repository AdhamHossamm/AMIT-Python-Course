document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('demoForm');
  const hiddenInput = document.getElementById('hidden_input');

  form.addEventListener('submit', function (e) {
    const email = document.getElementById('email').value.trim();
    const bundle = document.getElementById('bundle').value.trim();
    
    hiddenInput.value = `${email} | ${bundle}`;
  });
});
