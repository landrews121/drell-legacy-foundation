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

const giveawayForm = document.getElementById('giveaway-form');
const giveawayMessage = document.getElementById('giveaway-form-message');

function showGiveawayMessage(message, type = 'error') {
  giveawayMessage.textContent = message;
  giveawayMessage.className = `form-alert is-visible is-${type}`;
}

function endpointIsConfigured(endpoint) {
  return endpoint && /^https:\/\/formspree\.io\/f\/[a-z0-9]+$/i.test(endpoint);
}

giveawayForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  giveawayMessage.className = 'form-alert';
  giveawayMessage.textContent = '';

  if (!giveawayForm.checkValidity()) {
    showGiveawayMessage('Please complete all required fields, use a valid email and phone number, and confirm each required acknowledgment.');
    giveawayForm.reportValidity();
    return;
  }

  const reason = giveawayForm.elements.nomination_reason.value.trim();
  const additionalInfo = giveawayForm.elements.additional_info.value.trim();

  if (reason.length < 25 || reason.length > 1000 || additionalInfo.length > 700) {
    showGiveawayMessage('Please keep your nomination response between 25 and 1,000 characters and any optional note under 700 characters.');
    return;
  }

  const endpoint = giveawayForm.getAttribute('action');
  if (!endpointIsConfigured(endpoint)) {
    showGiveawayMessage('Giveaway entries are not open yet. The Foundation must connect the Formspree endpoint before this form can receive nominations.');
    return;
  }

  giveawayForm.elements._replyto.value = giveawayForm.elements.guardian_email.value.trim();
  const formData = new FormData(giveawayForm);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) throw new Error('Submission failed');

    giveawayForm.reset();
    showGiveawayMessage('Thank you for your submission! Your nomination has been received. The Drell Legacy Foundation will review all eligible entries and contact the selected family directly.', 'success');
  } catch {
    showGiveawayMessage('We could not submit your nomination right now. Please try again or contact drelllegacyfoundation@gmail.com.');
  }
});

const lightbox = document.getElementById('gallery-lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxClose = lightbox.querySelector('.lightbox-close');

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.removeAttribute('src');
  lightboxImage.alt = 'Selected Back-to-School Drive photo';
}

document.querySelectorAll('.gallery-photo').forEach((button) => {
  button.addEventListener('click', () => {
    lightboxImage.src = button.dataset.full;
    lightboxImage.alt = button.dataset.alt || button.querySelector('img').alt;
    lightbox.hidden = false;
    lightboxClose.focus();
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !lightbox.hidden) {
    closeLightbox();
  }
});
