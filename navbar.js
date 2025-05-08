const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (dropdown && dropdownMenu) {
  let timeout;

  dropdown.addEventListener('mouseenter', () => {
    dropdownMenu.style.display = 'block';
    dropdownMenu.style.opacity = '1';
    clearTimeout(timeout); 
  });

  dropdown.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      dropdownMenu.style.display = 'none';
      dropdownMenu.style.opacity = '0';
    }, 5000);
  });

  dropdownMenu.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
  });

  dropdownMenu.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      dropdownMenu.style.display = 'none';
      dropdownMenu.style.opacity = '0';
    }, 5000);
  });
}