import './globals.css'
import Nav from "./auth/Nav";
import {Roboto} from "@next/font/google";
import QueryWrapper from "./auth/QueryWrapper";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-google",
})

export default function RootLayout({children}:{ children: React.ReactNode }) {
  return (
    <html lang="en">
      <head/>
      <body className={`mx-4 md:mx-48 xl:mx-96 ${roboto.variable} bg-white`}>
      <QueryWrapper>
          <Nav/>
          {children}
      </QueryWrapper>
      </body>
    </html>
  )
}
