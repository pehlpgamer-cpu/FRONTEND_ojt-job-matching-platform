export function navBarButton(icon, label, link, highlighted = false) 
{
    const highlightEffectClass = highlighted ? 'bg-black text-white' : '';
    const hoverEffect = highlighted ? '' : 'hover:bg-gray-200 duration-150';
    
    const collapsed = localStorage.getItem('navBarCollapsed');
    const hideLabel = collapsed ? '' : 'hidden';

    const button = ` 
    <a href="${link}" class="${highlightEffectClass} p-1 pr-1.5 pl-1.5 rounded-md cursor-pointer ${hoverEffect}">
            ${icon}
            <label ${hideLabel} class="cursor-pointer">${label}</label>
    </a>
    `
    return button;
}