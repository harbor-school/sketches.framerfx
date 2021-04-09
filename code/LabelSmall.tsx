import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import * as System from "../../../lighthouse"
import { getMarginPros, getPaddingPros } from "./utils/styles"
import { withHOC } from "./utils/withHOC"

const InnerLabelSmall = (props) => {
  let styles: React.CSSProperties = { textAlign: props.textAlign }
  if (props.as === "span") styles = { ...styles, display: "inline-block" }

  return (
    <System.LabelSmall
      {...props}
      style={styles}
      {...getPaddingPros(props)}
      {...getMarginPros(props)}
    >
      {props.content}
    </System.LabelSmall>
  )
}

export const LabelSmall = withHOC(InnerLabelSmall)

LabelSmall.defaultProps = {
  width: 78,
  height: 16,
}

addPropertyControls(LabelSmall, {
  content: {
    title: "Children",
    type: ControlType.String,
    displayTextArea: true,
    defaultValue: "LabelSmall",
  },
  color: {
    title: "Color",
    type: ControlType.String,
    defaultValue: "contentPrimary",
  },
  textAlign: {
    title: "Text Align",
    type: ControlType.SegmentedEnum,
    optionTitles: ["Left", "Center", "Right"],
    options: ["left", "center", "right"],
    hidden(props) {
      return props.as === "span"
    },
  },
  as: {
    title: "As",
    type: ControlType.Enum,
    defaultValue: "span",
    options: [
      "symbol",
      "object",
      "a",
      "abbr",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "bdi",
      "bdo",
      "big",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "div",
      "dl",
      "dt",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "legend",
      "li",
      "link",
      "main",
      "map",
      "mark",
      "menu",
      "menuitem",
      "meta",
      "meter",
      "nav",
      "noindex",
      "noscript",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "slot",
      "script",
      "section",
      "select",
      "small",
      "source",
      "span",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "template",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
      "webview",
      "svg",
      "animate",
      "animateMotion",
      "animateTransform",
      "circle",
      "clipPath",
      "defs",
      "desc",
      "ellipse",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "filter",
      "foreignObject",
      "g",
      "image",
      "line",
      "linearGradient",
      "marker",
      "mask",
      "metadata",
      "mpath",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "stop",
      "switch",
      "text",
      "textPath",
      "tspan",
      "use",
      "view",
    ],
  },
})