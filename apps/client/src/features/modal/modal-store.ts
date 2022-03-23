import create from "zustand";
import { ModalTypes } from "./modal";
import produce from "immer";

type ModalTypesRecord = typeof ModalTypes;
type ModalType = keyof ModalTypesRecord;
type ModalProps = {
  [K in ModalType]: Parameters<ModalTypesRecord[K]>[0];
};

type Modal<TModal extends ModalType> = {
  type: TModal | undefined;
  props: ModalProps[TModal] | undefined;
};

type ModalStore<TModal extends ModalType> = Modal<TModal> & {
  openModal: <T extends ModalType>(options: Modal<T>) => void;
  closeModal: () => void;
};

const useModal = create<ModalStore<ModalType>>((set) => ({
  type: undefined,
  props: undefined,

  openModal: (options) =>
    set((prevState) => {
      return produce(prevState, (draft) => {
        draft.type = options.type;
        draft.props = options.props;
      });
    }),
  closeModal: () =>
    set((prevState) => {
      return produce(prevState, (draft) => {
        draft.type = undefined;
        draft.props = undefined;
      });
    }),
}));

export { useModal };
