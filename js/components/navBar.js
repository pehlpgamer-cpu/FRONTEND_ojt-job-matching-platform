// LOW PRIORITY - WIP & MIGHT BE USELESS COMPLEXITY

import {navBarButton} from '../../js/components/navButton.js';

export function navBar_admin(highlightIndex) {
    const sideNavBar = document.getElementById('sideNavBar');
    
    

    // Create all navigation items
    sideNavBar.innerHTML = `
        ${navBarButton(`<i class="bi bi-pie-chart-fill"></i>`, "Dashboard", "./dashboard.html")}
        ${navBarButton(`<i class="bi bi-people-fill"></i>`, "Users", "./user_management.html", true)}
        ${navBarButton(`<i class="bi bi-database-fill"></i>`, "Contents", "../notifications.html")}
        ${navBarButton(`<i class="bi bi-file-earmark-text-fill"></i>`, "Audit Trail", "./audit_trail.html")}
        ${navBarButton(`<i class="bi bi-bell-fill cursor-pointer"></i>`, "Notifications", "../notifications.html")}
        ${navBarButton(`<i class="bi bi-gear-fill"></i>`, "Settings", "../settings.html")}
    `;
}

export function navBar_student() {
    
    const sideNavBar = document.getElementById('sideNavBar');
    //let navBarCollapse = false;

    function toggleNavBarCollapse() {
        navBarCollapse = !navBarCollapse;
    }

    // Create all navigation items
    sideNavBar.innerHTML = `
        ${navBarButton(`<i class="bi bi-suitcase-lg-fill cursor-pointer"></i>`, "Job search", "../job_search.html", false)}
        ${navBarButton(`<i class="bi bi-person-badge cursor-pointer"></i>`, "Student Profile", "./student_profile.html", true)}
        ${navBarButton(`<i class="bi bi-bell-fill cursor-pointer"></i>`, "Notifications", "../notifications.html", false)}
        ${navBarButton(`<i class="bi bi-gear-fill cursor-pointer"></i>`, "Settings", "../settings.html", false)}
    `;
}

export function navBar_company() {
    
}