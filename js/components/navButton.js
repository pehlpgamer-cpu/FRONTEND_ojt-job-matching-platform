export function navBarButton(icon, label, link, highlighted) //  collapsed
{
    const highlightEffectClass = highlighted ? 'bg-black text-white' : '';
    const hoverEffect = highlighted ? '' : 'hover:bg-gray-200 duration-150';

    const button = ` 
    <a href="${link}" class="${highlightEffectClass} p-1 pr-1.5 pl-1.5 rounded-md cursor-pointer ${hoverEffect}">
            ${icon}
            <label class="cursor-pointer">${label}</label>
    </a>
    `
    return button;
}