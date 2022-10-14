import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Container, Section, Main } from './ui';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Main>
        <Section>
          <Container>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </Main>
    </>
  );
};
