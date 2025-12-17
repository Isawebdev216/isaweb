import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ToastProvider, ToastViewport } from "@/components/ui/toast";
import { CookieConsent } from "@/components/CookieConsent";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
        <CookieConsent />
      </div>
      <ToastViewport />
    </ToastProvider>
  );
};
