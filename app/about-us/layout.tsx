import { Metadata } from "next";

export const metadata : Metadata = {
  title: "AboutUs"
}

export default function AboutUs_Layout({children,}: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      &copy; Next JS great!
    </div>
  )
}
