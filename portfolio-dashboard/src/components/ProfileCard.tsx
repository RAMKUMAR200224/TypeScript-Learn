import assest from "../assets/ram.jpg"

function ProfileCard() {
  return (
    <div className="card">
      <img
        src={assest}
        alt="profile"
        className="avatar"
      />

      <h2>Ram Kumar</h2>

      <p>Frontend Developer</p>
      <p>Backend Developer</p>

      <p>
        Learning React + TypeScript
      </p>
      <p>
        NodeJs
      </p>
      <p>
        mongoDB
    </p>
    </div>
  );
}

export default ProfileCard;