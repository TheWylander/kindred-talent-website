window.addEventListener('scroll', function() {
  document.getElementById('main-nav').classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

function trackCTA(label) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'cta_click', { event_category: 'engagement', event_label: label });
  }
}
