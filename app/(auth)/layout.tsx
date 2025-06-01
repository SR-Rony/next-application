

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <div>
          <h1 className="py-4 text-center bg-teal-500">I am auth header components</h1>
        </div>
        {children}
        <div>
          <h1 className="py-4 text-center bg-amber-300">I am auth footer components</h1>
        </div>
      </body>
    </html>
  );
}
