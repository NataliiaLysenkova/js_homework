const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(accordionHeader => {
  accordionHeader.addEventListener('click', event => {
    const accordionContent = event.target.nextElementSibling;

    if (accordionContent.style.display === 'block') {
      accordionContent.style.display = 'none';
      event.target.querySelector('i').classList.remove('fa-chevron-up');
      event.target.querySelector('i').classList.add('fa-chevron-down');
    } else {
      accordionContent.style.display = 'block';
      event.target.querySelector('i').classList.remove('fa-chevron-down');
      event.target.querySelector('i').classList.add('fa-chevron-up');
    }
  });
});
