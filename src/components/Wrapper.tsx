import React, { ReactNode, ReactElement } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

type WrapperProps = {
  children: ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
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
