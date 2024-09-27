import { useState } from "react";

const LightingProgress = () => {
  const [lightingProgress, setLightingProgress] = useState(1);
  return (
    <div className="flex flex-col justify-center items-center p-4 font-garamond">
       <h2 className="font-garamond text-3xl font-bold">
        Dynamic Lighting
      </h2>
      <span className="text-center md:text-lg max-h-[250px] m-4 md:m-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
        repudiandae ducimus molestiae harum fuga ab modi officiis nostrum autem
        nesciunt odit cupiditate quam excepturi magni nobis, reiciendis quidem,
        ipsam, voluptatibus voluptates consequuntur. Nulla minima dolores odit
        quae voluptatum, ducimus rerum illo! Qui recusandae corrupti maiores
        atque. Corporis accusantium fugit cumque, non quasi aliquam, quis
        numquam ab qui iusto excepturi.
      </span>
      <div className="image-wrapper w-full h-full md:h-[400px] md:w-[400px]">
        <img
          src={`https://seaofstarsgame.co/wp-content/uploads/2024/03/tod2024-${lightingProgress.toString().padStart(3, "0")}.png`}
          alt=""
          className="w-full h-full rounded-md object-contain border-[8px] border-stone-200"
        />
      </div>
      <input
        type="range"
        min="1"
        max="101"
        step={1}
        value={lightingProgress}
        onChange={(e) => setLightingProgress(parseInt(e.target.value))}
        className="w-full px-4 md:w-[400px] my-4 slider"
      />
    </div>
  );
};

export default LightingProgress;
