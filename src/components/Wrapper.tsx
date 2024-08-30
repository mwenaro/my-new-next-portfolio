import React, { ReactNode, ReactElement } from 'react';
import { Header } from './header';
import { Footer } from './footer';

type WrapperProps = {
  children: ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  // Convert children to an array and check if any child's props have `now_wrap` set to true
  const noWrapped = React.Children.toArray(children).some((compo) => {
    // console.log({compo})
    // Accessing props through compo.props
    return (compo as ReactElement)?.props?.now_wrap==true;
  });

  console.log('Final noWrapped value:', noWrapped);

  if (noWrapped) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="bg-page-gradient pt-navigation-height min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
