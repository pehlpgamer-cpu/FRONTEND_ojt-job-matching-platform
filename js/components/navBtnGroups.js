

export function adminNavBtns(highlightIndex, navButton)
{
    const navBtnParams = [
        { 
            icon: `<i class="bi bi-pie-chart-fill"></i>`, 
            label: "Dashboard", 
            url: "./dashboard.html" 
        },
        { 
            icon: `<i class="bi bi-people-fill"></i>`, 
            label: "Users", 
            url: "./user_management.html" 
        },
        { 
            icon: `<i class="bi bi-database-fill"></i>`, 
            label: "Contents", 
            url: "./content_management.html" 
        },
        { 
            icon: `<i class="bi bi-file-earmark-text-fill"></i>`, 
            label: "Audit Trail", 
            url: "./audit_trail.html" 
        }
        
    ];

    let navBtnElements = '';

    for (let i = 0; i < navBtnParams.length; i++)
    {
        if (highlightIndex === i) navBtnElements += navButton(navBtnParams[i].icon, navBtnParams[i].label, navBtnParams[i].url, true);
        else navBtnElements += navButton(navBtnParams[i].icon, navBtnParams[i].label, navBtnParams[i].url);
    }

    return navBtnElements;
}


export function studentNavBtns(highlightIndex, navButton)
{
    const navBtnParams = [
        { 
            icon: `<i class="bi bi-suitcase-lg-fill cursor-pointer"></i>`, 
            label: "Job search", 
            url: "../job_search.html" 
        },
        { 
            icon: `<i class="bi bi-person-badge cursor-pointer"></i>`, 
            label: "Profile", 
            url: "./student_profile.html" 
        },
        { 
            icon: `<i class="bi bi-file-earmark-person-fill"></i>`, 
            label: "Resume", 
            url: "../system/404.html" 
        },
        { 
            icon: `<i class="bi bi-file-earmark-pdf"></i>`, 
            label: "Applications", 
            url: "../system/404.html" 
        }
        
    ];

    let navBtnElements = '';

    for (let i = 0; i < navBtnParams.length; i++)
    {
        if (highlightIndex === i) navBtnElements += navButton(navBtnParams[i].icon, navBtnParams[i].label, navBtnParams[i].url, true);
        else navBtnElements += navButton(navBtnParams[i].icon, navBtnParams[i].label, navBtnParams[i].url);
    }

    return navBtnElements;
}

export function companyNavBtns(highlightIndex, navButton)
{
    const navBtnParams = [
        { 
            icon: ``, 
            label: "", 
            url: "" 
        },
        { 
            icon: ``, 
            label: "", 
            url: "" 
        },
        { 
            icon: ``, 
            label: "", 
            url: "" 
        },
        { 
            icon: ``, 
            label: "", 
            url: "" 
        }
    ];

    let navBtnElements = '';

    for (let i = 0; i < navBtnParams.length; i++)
    {
        if (highlightIndex === i) navBtnElements += navButton(navBtnParams[i].icon, navBtnParams[i].label, navBtnParams[i].url, true);
        else navBtnElements += navButton(navBtnParams[i].icon, navBtnParams[i].label, navBtnParams[i].url);
    }

    return navBtnElements;
}

