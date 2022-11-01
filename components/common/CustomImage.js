import Image from "next/image";
import React from "react";

function CustomImage({alt, ...props}) {
    const srcHref = !props.src.slice(0,1).includes("/") ? !props.src.slice(0,1).includes("h") ? "/" : props.src : props.src;
    const [src, setSrc] = React.useState(srcHref);
  
    return (
      <img
        {...props}
        src={src}
        alt={alt} // To fix lint warning 
        onError={() => setSrc('/error-image.png')}
        placeholder="blur"
        blurDataURL="/error-image.png"
        className="max-w-100"
      />
    );
  }
export default CustomImage;