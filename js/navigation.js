(() => {
  const navigation = document.querySelector('.navigation');
  const toggle = navigation.querySelector('.navigation__toggle');
  const compactLayout = window.matchMedia('(max-width: 56.25em)');

  const setOpen = (open) => {
    navigation.classList.toggle('navigation--open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  };

  navigation.classList.add('navigation--enhanced');
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('click', (event) => {
    if (!navigation.contains(event.target)) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  navigation.addEventListener('focusout', (event) => {
    if (!navigation.contains(event.relatedTarget)) setOpen(false);
  });

  compactLayout.addEventListener('change', () => setOpen(false));
})();
