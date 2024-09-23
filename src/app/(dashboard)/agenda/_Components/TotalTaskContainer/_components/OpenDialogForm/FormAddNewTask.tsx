"use client";

import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { addNewTaskAction } from "app/actions/Task/AddNewTask";
import { getEmployees } from "app/actions/Company/getEmployees";
import ButtonSubmit from "app/app/_components/ButtonSubmit";

const FormAddNewTask = ({
  setIsOpen,
}: {
  setIsOpen: (bol: boolean) => void;
}) => {
  const [formState, action] = useFormState<{ message: string | null }>(
    addNewTaskAction,
    { message: null },
  );

  const [employeesList, setEmployeesList] = React.useState([]);

  const validateForm = () => {
    const selectEmployee = document.getElementById(
      "employee-name",
    ) as HTMLInputElement;
    if (selectEmployee && selectEmployee.value.trim() === "none") {
      return false;
    }

    const inputTask = document.getElementById("task-name") as HTMLInputElement;
    if (inputTask && inputTask.value.trim() === "") {
      return false;
    }

    const inputDays = document.getElementById("task-days") as HTMLInputElement;
    if (inputDays && inputDays.value.trim() === "") {
      return false;
    }

    return true;
  };

  useEffect(() => {
    const fetchData = async () => {
      const employees = await getEmployees();
      if (employees) {
        setEmployeesList(employees);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <form action={action} className="mb-2">
        <div className="mb-4 h-auto w-full">
          <h4 className="font-semibold text-black">Name of the employee:</h4>
          <select
            className="mt-2 h-auto w-full rounded-lg"
            id="employee-name"
            name="idEmployee"
            required
          >
            <option key={1} value="none">
              Select a employee:
            </option>
            {/* Add all employes in a select */}
            {employeesList.map((employee) => {
              return (
                <option key={employee.id} value={employee.id}>
                  {`${employee.name} - ${employee.rol}`}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-4 h-auto w-full justify-center">
          <h4 className="font-semibold text-black">Task:</h4>
          <input
            className="mt-2 h-auto w-full rounded-lg"
            id="task-name"
            name="taskName"
            type="text"
            required
          />
        </div>

        <div className="mb-4 h-auto w-full justify-center">
          <h4 className="font-semibold text-black">State:</h4>
          <select
            className="mt-2 h-auto w-full rounded-lg"
            name="taskState"
            id="task-state"
          >
            <option selected value="low">
              Low
            </option>
            <option value="medium">Medium</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>

        <div className="mb-4 h-auto w-full justify-center">
          <h4 className="font-semibold text-black">
            Number of days to complete:
          </h4>
          <input
            className="mt-2 h-auto w-full rounded-lg"
            id="task-days"
            name="taskDays"
            type="number"
            required
          />
        </div>

        <div
          onClick={() => {
            if (validateForm()) {
              setIsOpen(false);
            }
          }}
        >
          <ButtonSubmit label="Got it!" />
        </div>
      </form>
    </>
  );
};

export default FormAddNewTask;
