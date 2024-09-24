import React from "react"

function WordLetterCounter(){

    const [text, setText] = //state
    useState("");
const wordCount = text
    .split(/\s+/)
    .filter(Boolean).length;
const letterCount = text.length;

const handleTextChange = (e) => {
    setText(e.target.value);
};

    return (
        <div>
            <textarea
                placeholder=
                "Type your text here..."
                onChange={
                    handleTextChange
                } //to handle the event
                value={text}//to capture user input from the state
                rows={5}
                cols={50}
            />
            <p>
                Word Count:
                {wordCount}
            </p>
            <p>
                Letter Count:{" "}
                {letterCount}
            </p>
        </div>
    )
}

export default WordLetterCounter