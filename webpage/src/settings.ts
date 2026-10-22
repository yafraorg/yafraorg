// Global data
type Config = {
   title: string;
   tagline: string;
   description: string;
   lang: string;
   favicon: string;
   themeColor: string;
   og: {
      image: string;
      imageAlt: string;
      imageType: string;
      imageWidth: string;
      imageHeight: string;
   };
};

export const siteConfig: Config = {
   title: "yafra.org",
   tagline: "Yet Another FRAmework",
   description: "Best practices for software development",
   lang: "en",
   favicon: "/favicon.ico",
   themeColor: "#00754c",
   og: {
      image: "/ogImage.png",
      imageAlt: "yafra.org – Yet Another FRAmework",
      imageType: "image/png",
      imageWidth: "1200",
      imageHeight: "630",
   },
};
