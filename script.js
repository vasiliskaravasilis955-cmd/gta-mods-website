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

  // mod search feature
  var searchInput = document.getElementById('modSearch');
  var modCards = Array.from(document.querySelectorAll('.mod-card'));
  if (searchInput && modCards.length) {
    searchInput.addEventListener('input', function () {
      var query = searchInput.value.trim().toLowerCase();
      modCards.forEach(function (card) {
        var title = card.dataset.title.toLowerCase();
        var description = card.dataset.description.toLowerCase();
        var tags = card.dataset.tags.toLowerCase();
        var match = !query || title.includes(query) || description.includes(query) || tags.includes(query);
        card.style.display = match ? 'flex' : 'none';
      });
    });
  }

  // realism pack builder
  var buildBtn = document.getElementById('buildPackBtn');
  var buildOutput = document.getElementById('buildRecommendation');
  if (buildBtn && buildOutput) {
    buildBtn.addEventListener('click', function () {
      var selected = Array.from(document.querySelectorAll('.builder-options input:checked')).map(function (input) {
        return input.value;
      });
      if (!selected.length) {
        buildOutput.hidden = false;
        buildOutput.innerHTML = '<p>Please select at least one option.</p>';
        return;
      }

      var recommended = [];
      if (selected.includes('graphics')) {
        recommended.push('NaturalVision', 'AmbientFX');
      }
      if (selected.includes('police')) {
        recommended.push('Cops Back on the Beat', 'Better Chases+');
      }
      if (selected.includes('cars')) {
        recommended.push('Premium Deluxe Motorsport', 'Dealership Mod');
      }
      if (selected.includes('sound')) {
        recommended.push('Realistic Weapon Sounds', 'Epic Explosions XX');
      }
      if (selected.includes('crime')) {
        recommended.push('Lock Picking', 'Low Life Crime');
      }
      if (selected.includes('immersion')) {
        recommended.push('AmbientFX', 'Realistic Weapon Sounds');
      }

      recommended = recommended.filter(function (value, index, self) {
        return self.indexOf(value) === index;
      });

      buildOutput.hidden = false;
      buildOutput.innerHTML = '<h4>Recommended mods</h4><p>You selected: ' + selected.map(function (item) {
        return item.replace('police', 'Police System').replace('cars', 'Better Cars').replace('sound', 'Realistic Sounds').replace('crime', 'Crime Gameplay').replace('immersion', 'Immersion');
      }).join(' + ') + '</p>' +
        '<ul>' + recommended.map(function (mod) {
          return '<li>' + mod + '</li>';
        }).join('') + '</ul>';
    });
  }
});

