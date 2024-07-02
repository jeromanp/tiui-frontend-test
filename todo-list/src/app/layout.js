import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TasksProvider } from "../context/TaskContext";

export const metadata = {
  title: "RoPi ToDo List",
  description:
    "To Do Lista es una aplicación que te ayudará con tus pendientes de tu vida diario, ofreciendo una interfaz amigable y fácil de manipular",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body>
        <TasksProvider>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </TasksProvider>
      </body>
    </html>
  );
}
