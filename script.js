// Minimal site JS for keyboard accessibility and cache reload handling
window.addEventListener('DOMContentLoaded', function () {
  function handleFirstTab(event) {
    if (event.key === 'Tab') {
      document.documentElement.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
    }
  }

  window.addEventListener('keydown', handleFirstTab);
});

window.addEventListener('pageshow', function (event) {
  if (event.persisted) {
    window.location.reload();
  }
});

// Category toggle behavior
window.addEventListener('DOMContentLoaded', function () {
  var toggles = document.querySelectorAll('.category-toggle');
  toggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var content = btn.nextElementSibling;
      if (!content) return;
      if (expanded) {
        btn.setAttribute('aria-expanded', 'false');
        content.hidden = true;
      } else {
        btn.setAttribute('aria-expanded', 'true');
        content.hidden = false;
      }
    });
  });
  // install toggles inside categories
  var installToggles = document.querySelectorAll('.install-toggle');
  installToggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var content = btn.nextElementSibling;
      if (!content) return;
      if (expanded) {
        btn.setAttribute('aria-expanded', 'false');
        content.hidden = true;
      } else {
        btn.setAttribute('aria-expanded', 'true');
        content.hidden = false;
      }
    });
  });
});

