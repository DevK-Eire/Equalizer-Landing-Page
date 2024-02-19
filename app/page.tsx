

import backgroundImage from "../app/assets/bg-main-desktop.png";
import Cta from "../app/components/cta/page";
import Footer from "../app/components/footer/page";
import Hero from "../app/components/hero/page";



export default function Home() {

  return (
    <main 
    className="mx-auto relative bg-cover bg-no-repeat  h-screen w-screen bg-mobile md:bg-tablet lg:bg-desktop"
    // style={{ backgroundImage: `url(${backgroundImage.src})` }}
  >
      <div className="sm:overflow-hidden lg:overflow-visible">
      {/* Hero */}
      <Hero />

       {/*Call to Action  */}
      <Cta />

      {/* Footer */}
      <Footer />
      
      
      </div>
    </main>
  );
}
