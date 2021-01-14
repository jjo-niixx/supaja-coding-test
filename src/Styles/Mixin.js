import { css } from "styled-components";

const mixin = {
  border: (width = "1px", color = "#e9edef") => css`
    border-width: ${width};
    border-style: solid;
    border-color: ${color};
  `,
};

export default mixin;
