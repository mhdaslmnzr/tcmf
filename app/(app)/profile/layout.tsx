import { ProfileSubNav } from "@/components/ProfileSubNav";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ProfileSubNav />
      {children}
    </div>
  );
}
