import { useState } from "react";
import hospitalDetails from "./HospitalData";
import { useParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const { hospitalId } = useParams();
  const [searchValue, setSearchValue] = useState("");

  const handleClick = (hospitalId, specialId) => {
    window.location.href = `/hospital/${hospitalId}/special/${specialId}`;
  };

  // Filter the cards based on searchValue and unique card IDs
  const filteredCards = Object.values(hospitalDetails)
    .flatMap((hospital) => hospital.cards)
    .filter((card) =>
      card.name.toLowerCase().includes(searchValue.toLowerCase())
    );

  // Set to store unique card IDs
  const uniqueCardIds = new Set();

  return (
    <div style={{ padding: "20px", backgroundColor: "white" }}>
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          position: "relative",
        }}
      >
        <FaSearch
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#888",
            cursor: "pointer",
          }}
        />
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          style={{
            padding: "8px 10px 8px 30px",
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#ffff",
          }}
        />
      </div>
      <div style={{ justifyContent: "center" }}>
        {filteredCards.map((card) => {
          // Only render the card if its ID is not in the uniqueCardIds set
          if (!uniqueCardIds.has(card.id)) {
            uniqueCardIds.add(card.id);

            // Render the image from the data instead of the icon
            return (
              <a
                key={card.id}
                href={`/hospital/${hospitalId}/special/${card.id}`}
                style={{
                  textDecoration: "none",
                  margin: "10px",
                  color: "#000",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(hospitalId, card.id);
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    fontSize: "20px",
                  }}
                >
                  <img
                    className="rounded"
                    src={card.image}
                    alt={card.name}
                    style={{
                      width: "120px",
                      height: "80px",
                      marginRight: "10px",
                    }}
                  />
                  {card.name}
                </div>
              </a>
            );
          } else {
            return null; // Skip rendering if card ID is already encountered
          }
        })}
      </div>
    </div>
  );
};

export default Search;
