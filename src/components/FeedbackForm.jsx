import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState();

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Card>
      <form>
        <h2> How would you rate your day?</h2>
      </form>
      <div className="input-group">
        <input
          onChange={handleTextChange}
          type="text"
          placeholder="Leave a review"
          value={text}
        />
        <Button type="submit">Submit</Button>
      </div>
    </Card>
  );
}

export default FeedbackForm;
