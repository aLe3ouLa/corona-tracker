import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.spacing.xs};
  padding-right: ${({ theme }) => theme.spacing.xs};
  max-width: ${({ theme }) => theme.spacing.siteWidth};
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-left: ${({ theme }) => theme.spacing.sm};
    padding-right: ${({ theme }) => theme.spacing.sm};
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding-left: ${({ theme }) => theme.spacing.md};
    padding-right: ${({ theme }) => theme.spacing.md};
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.xlarge}) {
    padding-left: ${({ theme }) => theme.spacing.lg};
    padding-right: ${({ theme }) => theme.spacing.lg};
  }
`;

export default Wrapper;
