import * as React from "react";
const SvgEta = (props) => /* @__PURE__ */ React.createElement("svg", { id: "eta-Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "65px", height: "65px", viewBox: "0 0 65 65", enableBackground: "new 0 0 65 65", xmlSpace: "preserve", ...props }, /* @__PURE__ */ React.createElement("image", { id: "eta-image0", width: 65, height: 65, x: 0, y: 0, href: "data:image/png;base64,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 OjI3KzAwOjAwV4GNiwAAAABJRU5ErkJggg==" }));
export default SvgEta;
