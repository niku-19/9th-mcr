import React from "react";
import { usePlayListContext } from "../../Context/PlayListContext";

const AddNotes = () => {
  const { playListData } = usePlayListContext();
  return (
    <div>
      {playListData?.notes.map((eachNotes) => (
        <h1>{eachNotes.titles}</h1>
      ))}
    </div>
  );
};

export default AddNotes;
