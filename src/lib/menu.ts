export function initMenu() {
    const toggleButton = document.getElementById('menu-toggle') as HTMLButtonElement | null;
    const mobileMenu = document.getElementById('mobile-menu') as HTMLDivElement | null;
    const menuItems = document.querySelectorAll('[data-menu-item]') as NodeListOf<HTMLAnchorElement>;
  
    if (toggleButton && mobileMenu) {
      toggleButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
  
      menuItems.forEach((item) => {
        item.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
        });
      });
    }
  }