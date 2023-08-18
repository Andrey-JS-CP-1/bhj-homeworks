const tabs = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach(ta => ta.classList.remove('tab_active'));
    tabContent.forEach(tca => tca.classList.remove('tab__content_active'));
    tab.classList.add('tab_active');
    tabContent[index].classList.add('tab__content_active');
  });
});