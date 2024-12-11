export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: 'flex' }}>
            <main style={{ padding: '20px', flexGrow: 1 }}>{children}</main>
        </div>
    );
}
