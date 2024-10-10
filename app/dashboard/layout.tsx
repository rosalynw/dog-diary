// app/dashboard/layout.tsx

import Sidebar from '../components/sidebar/Sidebar'; 

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar /> {/* Sidebar will appear on all dashboard subpages */}
      <main className="flex-grow">
        {children} {/* Render the content of each subpage here */}
      </main>
    </div>
  );
}
