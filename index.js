const navOpen = document.querySelector('.nav-icon');
const navWindowOpen = document.querySelector('.nav-window-open')

navOpen.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');

    if (getComputedStyle(navWindowOpen).display === "none") {
     navWindowOpen.style.display = "block";
     navWindowOpen.classList.toggle('is-active');
    } else {
      navWindowOpen.style.display = "none";
      navWindowOpen.classList.toggle('is-active');
    }
});