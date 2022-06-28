import {
  IComponentMeta,
  ComponentBody,
} from "@ewibs/assembly/models/component";

export const meta: IComponentMeta = { name: "Footer" };

export const body: ComponentBody = {
  text: "",
  children: [
    {
      tagName: "p",
      text: "Links ",
      children: [
        {
          tagName: "a",
          text: "Github",
          attributes: { href: "https://github.com/" },
          styles: { base: { spacings: { margin: {} } } },
        },
      ],
    },
  ],
  tagName: "footer",
  styles: { base: { spacings: { padding: {}, margin: { top: "auto" } } } },
};
