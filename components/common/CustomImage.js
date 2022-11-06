import Image from "next/image";
import React from "react";

function CustomImage({alt, ...props}) {
    const srcHref = !props.src.slice(0,1).includes("/") ? !props.src.slice(0,1).includes("h") ? "/" : props.src : props.src;
    const [src, setSrc] = React.useState(srcHref);
  
    return (
      <picture>
        <source srcSet={src} />
        <img
          {...props}
          src={src}
          alt={alt} // To fix lint warning 
          onError={() => setSrc('/error-image.png')}
          placeholder="blur"
          blurdataurl="/error-image.png"
          className="img max-h-[180px] lg:max-h-[250px] overflow-hidden"
        />
      </picture>
    );
  }
export default CustomImage;