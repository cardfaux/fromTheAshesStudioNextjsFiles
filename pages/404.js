import Link from 'next/link';
import styled from 'styled-components';

const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function FourOhFour() {
  return (
    <StyledSection>
      <h1>404 - Page Not Found</h1>
      <Link href='/'>
        <a>Go back home</a>
      </Link>
    </StyledSection>
  );
}
