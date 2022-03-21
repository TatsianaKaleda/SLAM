document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.isliked').forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        item.classList.toggle("active");
    });
  });
});