export function navBarButton(icon, label, link) //  highlighted, collapsed
{
    const button = ` 
    <a href="${link}" class="p-1 pr-1.5 pl-1.5 border rounded-xl cursor-pointer hover:bg-gray-200 duration-150">
            ${icon}
            <label class="cursor-pointer">${label}</label>
    </a>
    `
    return button;
}