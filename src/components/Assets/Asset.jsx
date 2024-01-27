import { useEffect, useState } from "react";

import { getAsset } from "../../utils/common";


const Asset = ({ id }) => {
  const [asset, setAsset] = useState(null);

  useEffect(() => {
    const fetchAsset = async () => {
      const item = await getAsset(id);

      setAsset(item)
      console.log(item)
    }
    fetchAsset();
  }, [id]);

  return asset ? <img src={asset} alt="" /> : <></>;
};

export default Asset;





// // GPT
// import React, { useEffect, useState } from "react";
// import { getAsset } from "../../utils/common";

// const Asset = ({ id }) => {
//   const [asset, setAsset] = useState(null);

//   useEffect(() => {
//     const fetchAsset = async () => {
//       try {
//         const imageUrl = await getAsset(id);
//         setAsset(imageUrl);

//         console.log(imageUrl)
//       } catch (error) {
//         console.error("Error fetching asset:", error);
//       }
//     };

//     fetchAsset();
//   }, [id]);

//   if (!asset) {
//     return <div>Loading...</div>;
//   }

//   return <img src={asset} alt="" />;
// };

// export default Asset;

// // GPT 
// import { useEffect, useState } from "react";
// import { getAsset } from "../../utils/common";

// const Asset = ({ url }) => {
//   const [loading, setLoading] = useState(true);
//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     const fetchAsset = async () => {
//       try {
//         const imageUrl = await getAsset(url);
//         setImage(imageUrl);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching asset:", error);
//         setLoading(false);
//       }
//     };

//     fetchAsset();
//   }, [url]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return image ? <img src={image} alt="" /> : null;
// };

// export default Asset;

