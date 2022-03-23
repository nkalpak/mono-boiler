import { useModal } from "./modal-store";
import { ModalTypes } from "./modal";
import React from "react";

function ModalContainerPrivate() {
  const modal = useModal();

  if (modal.type == undefined) {
    return null;
  }

  const OpenedModal = ModalTypes[modal.type];
  return <OpenedModal {...modal.props} />;
}

const ModalContainer = React.memo(ModalContainerPrivate);

export { ModalContainer };
