"use client";
import React, { useState } from "react";
import SprintManager from "./SprintManager";

const SprintBoard = ({ projectId, sprints, orgId }) => {
  {
    /**Look at the list of sprints.
2. Find the first sprint where the status is "ACTIVE".
- If no such sprint exists, default to the first sprint in the list. */
  }
  const [currentSprint, setCurrentSprint] = useState(
    sprints.find((spr) => spr.status === "ACTIVE" || sprints[0])
  );
  return (
    <>
      <SprintManager
        sprint={currentSprint}
        setSprint={setCurrentSprint}
        sprints={sprints}
        projectId={projectId}
      />
      {/* Kanban Board */}
      <div></div>
    </>
  );
  // Sprint Manager
};

export default SprintBoard;
