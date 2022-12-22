import styled from "styled-components";
import theme from "../../theme";

export const PopoverOverlay = styled.div`
  position: relative;
  .children {
    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    animation: fade-in 0.5s;

    min-width: 150px;
    min-height: 150px;
    position: absolute;
    margin-top: 35px;
    padding: 10px;
    background-color: ${theme.Colors.gray};
    border-radius: 10px;
    right: 30px;
  }
`;
