export function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto py-6 px-4 md:px-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Nandhini P. – All Rights Reserved.
      </div>
    </footer>
  );
}
