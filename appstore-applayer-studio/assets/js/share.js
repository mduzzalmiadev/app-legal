// Share button on app pages: opens the system share sheet where supported
// (iPhone, iPad, Android, Safari on Mac), otherwise copies the page link.
(function () {
  const button = document.querySelector('[data-share]');
  if (!button) return;
  const status = document.querySelector('[data-share-status]');
  const canonical = document.querySelector('link[rel="canonical"]');
  const url = canonical ? canonical.href : location.href;
  const data = { title: button.dataset.shareTitle, text: button.dataset.shareText, url };

  function say(message) {
    if (!status) return;
    status.textContent = message;
    clearTimeout(say.timer);
    say.timer = setTimeout(() => (status.textContent = ''), 4000);
  }

  button.hidden = false;
  button.addEventListener('click', async () => {
    if (navigator.share) {
      try {
        await navigator.share(data);
      } catch (e) {
        // The user closed the share sheet; nothing to do.
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      say('Link copied');
    } catch (e) {
      say(url);
    }
  });
})();
