import { useState, React } from "react";
import { Card, Image } from "semantic-ui-react";
import styles from "../styles/hogCard.module.css";

function HogCard({ hog }) {
  const [hiddenDiv, sethiddenDiv] = useState(false);
  const [hiddenHog, sethiddenHog] = useState(false);

  function handleHideClick() {
    sethiddenDiv((previousState) => !previousState);
  }

  function handleHidePigClick() {
    sethiddenHog((previousState) => !previousState);
  }

  return (
    <div>
      <button onClick={handleHidePigClick}>Show/Hide Pig</button>
      <div
        aria-label="hog card"
        className={hiddenHog ? styles.hidePig : styles.showPig}
      >
        <Card onClick={handleHideClick}>
          <Image src={hog.image} wrapped ui={false} className={styles.image} />
          <Card.Content>
            <Card.Header>{hog.name}</Card.Header>

            <div
              className={
                hiddenDiv ? styles.xtraContent : styles.xtraContentNone
              }
            >
              <Card.Meta>Weight: {hog.weight} lbs</Card.Meta>
              <Card.Description>Specialty: {hog.specialty}</Card.Description>
              <Card.Description>
                {hog.greased ? "Greased" : "Not Greased"}
              </Card.Description>
              <Card.Description>
                Highest Medal Achieved:{" "}
                {hog["highest medal achieved"].toUpperCase()}
              </Card.Description>
            </div>
          </Card.Content>
        </Card>
      </div>
      
    </div>
  );
}
export default HogCard;
