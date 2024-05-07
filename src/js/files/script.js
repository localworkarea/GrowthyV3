// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, _slideToggle, _slideUp, _slideDown } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


document.addEventListener('DOMContentLoaded', function() {
  const subMenus = document.querySelectorAll('.sub-menu');
  const menuItemSubMenu = document.querySelectorAll('.menu__item.has-sub-menu');
  const menuLinkSubMenu = document.querySelectorAll('.menu__link.link-sub-menu');
  // 82.561em

  function hideAllSubMenus() {
    const allSubMenus = document.querySelectorAll('.sub-menu');
    allSubMenus.forEach(subMenu => {
      subMenu.setAttribute('hidden', true);
    });
  }

  function _slideToggle(element, duration = 500) {
    const isVisible = !element.hasAttribute('hidden');
    if (isVisible) {
      _slideUp(element, duration);
    } else {
      _slideDown(element, duration);
    }
  }

  function handleWindowResize() {
    const breakpointWidth = 82.561 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    const isOpenClass = '_open';
    if (window.innerWidth <= breakpointWidth) {
      hideAllSubMenus();
    } else {
      const openMenuItems = document.querySelectorAll('.menu__item.' + isOpenClass);
      openMenuItems.forEach(item => {
        item.classList.remove(isOpenClass);
      });

      const visibleSubMenus = document.querySelectorAll('.sub-menu');
      visibleSubMenus.forEach(subMenu => {
        subMenu.removeAttribute('hidden');
      });
    }
  }

  if (subMenus.length > 0) {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    menuLinkSubMenu.forEach(item => {
      let isAnimating = false; // Флаг, указывающий, идет ли анимация в данный момент
    
      item.addEventListener('click', function(event) {
        event.preventDefault();
    
        // Если уже идет анимация, выходим из функции
        if (isAnimating) return;
    
        const parentMenuItem = item.closest('.menu__item');
        const subMenu = parentMenuItem.querySelector('.sub-menu');
    
        // Устанавливаем флаг анимации в true
        isAnimating = true;
    
        // Добавляем задержку в 500 мс
          _slideToggle(subMenu); // Добавляем длительность анимации по умолчанию
          parentMenuItem.classList.toggle('_open');
          
          // После завершения анимации сбрасываем флаг анимации в false
          setTimeout(() => {
            isAnimating = false;
          }, 500); // Указываем длительность анимации в миллисекундах
      });
    });
  }




  // ===== НАМ ДОВІРЯЮТЬ НА ГОЛОВНІЙ =====================================================
  const LineMove = document.querySelector(".trust-brand");
  if (LineMove) {
    const copyLine = document.querySelector(".trust-brand__list-1").cloneNode(true);
    document.querySelector(".trust-brand__body_01").appendChild(copyLine);
  
    const copyLine2 = document.querySelector(".trust-brand__list-2").cloneNode(true);
    document.querySelector(".trust-brand__body_02").appendChild(copyLine2);
  }
  // ====================================================================================


  // ТЕЛЕФОННАЯ МАСКА ===================================================
  // const selectors = document.querySelectorAll('input[name="tel"]');
  // if (selectors.length > 0) {
  //     selectors.forEach(function(selector) {
  //         const im = new Inputmask({
  //             mask: "+38 (099) 999-99-99",
  //             clearMaskOnLostFocus: true,
  //         });
  //         im.mask(selector);
  //     });
  // }
  // ==================================================================

});