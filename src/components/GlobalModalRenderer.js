import React from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useModal } from '../context/ModalContext';
import ConfirmationModal from '../modals/ConfirmationModal';
import OwnerPage from '../modals/OwnerPage';
import { MaterialIcons } from '@expo/vector-icons';
const MODAL_COMPONENTS = {
  confirmation: ConfirmationModal,
  OwnerPage: OwnerPage,
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
      <View style={[styles.overlay, getOverlayStyle(variant)]}>
        <View style={[styles.modalContainer, modalProps?.containerStyle]}>
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
          <MaterialIcons name="close" size={24} color="#333" />
          </TouchableOpacity>
          <SpecificModal {...modalProps} onCancel={closeModal} />
        </View>
      </View>
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
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
    padding: 5,
    borderRadius: 25,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
