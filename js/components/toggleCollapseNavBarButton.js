// label might not be needed


export function toggleCollapseNavBarButton(collapseIconClass, expandIconClass, toggleCollapseFunction)
{
    console.log("btn");
    let btnIcon = null;
    if (sessionStorage.getItem('navBarCollapsed') === "true") {
        btnIcon = expandIconClass;
    }
    else btnIcon = collapseIconClass;

    

    let btn = 
    `
    <button onclick="${toggleCollapseFunction}" class="pl-2 flex flex-row cursor-pointer">
        <i onclick="${toggleCollapseFunction}" class="${btnIcon} p-1 cursor-pointer"></i>
    </button>
    `;

    return btn;
}