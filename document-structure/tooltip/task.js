let hasTooltip = document.querySelectorAll('.has-tooltip');

for (let i = 0; i < hasTooltip.length; i++) {
  hasTooltip[i].addEventListener('click', function(event) {
    event.preventDefault();
    
    let title = this.getAttribute('title');
    let tooltip = document.querySelector('.tooltip');
    
    tooltip.innerHTML = title;
    tooltip.classList.add('tooltip_active');
    tooltip.style.top = (event.pageY + 10) + 'px';
    tooltip.style.left = (event.pageX + 10) + 'px';
  });
  
  hasTooltip[i].addEventListener('mouseout', function() {
    let tooltip = document.querySelector('.tooltip');
    
    tooltip.classList.remove('tooltip_active');
  });
}