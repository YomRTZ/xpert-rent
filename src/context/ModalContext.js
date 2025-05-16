import React, { createContext, useContext, useState } from 'react';
const ModalContext = createContext();
export const ModalProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [modalProps, setModalProps] = useState({});
  const [animationType, setAnimationType] = useState('slide');

  const showModal = (type, props = {}, animation = 'slide') => {
    setModalType(type);
    setModalProps(props);
    setAnimationType(animation);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setTimeout(() => {
      setModalType(null);
      setModalProps({});
      setAnimationType('slide');
    }, 300);
  };

  return (
    <ModalContext.Provider
      value={{ modalVisible, modalType, modalProps, showModal, closeModal, animationType }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
