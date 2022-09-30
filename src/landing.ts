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
    { ref: "title", io: { inputs: { title: "Simon" } }, children: [] },
    {
      tagName: "p",
      children: [
        {
          tagName: "a",
          text: "Checkout out the release notes",
          attributes: {
            href: "https://github.com/ewibs/.github/releases/v0.0.3-alpha",
          },
          styles: { base: { text: { fontWeight: "100", color: "white" } } },
        },
        {
          tagName: "span",
          text: " or ",
          styles: {
            base: { spacings: { margin: { right: "1em", left: "1em" } } },
          },
        },
        {
          tagName: "a",
          text: "Download the early alpha app (caution its buggy)",
          attributes: {
            href: "https://github.com/ewibs/.github/releases/download/v0.0.3-alpha/ewibs-darwin-x64.zip",
          },
          styles: {
            base: {
              spacings: { padding: { left: "5px" } },
              text: { color: "white", fontWeight: "100" },
            },
          },
        },
      ],
      styles: { base: { alignment: { type: "flex" } } },
    },
    {
      tagName: "div",
      children: [
        {
          tagName: "img",
          attributes: { src: "assets://screenshot.png" },
          styles: {
            base: {
              alignment: { type: "flex", justifyContent: "center" },
              spacings: {
                size: { width: "50%" },
                margin: { right: "auto", left: "auto" },
              },
            },
          },
          text: "",
          children: [],
        },
      ],
      text: "This is what the app looks like:",
      styles: {
        base: {
          text: {
            lineHeight: "3",
            verticalAlign: "middle",
            fontFamily: "arial",
            fontWeight: "700",
            textAlign: "left",
            color: "blue",
          },
          alignment: { type: "block", inline: true },
        },
        mediaQueries: [
          {
            features: [{ feature: "width", max: "1024px" }],
            styles: {
              text: { color: "" },
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
    },
    {
      ref: "title",
      io: { inputs: { title: "Look at all those cool features:" } },
    },
    {
      tagName: "div",
      text: "This shall be a text and short description of the ewibs platform",
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
        { tagName: "hr", text: "", children: [] },
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
