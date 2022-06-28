import {
  IComponentMeta,
  ComponentBody,
} from "@ewibs/assembly/models/component";

export const meta: IComponentMeta = { name: "Navigation" };

export const body: ComponentBody = {
  text: "",
  children: [{ tagName: "p", text: ".ewibs" }],
  tagName: "div",
  styles: {
    base: {
      spacings: { padding: {}, size: {}, margin: {} },
      alignment: {
        type: "flex",
        direction: "row",
        justifyContent: "flex-start",
        alignContent: "center",
      },
      background: [{ color: "" }],
      border: { radii: {} },
    },
    mediaQueries: [
      {
        features: [
          { feature: "width", max: "1024px" },
          { feature: "width", operator: "and", min: "767px" },
        ],
        styles: { border: { radii: { "top-left": "0px" } } },
      },
    ],
  },
};
