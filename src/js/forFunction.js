function toggleSidebar() {

    const sidebar = document.getElementById('sidebar');
    const navbar = document.getElementById('navbar');
    const main = document.getElementById('main-content');
    const isCollapsed = sidebar.classList.contains('sidebar-collapsed');

    if (isCollapsed) {

        sidebar.style.width = '280px';
        navbar.style.left = '280px';
        navbar.style.width = 'calc(100% - 280px)';
        main.style.marginLeft = '280px';
        sidebar.classList.remove('sidebar-collapsed');

    } else {

        const dropdowns = document.querySelectorAll('.dropdown-transition');
        const arrows = document.querySelectorAll('.arrow-transition');

        dropdowns.forEach(d => d.classList.add('dropdown-hidden'));
        arrows.forEach(arrow => {

        if (arrow.classList.contains('fa-angle-down')) {

            arrow.classList.replace('fa-angle-down', 'fa-angle-right');

        }
    });

    sidebar.style.width = '80px';
    navbar.style.left = '80px';
    navbar.style.width = 'calc(100% - 80px)';
    main.style.marginLeft = '80px';
    sidebar.classList.add('sidebar-collapsed');

    }
}

function toggleFolder(id) {
    const sidebar = document.getElementById('sidebar');

    if (sidebar.classList.contains('sidebar-collapsed')) return;

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

document.addEventListener('DOMContentLoaded', function () {
    
    const dropdowns = document.querySelectorAll('.dropdown-transition');
    dropdowns.forEach(d => d.classList.add('dropdown-hidden'));
    
    const navbar = document.getElementById('navbar');
    const main = document.getElementById('main-content');
    navbar.style.left = '280px';
    navbar.style.width = 'calc(100% - 280px)';
    main.style.marginLeft = '280px';

    dropdowns.forEach(dropdown => {

    dropdown.classList.add('dropdown-hidden');
    
    });

    const aboutFolder = document.getElementById('about');
    const aboutArrow = document.getElementById('arrow-about');

    aboutFolder.classList.remove('dropdown-hidden');
    aboutArrow.classList.replace('fa-angle-right', 'fa-angle-down');
});