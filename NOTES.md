# Calling Protected API Routes

```javascript
const token = sessionStorage.getItem("token");

fetch(`${baseUrl}/user`, {
  headers: {
    "Authorization": `Bearer ${token}`,
    "Accept": "application/json"
  }
})
.then(res => res.json())
.then(data => console.log("User data:", data))
.catch(err => console.error(err));
```

# side bar layout + Nav Bar Usage

```html
<body class="bg-white flex flex-row">

    <aside class="w-fit flex flex-col gap-1">
        <section class="border-b-1 p-1 hover:bg-gray-200">
            <button class="pl-2">
                <i class="bi bi-layout-sidebar-inset p-1 cursor-pointer"></i>
                <i hidden class="bi bi-layout-sidebar-inset-reverse"></i>
            </button>
        </section>

        <nav id="sideNavBar" class="p-2 w-fit flex flex-col gap-1">
            
        </nav>
    </aside>

    <main class="border-l-1 p-4 h-screen grow overflow-y-auto">
        <section id="userContainer">

        </section>
    </main>

</body>
<script type="module">
    import {navBarButton} from '../../js/components/navButton.js';
    
    const sideNavBar = document.getElementById('sideNavBar');
    let navBarCollapse = false;

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
</script>

```