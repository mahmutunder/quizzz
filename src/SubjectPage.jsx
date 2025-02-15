import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SubjectPage() {
  const { subject } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/quizzz/data/${subject}.json`); // ✅ Correct path for GitHub Pages
        if (!response.ok) throw new Error("Failed to load JSON");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    }
    fetchData();
  }, [subject]);

  return (
    <div>
      <h2>{subject?.toUpperCase()} Elements</h2>
      <ul>
        {data?.subElements?.map((el) => (
          <li key={el}>
            {el}: {data?.explanations?.[el]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubjectPage;
