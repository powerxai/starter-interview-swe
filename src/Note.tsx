import React from "react";

interface Props {
  saveNote: (x: string) => Promise<string>;
  initialValue: string;
}

export function Note(props: Props) {
  return (
    <div>
      <p>Enter your note:</p>
      <textarea></textarea>
    </div>
  );
}
