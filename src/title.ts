import {
  IComponentMeta,
  ComponentBody,
} from "@ewibs/assembly/models/component";

export const meta: IComponentMeta = {
  name: "Title",
  io: {
    inputs: {
      title: { type: "string", delegation: ["text"], default: "Example title" },
    },
  },
};

export const body: ComponentBody = {
  text: "Look at all those cool features:",
  tagName: "h1",
  styles: {
    base: { text: { color: "", fontFamily: "Octane", fontWeight: "100" } },
  },
};
