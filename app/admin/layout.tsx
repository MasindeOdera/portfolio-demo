export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: 'flex' }}>
        <aside style={{ width: '200px', backgroundColor: '#333', color: 'white', padding: '20px' }}>
            <ul>
            <li><a href="/admin">Dashboard</a></li>
            <li><a href="/admin/add">Add Project</a></li>
            <li><a href="/admin/edit">Edit Project</a></li>
            </ul>
        </aside>
        <main style={{ padding: '20px', flexGrow: 1 }}>{children}</main>
        </div>
    );
}
  