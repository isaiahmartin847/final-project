"use client"; // Ensure this runs on the client side

import { useEffect, useState } from "react";
import InfoBlock from "./component/block";

const MainPage = () => {
  const loremText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vel
            nulla perspiciatis ipsam dolorem veniam voluptatum voluptatem
            expedita fugit quod nostrum optio voluptate fuga quaerat possimus
            neque quisquam, exercitationem eaque maiores corrupti earum
            quibusdam sed accusantium. Ex molestiae ipsum facilis iste magni
            iure eum fugit, facere, corporis a eveniet deserunt omnis assumenda
            in tenetur accusantium minima, error ea adipisci id neque odio
            ipsam! Nulla, numquam at delectus impedit, enim soluta iure debitis
            totam repellat perferendis reprehenderit beatae omnis quod tenetur!
            Debitis, atque delectus. Tenetur adipisci ea voluptate incidunt
            inventore suscipit. Esse velit nemo accusamus sit voluptate
            consequatur nobis, inventore ex.`;

  return (
    <div>
      <HorizontalScrollProgressBar />
      <div className="mt-2 border-2 border-red-500 mx-60 py-20 space-y-20">
        {/* first block */}
        <InfoBlock
          title="Opening statement"
          text={loremText}
        />
        {/* second block */}
        <InfoBlock
          title="What is Pedophilic disorder?"
          text={loremText}
        />

        {/* third block */}
        <InfoBlock
          title="What is child sexual abuse?"
          text={loremText}
        />

        {/* fourth block */}
        <InfoBlock
          title="Key difference between pedophilic disorder and child sexual abuse? "
          text={loremText}
        />
      </div>
    </div>
  );
};

function HorizontalScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-gray-200 z-50">
      <div
        className="h-full bg-blue-500"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

export default MainPage;
