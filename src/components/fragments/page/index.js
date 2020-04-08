import styled from "styled-components";

const Page = styled.div`
  margin-top: 60px; /* menu height */

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-top: 110px; /* menu height */
  }
`;

export default Page;
