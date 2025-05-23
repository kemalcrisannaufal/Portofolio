import AppShell from "@/components/common/AppShell";
import { ToasterProvider } from "@/contexts/ToasterContext";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <ToasterProvider>
          <AppShell>
            <Component {...pageProps} />
          </AppShell>
        </ToasterProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
