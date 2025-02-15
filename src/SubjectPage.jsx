// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import htmlData from "..html.json";

const sub= {
html:htmlData
}

function SubjectPage() {
  const { subject } = useParams();
//   const [data, setData] = useState(null);
const data=sub[subject];

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(`/my-app/data/${subject}.json`); // Adjust path for GitHub Pages
//         if (!response.ok) throw new Error("Failed to load JSON");
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error("Error loading data:", error);
//       }
//     }
//     fetchData();
//   }, [subject]);

  return (
    <div>
      <h2>{subject.toUpperCase()} Elements</h2>
      <ul>
        {data?.subElements?.map((el) => (
          <li key={el}>{el}: {data.explanations[el]}</li>
        ))}
      </ul>
    </div>
  );
}

export default SubjectPage;
