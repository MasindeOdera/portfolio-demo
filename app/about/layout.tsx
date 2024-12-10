export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ padding: '20px' }}>
        <h2>Photo?</h2>
        <main>{children}</main>
        </div>
    );
}
  