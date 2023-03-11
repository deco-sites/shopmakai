import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Container from "$store/components/ui/Container.tsx";

import Newsletter from "./Newsletter.tsx";
import type { ComponentChildren } from "preact";

export type IconItem = { icon: AvailableIcons };
export type StringItem = {
  label: string;
  href: string;
};

export type Item = StringItem | IconItem;

export type Section = {
  label: string;
  children: Item[];
};

const isIcon = (item: Item): item is IconItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.icon === "string";

const defaultSections: Section[] = [
  {
    label: "Menu",
    children: [
      {
        label: "novidades",
        href: "/",
      },
      {
        label: "Makai Bikini",
        href: "/",
      },
      {
        label: "Makainess",
        href: "/",
      },
      {
        label: "Bossbabes's Club",
        href: "/",
      },
      {
        label: "a marca",
        href: "/",
      },
      {
        label: "SALE",
        href: "/",
      },
    ],
  },
  {
    label: "Ajuda",
    children: [
      {
        label: "produto com defeito",
        href: "/",
      },
      {
        label: "entrega",
        href: "/",
      },
      {
        label: "transparência",
        href: "/",
      },
      {
        label: "sustentabilidade",
        href: "/",
      },
      {
        label: "troca e devolução",
        href: "/",
      },
      {
        label: "tabela de medidas",
        href: "/",
      },
      {
        label: "fala com a gente :)",
        href: "/",
      },
      {
        label: "cuidados com sua peça",
        href: "/",
      },
    ],
  },
  {
    label: "Redes Sociais",
    children: [
      {
        icon: "Facebook",
      },
    ],
  },
  {
    label: "PAGAMENTO",
    children: [
      {
        icon: "Pix",
      },
      {
        icon: "Visa",
      },
      {
        icon: "Elo",
      },
      {
        icon: "Mastercard",
      },
    ],
  },
];

function SectionItem({ item }: { item: Item }) {
  return (
  <>
      {isIcon(item)
        ? (
          <div class="py-1.5 px-2.5">
            <Icon
              id={item.icon}
              width={25}
              height={20}
              strokeWidth={0.01}
            />
          </div>
        )
        : (
          <a href={item.href} class="text-[12px]">
            {item.label}
          </a>
        )}
    </>
  );
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return <div class={`py-6 px-4 sm:py-12 sm:px-0 ${_class}`}>{children}</div>;
}

export interface Props {
  sections?: Section[];
}

function Footer({ sections = defaultSections }: Props) {
  return (
    <footer class="w-full bg-white flex flex-col">
      <div>
        <Container class="w-full flex flex-col max-w-none">
          <FooterContainer class="bg-[#f5f5f5] lg:pt-[80px]">
            <Newsletter />
          </FooterContainer>

          <FooterContainer class="max-w-[1300px] m-auto w-full">
            {/* Desktop view */}
            <ul class="hidden sm:flex flex-row justify-between">
              {sections.map((section) => (
                <li>
                  <div>
                    <h3 class="text-black font-semibold text-[14px] uppercase">
                      {section.label}
                    </h3>

                    <ul
                      class={`flex ${
                        isIcon(section.children[0]) ? "flex-row" : "flex-col"
                      } gap-2 pt-2`}
                    >
                      {section.children.map((item) => (
                        <li>
                          <SectionItem item={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>

            {/* Mobile view */}
            <ul class="flex flex-col sm:hidden sm:flex-row gap-4">
              {sections.map((section) => (
                <li>
                    <details>
                      <summary class="text-primary font-bold uppercase block py-[18px] border-b-1 border-primary-extra-light">
                        {section.label}
                      </summary>

                      <ul
                        class={`flex ${
                          isIcon(section.children[0]) ? "flex-row" : "flex-col"
                        }`}
                      >
                        {section.children.map((item) => (
                          <li class="py-[18px] border-b-1 border-primary-extra-light pl-3 text-primary">
                            <SectionItem item={item} />
                          </li>
                        ))}
                      </ul>
                    </details>
                </li>
              ))}
            </ul>
          </FooterContainer>
        </Container>
      </div>

      <div>
        <Container class="w-full">
          <FooterContainer class="flex flex-col justify-between w-full text-[12px] text-primary-light text-center">
            <p>Makai Bikini Comércio de Roupas LTDA | CNPJ: 29.325.494/0001-66 © 2022 MAKAIBIKINI. Todos os direitos reservados.</p>
            <p>Av. Nuta James, 65 - Barra da Tijuca, Rio de Janeiro - RJ, 22640-000.</p>
          </FooterContainer>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
