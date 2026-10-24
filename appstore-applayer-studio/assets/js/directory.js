// App directory: search and filter the app cards that are already in the page.
// Without JavaScript the full list still shows; the filter controls stay hidden.
(function () {
  function init(root) {
    const controls = root.querySelector("[data-controls]");
    const q = root.querySelector("[data-q]");
    const platform = root.querySelector("[data-platform]");
    const cats = [...root.querySelectorAll("[data-cat]")];
    const cards = [...root.querySelectorAll("[data-app-card]")];
    const status = root.querySelector("[data-status]");
    const empty = root.querySelector("[data-empty]");
    const grid = root.querySelector("[data-grid]");
    const syncUrl = root.dataset.syncUrl === "true";

    controls.hidden = false;
    controls.addEventListener("submit", (e) => e.preventDefault());

    if (syncUrl) {
      const params = new URLSearchParams(location.search);
      q.value = params.get("q") ?? "";
      platform.value = params.get("platform") ?? "";
      const cat = params.get("category") ?? "";
      const match = cats.find((c) => c.value === cat);
      if (match) match.checked = true;
    }

    function apply() {
      const terms = q.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
      const cat = cats.find((c) => c.checked)?.value ?? "";
      const plat = platform.value;
      let shown = 0;
      for (const card of cards) {
        const text = card.dataset.search ?? "";
        const ok =
          terms.every((t) => text.includes(t)) &&
          (!cat || (card.dataset.categories ?? "").split(" ").includes(cat)) &&
          (!plat || (card.dataset.platforms ?? "").split(" ").includes(plat));
        card.hidden = !ok;
        if (ok) shown++;
      }
      const filtered = terms.length > 0 || cat || plat;
      status.textContent = filtered ? `Showing ${shown} of ${cards.length} apps` : `${cards.length} apps`;
      empty.hidden = shown > 0;
      grid.hidden = shown === 0;

      if (syncUrl) {
        const params = new URLSearchParams();
        if (q.value.trim()) params.set("q", q.value.trim());
        if (cat) params.set("category", cat);
        if (plat) params.set("platform", plat);
        const qs = params.toString();
        history.replaceState(null, "", qs ? `?${qs}` : location.pathname);
      }
    }

    q.addEventListener("input", apply);
    platform.addEventListener("change", apply);
    cats.forEach((c) => c.addEventListener("change", apply));
    root.querySelector("[data-reset]")?.addEventListener("click", () => {
      q.value = "";
      platform.value = "";
      cats[0].checked = true;
      apply();
      q.focus();
    });
    apply();
  }

  document.querySelectorAll("[data-directory]").forEach(init);
})();
