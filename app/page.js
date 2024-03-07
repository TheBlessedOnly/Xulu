import Image from "next/image";
import  Header  from "@/components/Header"
import Nav from "@/components/Nav";
import Results from "@/components/Results";

export default function Home() {
  return (
    <main>
     <Header />
     <Nav />
     <Results/>
      {/*Footer */}
    </main>
  );
}
