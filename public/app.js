window.addEventListener('load', () => {
  const [burger, menu] = [
    document.querySelector('nav .burger'),
    document.querySelector('nav ul'),
  ];

  burger.addEventListener('click', () =>
    menu.classList.contains('hidden') ?
      menu.classList.remove('hidden') :
      menu.classList.add('hidden'));
});
