
import { Addbutton } from "../components/Addbutton";
import { Modal } from "../components/Modal";
import { Savebutton } from "../components/Savebutton";
import { Updatebutton } from "../components/Updatebutton";

import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../reducers/ModalSlice";
import { motion } from "motion/react";
import { easeIn } from "motion";

export function Equipment() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  const handleAddEquipment = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Equipment added!");
    dispatch(closeModal());
  };
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
      </motion.h1>
      <div className="flex justify-end mt-4 mr-56">
        <Addbutton onClick={handleAddEquipment}>Equipment</Addbutton>
      </div>
      {/* Equipment Table */}
      <motion.div
        className="relative overflow-x-auto w-5/6 shadow-md sm:rounded-lg mt-6 ml-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4, ease: easeIn }}
      >
        <table className="w-full text-sm text-left rtl:text-right text-black">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Equipment Name
              </th>
              <th scope="col" className="px-6 py-3">
                Equipment Type
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Assigned Staff
              </th>
              <th scope="col" className="px-6 py-3">
                Assigned Field
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-slate-100 cursor-pointer">
            <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
              <td className="px-6 py-4">andry</td>
              <td className="px-6 py-4">Mechanical</td>
              <td className="px-6 py-4">Available</td>
              <td className="px-6 py-4">sunera uthpala </td>
              <td className="px-6 py-4">nobby</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline ml-2"
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
              <td className="px-6 py-4">sanny</td>
              <td className="px-6 py-4">teclead</td>
              <td className="px-6 py-4">Available</td>
              <td className="px-6 py-4">chamara</td>
              <td className="px-6 py-4">nobby</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline ml-2"
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
              <td className="px-6 py-4">logos</td>
              <td className="px-6 py-4">Mechanical</td>
              <td className="px-6 py-4">Available</td>
              <td className="px-6 py-4">Aruna nishantha</td>
              <td className="px-6 py-4">nobby</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline ml-2"
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
              <td className="px-6 py-4">randy</td>
              <td className="px-6 py-4">Mechanical</td>
              <td className="px-6 py-4">Available</td>
              <td className="px-6 py-4">amodh nanditha</td>
              <td className="px-6 py-4">nobby</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline ml-2"
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
              <td className="px-6 py-4">seena</td>
              <td className="px-6 py-4">Mechanical</td>
              <td className="px-6 py-4">Available</td>
              <td className="px-6 py-4"> Perera</td>
              <td className="px-6 py-4">nobby</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline ml-2"
                >
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </motion.div>

      {/* Add Equipment Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Add New Equipment</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Equipment Name</label>
            <input type="text" required />
          </div>
          <div className="mb-4">
            <label>Equipment Type</label>
            <select name="" id="">
              <option value="" selected>
                Select Equipment Type
              </option>
              <option value="ELECTRICAL">Electrical</option>
              <option value="MECHANICAL">Mechanical</option>
            </select>
          </div>
          <div className="mb-4">
            <label>Equipment Status</label>
            <select name="" id="">
              <option value="" selected>
                Select Equipment Status
              </option>
              <option value="AVAILABLE">Available</option>
              <option value="UNAVAILABLE">Unavailable</option>
            </select>
          </div>
          <div className="mb-4">
            <label>Relevant Field</label>
            <select name="" id=""></select>
          </div>
          <div className="mb-4">
            <label>Relevant Staff Member</label>
            <select name="" id=""></select>
          </div>
          <div className="flex justify-end">
            <Savebutton>Save</Savebutton>
            <Updatebutton>Update</Updatebutton>
          </div>
        </form>
      </Modal>
    </>
  );
}
