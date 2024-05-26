import { useParams } from "react-router-dom";

const LabDetailsPage = () => {
  const { id } = useParams();

  // Sample lab data, replace it with your actual data
  const labDetails = {
    1: {
      name: "Done",
      location: "Location A",
      description: "Description A",
      tests: [
        {
          id: 1,
          name: "Blood Test",
          description: "This test analyzes various components of blood.",
          cost: "$50",
          timeRequired: "1 hour",
        },
        {
          id: 2,
          name: "Urine Test",
          description: "This test examines urine for signs of disease.",
          cost: "$40",
          timeRequired: "30 minutes",
        },
        // Add more tests as needed
      ],
    },
    2: {
      name: "working",
      location: "Location B",
      description: "Description B",
      tests: [
        {
          id: 1,
          name: "X-ray",
          description:
            "This test uses electromagnetic waves to produce images of internal body structures.",
          cost: "$100",
          timeRequired: "1 hour",
        },
        {
          id: 2,
          name: "MRI Scan",
          description:
            "This test uses strong magnetic fields and radio waves to create detailed images of the inside of the body.",
          cost: "$200",
          timeRequired: "2 hours",
        },
        // Add more tests as needed
      ],
    },
    // Add more lab details as needed
  };

  const lab = labDetails[id];

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2>{lab.name}</h2>
      <p>
        <strong>Location:</strong> {lab.location}
      </p>
      <p>
        <strong>Description:</strong> {lab.description}
      </p>
      <h3>Tests:</h3>
      {lab.tests.map((test) => (
        <div
          key={test.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "15px",
          }}
        >
          <h4>{test.name}</h4>
          <p>
            <strong>Description:</strong> {test.description}
          </p>
          <p>
            <strong>Cost:</strong> {test.cost}
          </p>
          <p>
            <strong>Time Required:</strong> {test.timeRequired}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LabDetailsPage;
