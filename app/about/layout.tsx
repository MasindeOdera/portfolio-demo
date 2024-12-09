export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
        <h2>About Me</h2>
        <main>{children}</main>
        </div>
    );
}
  