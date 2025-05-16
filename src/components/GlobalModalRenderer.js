import React from 'react';
import { Modal, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useModal } from '../context/ModalContext';
import ConfirmationModal from '../modals/ConfirmationModal';
import OwnerPage from '../modals/OwnerPage';

const MODAL_COMPONENTS = {
  confirmation: ConfirmationModal,
  OwnerPage:OwnerPage
};
const getOverlayStyle = (variant) => {
  switch (variant) {
    case 'center':
      return {
        justifyContent: 'center',
        alignItems: 'center',
      };
    case 'fullscreen':
      return {
        justifyContent: 'flex-start',
      };
    case 'bottom':
    default:
      return {
        justifyContent: 'flex-end',
      };
  }
};

const GlobalModalRenderer = () => {
  const { modalVisible, modalType, modalProps, closeModal, animationType } = useModal();
  const SpecificModal = MODAL_COMPONENTS[modalType];
  const variant = modalProps?.variant || 'bottom';

  if (!modalVisible || !SpecificModal) return null;

  return (
    <Modal
      visible={modalVisible}
      transparent
      onRequestClose={closeModal}
      animationType={animationType}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={[styles.overlay, getOverlayStyle(variant)]}>
          <TouchableWithoutFeedback>
          <View style={[styles.modalContainer, modalProps?.containerStyle]}>
              <SpecificModal {...modalProps} onCancel={closeModal} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default GlobalModalRenderer;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContainer: {
    paddingTop:"25%",
  },
});
