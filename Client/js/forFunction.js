function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const navbar = document.getElementById('navbar');
    const main = document.getElementById('main-content');
    const isCollapsed = sidebar.classList.contains('sidebar-collapsed');
    const isMobile = window.innerWidth <= 767;

    if (isMobile) {
        // Mobile behavior - toggle sidebar visibility
        sidebar.classList.toggle('mobile-visible');
    } else {
        // Desktop/tablet behavior - original functionality
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

// Handle window resize to reset mobile state
window.addEventListener('resize', function() {
    const sidebar = document.getElementById('sidebar');
    const navbar = document.getElementById('navbar');
    const main = document.getElementById('main-content');
    const isMobile = window.innerWidth <= 767;

    if (!isMobile) {
        // Reset to desktop behavior when resizing from mobile to desktop
        sidebar.classList.remove('mobile-visible');
        if (!sidebar.classList.contains('sidebar-collapsed')) {
            navbar.style.left = '280px';
            navbar.style.width = 'calc(100% - 280px)';
            main.style.marginLeft = '280px';
        }
    }
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const burgerButton = document.querySelector('button[onclick="toggleSidebar()"]');
    const isMobile = window.innerWidth <= 767;

    if (isMobile && sidebar.classList.contains('mobile-visible')) {
        if (!sidebar.contains(event.target) && !burgerButton.contains(event.target)) {
            sidebar.classList.remove('mobile-visible');
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown-transition');
    dropdowns.forEach(d => d.classList.add('dropdown-hidden'));
    
    const navbar = document.getElementById('navbar');
    const main = document.getElementById('main-content');
    
    // Only set desktop positioning if not mobile
    if (window.innerWidth > 767) {
        navbar.style.left = '280px';
        navbar.style.width = 'calc(100% - 280px)';
        main.style.marginLeft = '280px';
    }

    dropdowns.forEach(dropdown => {
        dropdown.classList.add('dropdown-hidden');
    });

    const aboutFolder = document.getElementById('about');
    const aboutArrow = document.getElementById('arrow-about');

    aboutFolder.classList.remove('dropdown-hidden');
    aboutArrow.classList.replace('fa-angle-right', 'fa-angle-down');
});