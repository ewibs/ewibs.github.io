import {
  IComponentMeta,
  ComponentBody,
} from "@ewibs/assembly/models/component";

export const meta: IComponentMeta = { name: "Title" };

export const body: ComponentBody = {
  text: "Coming soon",
  tagName: "h1",
  styles: {
    base: { text: { color: "", fontFamily: "Octane", fontWeight: "100" } },
  },
};
