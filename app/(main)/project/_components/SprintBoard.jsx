"use client";
import React, { useState, useEffect } from "react";
import SprintManager from "./SprintManager";
import { toast } from "sonner";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BarLoader } from "react-spinners";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import useFetch from "@/hooks/useFetch";
import statuses from "@/data/status";
import IssueCreationDrawer from "./CreateIssue";

const SprintBoard = ({ projectId, sprints, orgId }) => {
  /**
   * * Find the first sprint where the status is => "ACTIVE".
   * ! If no such sprint exists, default to the first sprint in the list.
   */
  const [currentSprint, setCurrentSprint] = useState(
    sprints.find((spr) => spr.status === "ACTIVE" || sprints[0])
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleAddIssue = (status) => {
    setSelectedStatus(status);
    setIsDrawerOpen(true);
  };

  const handleIssueCreated = () => {
    //! fetch issues again
  };

  const onDragend = () => {};

  return (
    <>
      <SprintManager
        sprint={currentSprint}
        setSprint={setCurrentSprint}
        sprints={sprints}
        projectId={projectId}
      />
      {/* /* * ! Kanban Board  */}
      <DragDropContext onDragEnd={onDragend}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 bg-slate-900 p-4 rounded-lg">
          {statuses.map((column) => (
            <Droppable key={column.key} droppableId={column.key}>
              {(provided) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="space-y-2"
                  >
                    <h3 className="font-semibold mb-2 text-center">
                      {column.name}
                    </h3>

                    {/* Issues */}
                    {provided.placeholder}
                    {column.key === "TODO" &&
                      currentSprint.status !== "COMPLETED" && (
                        <Button
                          variant="ghost"
                          className="w-full"
                          onClick={() => handleAddIssue(column.key)}
                        >
                          <Plus className="mr-2 h-4 w-4" />
                          Create Issue
                        </Button>
                      )}
                  </div>
                );
              }}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

      {/* Issue Creation Drawer */}
      <IssueCreationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        sprintId={currentSprint.id}
        status={selectedStatus}
        projectId={projectId}
        onIssueCreated={handleIssueCreated}
        orgId={orgId}
      />
    </>
  );
};

export default SprintBoard;
