import React from "react";

function CustomImage({alt,className, ...props}) {
    const srcHref = !props.src.slice(0,1).includes("/") ? !props.src.slice(0,1).includes("h") ? "/" : props.src : props.src;
    const [src, setSrc] = React.useState(srcHref);
  
    return (
      <picture>
        <source srcSet={src} />
        <img
          {...props}
          src={src}
          alt={alt} // To fix lint warning 
          onError={() => setSrc('/error.png')}
          placeholder="blur"
          blurdataurl="/error.png"
          objectFit="cover"
          className={`overflow-hidden ${className}`}

        />
      </picture>
    );
  }
export default CustomImage;