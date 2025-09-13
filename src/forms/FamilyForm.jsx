// FamilySubmitPage

import { useState } from "react";

function FamilySubmitPage() {
  const [personCount, setPersonCount] = useState("");
  const [showFields, setShowFields] = useState(false);
  const [personArray, setPersonArray] = useState([]);
  const [personData, setPersonData] = useState({});

  const createPersonFields = (e) => {
    e.preventDefault();
    const count = parseInt(personCount);

    if (isNaN(count) || count < 1 || count > 10) {
      alert("Please enter a valid number between 1 and 10");
      return;
    }

    setShowFields(true);
    // Initialize empty person data
    const initialData = {};
    for (let i = 1; i <= count; i++) {
      initialData[`firstName_${i}`] = "";
      initialData[`lastName_${i}`] = "";
      initialData[`dob_${i}`] = "";
      initialData[`gender_${i}`] = "";
    }
    setPersonData(initialData);
  };

  const handleInputChange = (fieldId, value) => {
    // Create logic for Family Code FN[0] + LN[0] + DOB.slice(1,2)
    setPersonData((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
  };

  const submitPeople = () => {
    const count = parseInt(personCount);
    const newPeopleGroup = {
      id: Date.now(),
      createdAt: new Date().toLocaleString(),
      memberCount: count,
      members: [],
      familyCode: [],
    };

    let allValid = true;

    // Collect all person data
    for (let i = 1; i <= count; i++) {
      const firstName = personData[`firstName_${i}`]?.trim() || "";
      const lastName = personData[`lastName_${i}`]?.trim() || "";
      const dob = personData[`dob_${i}`] || "";
      const gender = personData[`gender_${i}`] || "";

      // Validate required fields
      if (!firstName || !lastName || !dob || !gender) {
        alert(`Please fill in all fields for Person ${i}`);
        allValid = false;
        break;
      }

      // Calculate age
      const today = new Date();
      const birthDate = new Date(dob);
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const finalAge =
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
          ? age - 1
          : age;

      const person = {
        firstName: firstName,
        lastName: lastName,
        fullName: `${firstName} ${lastName}`,
        dateOfBirth: dob,
        age: finalAge,
        gender: gender,
      };

      newPeopleGroup.members.push(person);
    }

    const genCode = [];
    let concatCode = "";
    for (let i = 0; i < newPeopleGroup.members.length; i++) {
      let first = newPeopleGroup.members[i].firstName[0];
      let last = newPeopleGroup.members[i].lastName[0];
      let dob = newPeopleGroup.members[i].dateOfBirth;
      let month = new Date(dob).getMonth() + 1; // Add 1 for actual month
      let preCode = first + last + month.toString();
      concatCode += preCode;
      console.log(newPeopleGroup.members[i].dateOfBirth[0])
    }
    genCode.push(concatCode);

    // Actually use the generated codes
    newPeopleGroup.familyCode = genCode;

    if (!allValid) return;

    // Add to members array
    setPersonArray((prev) => [...prev, newPeopleGroup]);

    // Clear person fields
    clearPersonFields();
    // const famCode = familyCodeGen(personArray);

    console.log("members Array:", [...personArray, newPeopleGroup]);
  };

  const clearPersonFields = () => {
    const count = parseInt(personCount);
    const clearedData = {};

    for (let i = 1; i <= count; i++) {
      clearedData[`firstName_${i}`] = "";
      clearedData[`lastName_${i}`] = "";
      clearedData[`dob_${i}`] = "";
      clearedData[`gender_${i}`] = "";
    }

    setPersonData(clearedData);
  };

  const resetForm = () => {
    setPersonCount("");
    setShowFields(false);
    setPersonArray([]);
    setPersonData({});
  };

  const generatePersonForms = () => {
    const count = parseInt(personCount);
    const forms = [];

    for (let i = 1; i <= count; i++) {
      forms.push(
        <div key={i} className="container my-5">
          <div><p className="fs-2">Member {i}</p></div>
          <div className="d-flex col gap-3">
            <div>
              <label>First Name:</label>
              <input
                type="text"
                value={personData[`firstName_${i}`] || ""}
                className={`form-control form-control-lg`}
                onChange={(e) =>
                  handleInputChange(`firstName_${i}`, e.target.value)
                }
                placeholder="Enter first name"
                required
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                type="text"
                value={personData[`lastName_${i}`] || ""}
                className={`form-control form-control-lg`}
                onChange={(e) =>
                  handleInputChange(`lastName_${i}`, e.target.value)
                }
                placeholder="Enter last name"
                required
              />
            </div>
          </div>

            <div className="d-flex col gap-3">
          <div>
              <label>Date of Birth:</label>
              <input
                type="date"
                value={personData[`dob_${i}`] || ""}
                className={`form-control form-control-lg`}
                onChange={(e) => handleInputChange(`dob_${i}`, e.target.value)}
                required
              />
            </div>
            <div>
              <label>Gender:</label>
              <select
                value={personData[`gender_${i}`] || ""}
                className={`form-control form-control-lg`}
                onChange={(e) =>
                  handleInputChange(`gender_${i}`, e.target.value)
                }
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-binary</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
      );
    }

    return forms;
  };

  const totalPeople = personArray.reduce(
    (sum, group) => sum + group.members.length,
    0
  );

  return (
    <div>
      <div>
        <h3>Family Signup Form</h3>

        <div className="d-flex col">
          <label>How many members are in your family?</label>
          <input
            type="number"
            value={personCount}
            onChange={(e) => setPersonCount(e.target.value)}
            placeholder="Enter number (e.g., 3)"
            min="1"
            max="10"
            onKeyPress={(e) => e.key === "Enter" && createPersonFields()}
            className="d-flex col ms-2"
          />
        </div>

        <div className="mt-4 mb-5 d-flex row gap-3">
          <button onClick={createPersonFields}>Create Family Members</button>

          {showFields && <button onClick={submitPeople}>Submit Family</button>}

          <button onClick={resetForm}>Clear Form</button>
        </div>

        {showFields && (
          <div>
            <h3>
              Enter information for {personCount}{" "}
              {personCount === "1" ? "member" : "members"}:
            </h3>
            {generatePersonForms()}
          </div>
        )}

        {personArray.length > 0 && (
          <div>
            <h3>
              Submitted members ({totalPeople} total members in{" "}
              {personArray.length}{" "}
              {personArray.length === 1 ? "submission" : "submissions"}):
            </h3>

            {personArray.map((group, groupIndex) => (
              <div key={group.id}>
                <h4>
                  Submission {groupIndex + 1} - {group.timestamp}
                </h4>

                {group.members.map((person, personIndex) => (
                  <div key={personIndex}>
                    <h4>{person.fullName}</h4>

                    <div>
                      <div>
                        <span>First Name:</span> {person.firstName}
                      </div>
                      <div>
                        <span>Last Name:</span> {person.lastName}
                      </div>
                      <div>
                        <span>Date of Birth:</span> {person.dateOfBirth}
                      </div>
                      <div>
                        <span>Age:</span> {person.age} years old
                      </div>
                      <div>
                        <span>Gender:</span> {person.gender}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FamilySubmitPage;
