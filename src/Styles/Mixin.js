import { css } from "styled-components";

const mixin = {
  border: (color = "#dadada") => css`
    border-width: 1px;
    border-style: solid;
    border-color: ${color};
    border-radius: 3px;
  `,
};

export default mixin;
