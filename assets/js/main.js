(function () {
  "use strict";

  /* ---------- Theme toggle ---------- */
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  function currentTheme() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ---------- Research topic filter ---------- */
  var filter = document.querySelector(".filter");
  if (filter) {
    var buttons = filter.querySelectorAll("[data-filter]");
    var papers = document.querySelectorAll(".paper");
    var groups = document.querySelectorAll(".year-group");
    var empty = document.querySelector(".filter-empty");
    filter.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-filter]");
      if (!btn) return;
      var key = btn.getAttribute("data-filter");
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
      papers.forEach(function (p) {
        var topics = (p.getAttribute("data-topics") || "").split(" ");
        p.hidden = key !== "all" && topics.indexOf(key) === -1;
      });
      var anyVisible = false;
      groups.forEach(function (g) {
        var visible = g.querySelectorAll(".paper:not([hidden])").length > 0;
        g.hidden = !visible;
        anyVisible = anyVisible || visible;
      });
      if (empty) empty.hidden = anyVisible;
    });
  }

  /* ---------- BibTeX toggle + copy ---------- */
  document.addEventListener("click", function (e) {
    var toggle = e.target.closest("[data-bib-toggle]");
    if (toggle) {
      var box = toggle.closest(".paper").querySelector(".bibtex");
      box.hidden = !box.hidden;
      toggle.setAttribute("aria-expanded", String(!box.hidden));
      return;
    }
    var copy = e.target.closest("[data-copy]");
    if (copy && navigator.clipboard) {
      var text = copy.closest(".bibtex").querySelector("code").textContent;
      navigator.clipboard.writeText(text).then(function () {
        copy.textContent = "copied!";
        setTimeout(function () { copy.textContent = "copy"; }, 1600);
      });
    }
  });

  /* ---------- The koala ---------- */
  var koala = document.querySelector(".koala");
  if (koala) {
    var lines = [];
    try { lines = JSON.parse(koala.getAttribute("data-lines")) || []; } catch (e) {}
    var bubble = koala.querySelector(".koala-bubble");
    var btn = koala.querySelector(".koala-btn");
    var i = -1;
    var timer;
    btn.addEventListener("click", function () {
      if (!lines.length) return;
      i = (i + 1) % lines.length;
      bubble.textContent = lines[i];
      bubble.hidden = false;
      btn.classList.remove("wiggle");
      void btn.offsetWidth; // restart the animation
      btn.classList.add("wiggle");
      clearTimeout(timer);
      timer = setTimeout(function () { bubble.hidden = true; }, 6000);
    });
  }
})();
