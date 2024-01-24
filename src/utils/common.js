import { MAIN_URL } from "./constants";

import AssetText from "../components/Assets/AssetText";
import AssetHeading from "../components/Assets/AssetHeading";
import Asset from "../components/Assets/Asset";
import AssetLink from "../components/Assets/AssetLink";

export const request = async (query) => {
  try {
    const result = await fetch(MAIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });

    const { data } = await result.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

// сортування за датою
export const sortByDate = (arr) => {
  return arr.sort((a, b) => new Date(a.date) - new Date(b.date));

};

// отримання поточної дати
export const getLocaleDateString = (
  date,
  { month = "numeric", day = "numeric", year = "numeric" }
) =>
  new Date(date).toLocaleDateString("en-EN",
    { month, day, year }
  );

// отримання однієї новини. Загалом, ця функція може використовуватися для створення React-елементів на основі структури даних, яку вона отримує.

export const renderNode = ({ nodeType, data, value, content }, i) => {
  const key = `${nodeType}${i}`;

  switch (nodeType) {
    case "paragraph":
      return <p key={key}>{content.map(renderNode)}</p>
  
    case "text":
      return <AssetText key={key} value={value} />
    
    case "heading-3":
      return <AssetHeading key={key} content={content} />
    
    case "embedded-asset-block":
      return <Asset key={key} id={data.target.sys.id} />
    
    case "hyperlink":
      return <AssetLink key={key} uri={data.uri} content={content}/>
    
    default:
      break;
  }
    return Array.isArray(content) ? content.map(renderNode) : null;
};

// для конвертації JSON-структури у текстовий вигляд, використовуючи раніше визначену функцію renderNode.

export const jsonToText = ({ content }) => {
  return content.map(renderNode)
};

// для отримання картинки

export const getAsset = async (assetId) => {
  try { 
  const url = `https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/assets/${assetId}?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`;

    const result = await fetch(url);
    const data = await result.json();

    // console.log(data)
    
    const link = data?.fields?.file?.url;

    // console.log(link)

    return link ? `https:${link}` : null;

  } catch (err) {
    console.log(err)
  }
};

