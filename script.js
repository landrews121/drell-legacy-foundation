const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const toggleLabel = toggle.querySelector('.sr-only');

function closeMenu() {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggleLabel.textContent = 'Open navigation';
}

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggleLabel.textContent = open ? 'Close navigation' : 'Open navigation';
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    closeMenu();
    toggle.focus();
  }
});

document.getElementById('contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = data.get('subject');
  const body = [
    `Name: ${data.get('name')}`,
    `Email: ${data.get('email')}`,
    `Phone: ${data.get('phone') || 'Not provided'}`,
    '',
    data.get('message'),
  ].join('\n');
  window.location.href = `mailto:drelllegacyfoundation@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.getElementById('year').textContent = new Date().getFullYear();

const countdown = document.getElementById('event-countdown');
const countdownValues = document.getElementById('countdown-values');
const countdownMessage = document.getElementById('countdown-message');
const eventStarts = Date.parse('2026-08-15T14:00:00-04:00');
const eventEnds = Date.parse('2026-08-15T16:30:00-04:00');
let countdownTimer;

function updateCountdown() {
  const now = Date.now();

  if (now >= eventEnds) {
    countdownValues.hidden = true;
    countdownMessage.textContent = 'This event has ended. Thank you to our community.';
    countdown.setAttribute('aria-label', 'The event has ended');
    window.clearInterval(countdownTimer);
    return;
  }

  if (now >= eventStarts) {
    countdownValues.hidden = true;
    countdownMessage.textContent = 'Event Day — the Back-to-School Drive is happening now!';
    countdown.setAttribute('aria-label', 'Event Day. The Back-to-School Drive is happening now.');
    return;
  }

  const remaining = eventStarts - now;
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  document.getElementById('countdown-days').textContent = String(days);
  document.getElementById('countdown-hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('countdown-minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('countdown-seconds').textContent = String(seconds).padStart(2, '0');
  countdownMessage.textContent = '';
  countdown.setAttribute('aria-label', `${days} days, ${hours} hours, and ${minutes} minutes until the Back-to-School Drive`);
}

updateCountdown();
countdownTimer = window.setInterval(updateCountdown, 1000);
