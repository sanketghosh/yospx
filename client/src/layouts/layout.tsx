import Sidebar from "@/components/sidebar";
import Navbar from "../components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="mx-auto flex max-w-6xl gap-5">
        <Sidebar />
        <main className="w-full px-4 py-4">{children}</main>
      </div>
    </div>
  );
}
