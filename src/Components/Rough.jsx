<div
            style={{
              backgroundColor: "#99ccff",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <FaBrain size={40} color="#fff" />
            <div>Neurology</div>
          </div>
          <div
            style={{
              backgroundColor: "#ffcc99",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <FaStethoscope size={40} color="#fff" />
            <div>General Medicine</div>
          </div>
          <div
            style={{
              backgroundColor: "#99ff99",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <FaAmbulance size={40} color="#fff" />
            <div>Emergency Medicine</div>
          </div>
          <div
            style={{
              backgroundColor: "#ffccff",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <FaUserMd size={40} color="#fff" />
            <div>Internal Medicine</div>
          </div>
          <div
            style={{
              backgroundColor: "#ffff99",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <FaTooth size={40} color="#fff" />
            <div>Dentistry</div>
          </div>
          <div
            style={{
              backgroundColor: "#cc99ff",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <FaEye size={40} color="#fff" />
            <div>Ophthalmology</div>
          </div>
          <div
            style={{
              backgroundColor: "#99ffff",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <FaLungs size={40} color="#fff" />
            <div>Pulmonology</div>
          </div>
          <div
            style={{
              backgroundColor: "#ff9999",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <FaBone size={40} color="#fff" />
            <div>Orthopedics</div>
          </div>
          <div
            style={{
              backgroundColor: "#ff9999",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={handleAddDoctor}
          >
            <FaSearch size={40} color="#fff" />
            <div>Search</div>
          </div>




.buttons{

display: flex;

width: 380px;

gap: 10px;

border:5px;
height 1.8em; 
}
.buttons button{

#88c100

flex calci 1.25 vari

min-width: font-size: 48px

font-weight: bold height var

cursor: pointer

color var

border var solid var

background: conic-gradient at calc(100% 1.3 var(b)

var 209deg

#0060 211deg

border-box

clip-path polygon

00

100% 0

calc 100% 8.577 var 100% 100%

padding: calc 0.288 varh

margin: 0 calc-0.288 varh 88

box-sizing: border-box

transition: flex 0.4s

.buttons button button

c: #ff003c

flex: calci0.75 var 5.9

background: conic-gradient( from -90deg at calc (1.3 var 100% vari) 119deg

#0000 121deg

border-box

01

clip-path: polygon calc(0.577 var-日)) 0.100% 100% 100% 100%

margin 00 calc-6.288 padding: varh calc 6.288 var-h/1








<hr />




2BB673 - Green
333333 - Dark Gray
D9D9D9 - Light Gray
white
Black
0094FF - blue
FF0000 -  red






{selectedText && (
  <div className="text-black rounded-lg mt-4 m-4 mb-0">
    <div className="rounded-lg flex flex-wrap">
      {timeSlots.map((slot, index) => (
        <div
          key={index}
          className={`text-center border cursor-pointer ${
            selectedSlot === slot ? "bg-green-200" : ""
          }`}
          style={{
            borderColor: "#ccc",
            cursor: "pointer",
            backgroundColor:
              selectedSlot === slot ? "#2BB673" : "#D9D9D9",
            transition: "background-color 0.3s ease",
            flexGrow: 1,
            margin: "2px",
          }}
          onClick={() => handleSlotSelect(slot)}
        >
          <div>{slot}</div>
        </div>
      ))}
    </div>
  </div>
)}