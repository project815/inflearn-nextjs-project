// import { Modal } from "antd";
// import { useState } from "react";

// interface IPasswordPropTywpes {
//   isOpen: boolean;
// }
// export default function PasswordInputModal(
//   props: IPasswordPropTywpes
// ): JSX.Element {
//   const { isOpen } = props;

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOk = (): void => {
//     setIsModalOpen(false);
//   };

//   const handleCancel = (): void => {
//     setIsModalOpen(false);
//   };

//   return (
//     <Modal
//       title="Basic Modal"
//       open={isOpen || isModalOpen}
//       onOk={handleOk}
//       onCancel={handleCancel}
//     >
//       <p>Some contents...</p>
//       <p>Some contents...</p>
//       <p>Some contents...</p>
//     </Modal>
//   );
// }
