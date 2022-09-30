import {
  IComponentMeta,
  ComponentBody,
} from "@ewibs/assembly/models/component";

export const meta: IComponentMeta = {
  page: { url: "aaron/test" },
  name: "New #5",
};

export const body: ComponentBody = {
  text: "Hello world!",
  children: [{ ref: "doofmatz", io: { inputs: { fkk: "testtt" } } }],
};
