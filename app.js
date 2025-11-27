// USE FUNCTION TO MAKE BUTTONS WORK ON HOME PAGE
// document.getElementById('openQgendaBtn').onclick = function () {
//   window.location = 'qgenda.html';
//   return false;
// };

document.getElementById('openExternalBtn').onclick = function () {
  window.location = 'external.html';
  return false;
};

document.getElementById('openFaqBtn').onclick = function () {
  window.location = 'faq.html';

  return false;
};

document.getElementById('openOncallBtn').onclick = function () {
  window.location = 'oncall.html';

  return false;
};

// -------- HOLIDAY SNOW (BRUTE FORCE VERSION) --------
(function () {
  console.log("Snow script starting…");

  const snowWrapper = document.createElement('div');
  snowWrapper.className = 'snow-fx';
  document.body.appendChild(snowWrapper);

  const FLAKES = 80; // change for more/less snow

  for (let i = 0; i < FLAKES; i++) {
    const flake = document.createElement('span');
    flake.className = 'snowflake';
    flake.textContent = '•';
    flake.style.color = "white";
    flake.style.fontWeight = "bold";
    flake.style.opacity = Math.random() * 0.8 + 0.2;


    flake.style.left = Math.random() * 100 + 'vw';
    flake.style.fontSize = (10 + Math.random() * 18) + 'px';
    flake.style.animationDelay = (Math.random() * 8) + 's';
    flake.style.animationDuration = (8 + Math.random() * 10) + 's';
    flake.style.opacity = (0.4 + Math.random() * 0.6);

    snowWrapper.appendChild(flake);
  }

  console.log("Snow created:", snowWrapper.children.length, "flakes");
})();

