import { NavItem } from "./NavItem.ts";

export interface Props {
  items: NavItem[];
}

function Menu({ items }: Props) {
  return (
    <ul class="flex-grow flex flex-col gap-2 pt-2">
      {items.map((item) => (
        <li>
          <details class="px-5">
            <summary class="block py-[18px] border-b-1 border-primary-extra-light">
              <a class="uppercase font-bold text-primary" href={item.href}>{item.label}</a>
            </summary>
            <ul class="ml-0.5">
              {item.children.map((child) => (
                <li class="py-[18px] border-b-1 border-primary-extra-light">
                  <a class="text-gray-600 text-sm" href={child.href}>
                    {child.label}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
