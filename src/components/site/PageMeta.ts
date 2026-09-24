const SITE_NAME = "GULFWELLBEING";
const DEFAULT_IMAGE = "/images/gulfwellbeing-og.jpg";

export function pageHead(title:string,description:string,path?:string){
  return {
    meta:[
      {title},
      {name:"description",content:description},
      {name:"robots",content:"index,follow,max-image-preview:large"},
      {property:"og:title",content:title},
      {property:"og:description",content:description},
      {property:"og:type",content:"website"},
      {property:"og:site_name",content:SITE_NAME},
      {property:"og:image",content:DEFAULT_IMAGE},
      {name:"twitter:card",content:"summary_large_image"},
      {name:"twitter:title",content:title},
      {name:"twitter:description",content:description},
      {name:"twitter:image",content:DEFAULT_IMAGE}
    ],
    ...(path ? {links:[{rel:"canonical",href:path}]} : {})
  };
}
