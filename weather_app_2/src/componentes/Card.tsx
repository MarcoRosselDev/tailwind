import type { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return <div className="p-2 border border-pink rounded-2xl">{children}</div>;
}
