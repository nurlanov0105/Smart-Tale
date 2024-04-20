import Modal from "./ui/Modal";
import { useModalStore } from "./model/modalState";

const { showModal, closeModal } = useModalStore.getState();

export { Modal, showModal, closeModal };
