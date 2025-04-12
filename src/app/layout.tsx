import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  title: "JdHobbsDev - Discord Bot Developer",
  description: "Portfolio of Jd Hobbs, a Discord.js developer specializing in creating innovative Discord bots.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
