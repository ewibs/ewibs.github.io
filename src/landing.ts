import {
  IComponentMeta,
  ComponentBody,
} from "@ewibs/assembly/models/component";

export const meta: IComponentMeta = {
  page: {
    url: "index",
    styles: {
      base: {
        text: { color: "", textAlign: "left", fontWeight: "400" },
        spacings: {
          position: {},
          zIndex: 12,
          padding: {},
          margin: {},
          size: {},
        },
        alignment: {
          type: "flex",
          direction: "column",
          justifyContent: "center",
          basis: "100%",
          alignContent: "center",
        },
        background: [],
      },
      mediaQueries: [
        {
          features: [{ feature: "width", min: "768px" }],
          styles: {
            text: { color: "" },
            spacings: {
              position: { top: "" },
              margin: { top: "" },
              size: { width: "" },
            },
            alignment: { inline: false },
          },
        },
      ],
    },
  },
  name: "Landing pages",
};

export const body: ComponentBody = {
  text: "",
  children: [
    { ref: "navigation", io: { inputs: {} } },
    { ref: "title", io: { inputs: {} }, children: [] },
    {
      tagName: "div",
      text: "Test #1",
      children: [
        {
          tagName: "p",
          styles: {
            base: {
              text: { color: "green", lineHeight: "2", textAlign: "right" },
            },
          },
          text: "Test",
        },
        {
          tagName: "div",
          text: "Test #3",
          styles: {
            base: {
              text: {
                lineHeight: "3",
                verticalAlign: "top",
                fontFamily: "arial",
                fontWeight: "700",
              },
              alignment: { type: "block", inline: true },
            },
            mediaQueries: [
              {
                features: [{ feature: "width", max: "1024px" }],
                styles: {
                  text: { color: "green" },
                  alignment: {
                    type: "inline",
                    inline: true,
                    rowGap: "123",
                    columnGap: "3131",
                  },
                },
              },
            ],
          },
          children: [],
        },
        { tagName: "hr", text: "", children: [] },
        {
          tagName: "br",
          children: [],
          styles: {
            base: {},
            mediaQueries: [
              {
                features: [{ feature: "width", min: "756px" }],
                styles: { alignment: { type: "block" } },
              },
            ],
          },
        },
        {
          tagName: "p",
          text: "Simon Rothert",
          styles: { base: { text: { color: "purple" } } },
        },
      ],
      styles: {
        base: {
          background: [{ color: "red" }],
          text: { color: "black" },
          border: { radii: { "top-right": "0.5rem" } },
          spacings: { padding: {}, margin: { left: "4rem" } },
          alignment: { type: "flex", basis: "1", direction: "column" },
        },
      },
    },
    { ref: "footer", io: { inputs: {} } },
  ],
};
