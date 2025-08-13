function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const currentWidth = sidebar.style.width;
    
    if (currentWidth === '80px') {

        sidebar.style.width = '280px';
        sidebar.classList.remove('sidebar-collapsed');

    } else {

        const dropdowns = document.querySelectorAll('.dropdown-content');
        const arrows = document.querySelectorAll('.arrow-transition');
    
    dropdowns.forEach(dropdown => {

        dropdown.classList.add('dropdown-hidden');

    });
    
    arrows.forEach(arrow => {

        if (arrow.classList.contains('fa-angle-down')) {

        arrow.classList.replace('fa-angle-down', 'fa-angle-right');

        }
    });
    
        sidebar.style.width = '80px';
        sidebar.classList.add('sidebar-collapsed');

    }
}

function toggleFolder(id) {
    const sidebar = document.getElementById('sidebar');
    
    if (sidebar.classList.contains('sidebar-collapsed')) {

        return;

    }
    
    const folder = document.getElementById(id);
    const arrow = document.getElementById('arrow-' + id);
    
    if (folder.classList.contains('dropdown-hidden')) {

        folder.classList.remove('dropdown-hidden');
        arrow.classList.replace('fa-angle-right', 'fa-angle-down');

    } else {

        folder.classList.add('dropdown-hidden');
        arrow.classList.replace('fa-angle-down', 'fa-angle-right');

    }
}

document.addEventListener('DOMContentLoaded', function() {

  const dropdowns = document.querySelectorAll('.dropdown-content');
  dropdowns.forEach(dropdown => {
    dropdown.classList.add('dropdown-hidden');
  });

  const aboutFolder = document.getElementById('about');
  const aboutArrow = document.getElementById('arrow-about');

  aboutFolder.classList.remove('dropdown-hidden');
  aboutArrow.classList.replace('fa-angle-right', 'fa-angle-down');
  
});
