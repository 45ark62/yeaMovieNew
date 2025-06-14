export const FAVORITE_SVG="data:image/svg+xml;charset=utf-8,%3Csvg%20width='24'%20height='24'%20xmlns='http://www.w3.org/2000/svg'%20fill='%23f50'%3E%20%3Cpath%20d='M5.5%203.5h13V21L12%2017.45%205.5%2021V3.5Z'/%3E%20%3C/svg%3E"
export const UNFAVORITE_SVG="data:image/svg+xml;charset=utf-8,%3Csvg%20width='24'%20height='24'%20xmlns='http://www.w3.org/2000/svg'%20fill='%23000'%3E%20%3Cpath%20fill-rule='evenodd'%20d='M18.7%209V6.2h3.05V3.8H18.7V.75h-2.4V3.8h-2.8v2.4h2.8V9h2.4ZM7.65%203.75h2.85v2.4H7.65v10.902l3.245-1.683L12%2014.797l1.105.572%203.245%201.683V12h2.4v9l-2.4-1.244L12%2017.5l-4.35%202.256L5.25%2021V3.75h2.4Z'/%3E%20%3C/svg%3E"
let scrollY = 0;

export const lockBodyScroll = () => {
  scrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.left = '0';
  document.body.style.right = '0';
  document.body.style.overflow = 'hidden';
  document.body.style.width = '100%';
};

export const unlockBodyScroll = () => {
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.style.overflow = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollY);
};