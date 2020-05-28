import React, { useState } from "react";
import { AddItemButton } from "./styles";
import { NewItemForm } from "./NewItemForm";

interface AddNewItemProps {
  dark?: boolean;
  toggleButtonText: string;
  onAdd(text: string): void;
}

export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonText, dark } = props;

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};
