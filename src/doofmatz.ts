import {
  IComponentMeta,
  ComponentBody,
} from "@ewibs/assembly/models/component";

export const meta: IComponentMeta = {
  name: "Doofmatz",
  io: {
    inputs: {
      fkk: {
        type: "string",
        delegation: [0, "io.inputs.title"],
        default: "Popo",
      },
    },
  },
};

export const body: ComponentBody = {
  text: "Hello world!",
  children: [
    { ref: "title", io: { inputs: { title: "testtt" } } },
    {
      tagName: "img",
      attributes: { src: "assets://Screenshot 2022-08-15 at 10.27.31.png" },
    },
  ],
  tagName: "div",
  styles: { base: { spacings: { margin: { top: "13px" } } } },
};
