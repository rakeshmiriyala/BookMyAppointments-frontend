import { useParams } from "react-router-dom";
import hospitalDetails from "./HospitalData";
import { FaSearch } from "react-icons/fa";

const HospitalDetailsPage = () => {
  const { id } = useParams();
  const hospitalId = id;
  const handle = (specialId) => {
    console.log(hospitalId, specialId);
    window.location.href = `/hospital/${hospitalId}/special/${specialId}`;
  };
  const SearchIcon = () => {
    console.log("search");
    window.location.href = `/hospital/${hospitalId}/special/search`;
  };
  const hospital = hospitalDetails[id];

  return (
    <div
      className="h-screen"
      style={{ width: "100%", backgroundColor: "#ffff", padding: "20px" }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            fontSize: "30px",
            color: "black",
          }}
        >
          {hospital.name}
        </h2>
        <div style={{ marginBottom: "20px" }}>
          {/* <strong>Location:</strong> {hospital.location} */}
        </div>
        <div style={{ marginBottom: "20px", fontSize: "20px", color: "black" }}>
          <strong>Description:</strong> {hospital.description}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "10px",
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          {hospitalDetails[id].cards.map((each) => (
            <div
              key={each.id}
              style={{
                textAlign: "center",
                cursor: "pointer",
                fontSize: "18px",
              }}
              onClick={() => handle(each.id)}
            >
              <img
                className="rounded"
                src={each.image}
                alt={each.name}
                style={{ width: "120px", height: "80px", marginBottom: "5px" }}
              />
              <div
                style={{
                  fontSize: "20px",
                  color: "#333",
                  textAlign: "start",
                }}
              >
                {each.name}
              </div>
            </div>
          ))}
          <div
            style={{
              textAlign: "center",
              cursor: "pointer",
              fontSize: "18px",
            }}
            onClick={SearchIcon}
          >
            <FaSearch size={40} color="#000" />
            <div
              style={{
                fontSize: "20px",
                color: "#333",
                textAlign: "start",
              }}
            >
              Search
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetailsPage;
