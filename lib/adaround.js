import Script from "next/script";

import { useState, useEffect } from "react";

export default function Ads() {
  const [width, setWidth] = useState(0);
  const handleResize = () => {
    console.log(window.innerWidth);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="container">
      <Script
        id="adaround"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
              !function(n){var t,e=function(n,t){var e=[["a","e","i","o","u","y"],["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]];if(t)for(var r=0;r<=t.length-1;r++)n=n*t.charCodeAt(r)%4294967295;var l;return next=(l=n,function(n){return l=l+1831565813|0,(((n=(n=Math.imul(l^l>>>15,1|l))+Math.imul(n^n>>>7,61|n)^n)^n>>>14)>>>0)/Math.pow(2,32)}),function(n,t){for(var r=[],l=null,o=0;o<=n-1;o++){var a=void 0;null===l?a=e[0].concat(e[1]):1==l?(a=e[0],l=0):(a=e[1],l=1);var u=a[Math.floor(next()*a.length)];r.push(u),null===l&&(l=-1!=e[0].indexOf(u)?0:1)}return r.push("."+t),r.join("")}}((t=new Date,(t/=1e3)-t%1209600),"_fa7cdd4c68507744")(8,"xyz");if(null===n)console.log("https://"+e);else{var r=n.createElement("script");r.src="https://"+e+"/main.js",(n.body||n.head).appendChild(r)}}("undefined"!=typeof document?document:null);
            `,
        }}
      />
      {width < 320 ? (
        <div
          className="_fa7cdd4c68507744 mx-auto w-100"
          data-zone="1f56593dc9c84617adddd8e288c171cb"
          style={{
            height: "100px",
            display: "inline-block",
          }}
        ></div>
      ) : (
        <div
          className="_fa7cdd4c68507744 w-100"
          data-zone="170e1f767c904791b2b3227bc9cd4d92"
          style={{
            height: "300px",
            display: "inline-block",
          }}
        ></div>
      )}
    </div>
  );
}
