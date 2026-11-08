function inicializarMenuAdminResponsive() {
  const botonAbrir = document.getElementById('boton-abrir-menu-admin');
  const botonCerrar = document.getElementById('boton-cerrar-menu-admin');
  const sidebarAdmin = document.getElementById('sidebar-navegacion-admin');
  const overlayAdmin = document.getElementById('overlay-menu-admin');
  const enlacesMenu = document.querySelectorAll('.enlace-menu-admin');

  if (!botonAbrir || !sidebarAdmin || !overlayAdmin) return;

  function alternarMenu(mostrar) {
    sidebarAdmin.classList.toggle('abierto', mostrar);
    overlayAdmin.classList.toggle('activo', mostrar);
    botonAbrir.setAttribute('aria-expanded', String(mostrar));
  }

  botonAbrir.addEventListener('click', () => alternarMenu(true));
  if (botonCerrar) {
    botonCerrar.addEventListener('click', () => alternarMenu(false));
  }
  overlayAdmin.addEventListener('click', () => alternarMenu(false));

  // Cerrar el drawer automáticamente al elegir una sección en móvil
  enlacesMenu.forEach((enlace) => {
    enlace.addEventListener('click', () => {
      enlacesMenu.forEach((item) => item.classList.remove('activo'));
      enlace.classList.add('activo');
      if (window.innerWidth < 1024) {
        alternarMenu(false);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', inicializarMenuAdminResponsive);
