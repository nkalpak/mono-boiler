import { EmptyPropsWithChildren } from "../../types/react";
import * as Dialog from "@radix-ui/react-dialog";
import { useModal } from "./modal-store";
import React from "react";
import { DialogClose, DialogCloseProps } from "@radix-ui/react-dialog";

function ComponentModal({ children }: EmptyPropsWithChildren) {
  const modal = useModal();

  function onCloseModal(willClose: boolean) {
    if (willClose) {
      modal.closeModal();
    }
  }

  return (
    <Dialog.Root
      modal
      open={modal.type === "componentModal"}
      onOpenChange={(open) => onCloseModal(!open)}
    >
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: 8,
            maxWidth: 768,
            py: 3,
            px: 4,
          }}
        >
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function ComponentModalClose(props: DialogCloseProps) {
  return <DialogClose {...props} />;
}

const ModalTypes = {
  /*
   * Pre-styled modal to render an arbitrary component inside.
   *
   * **Use this modal in most situations**, consider creating a new modal
   * only in very specific situations (ex. full screen modal for a camera).
   */
  componentModal: ComponentModal,
} as const;

export { ModalTypes, ComponentModalClose };
