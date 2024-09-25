"use server";

import { addNewOperation } from "app/utils/operationTools";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const ControlProps = z.object({
  operationName: z.string(),
  operationState: z.string(),
  operationAmount: z.string(),
  operationMonth: z.string(),
});

export const addNewOperationAction = async (
  prevState: any,
  formData: FormData,
) => {
  const data = ControlProps.parse({
    operationName: formData.get("operationName"),
    operationState: formData.get("operationState"),
    operationAmount: formData.get("operationAmount"),
    operationMonth: formData.get("operationMonth"),
  });
  try {
    if (!data) return;

    await addNewOperation(
      data.operationName,
      data.operationState,
      data.operationAmount,
      data.operationMonth,
    );
    revalidatePath("/operations");
  } catch (error) {}
};
