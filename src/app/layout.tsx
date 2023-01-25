"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Container, Stack, Button } from "react-bootstrap";
import Header from "./components/Header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <UserProvider>
        <body>
          <Header />
          <Container className="my-4 pt-4 pl-4 p-4 bg-light rounded select-none">
            {children}
          </Container>
        </body>
      </UserProvider>
    </html>
  );
}
