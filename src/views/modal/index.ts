import Modal from "./ui/Modal";
import { useModalStore } from "./model/modalState";
import type {ModalProps} from "../modal/model/types";

const { showModal, closeModal } = useModalStore.getState();

export { Modal, showModal, closeModal, ModalProps };
