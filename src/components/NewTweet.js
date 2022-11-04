import { useState } from "react";

const NewTweet = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;

    setText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add this tweet to the store
    console.log("New Tweet: ", text);

    setText("");
  };

  const tweetLeft = 280 - text.length;

  return (
    <div className="center">
      <h3>Compose New Tweet</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        {/* TODO: redirect to root (/) after submit */}
        <textarea
          placeholder="What's happening!?"
          value={text}
          onChange={handleChange}
          className="textarea"
          maxLength={280}
        />
        {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
        <button className="btn" type="submit" disabled={text === ""}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewTweet;
