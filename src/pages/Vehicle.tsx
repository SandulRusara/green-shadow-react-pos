import { Addbutton } from "../components/Addbutton";
import { Modal } from "../components/Modal";
import { Savebutton } from "../components/Savebutton";
import { Updatebutton } from "../components/Updatebutton";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../reducers/ModalSlice";
import { motion } from "motion/react";
import { easeIn } from "motion";

export function Vehicle() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  const handleAddVehicle = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        <Addbutton onClick={handleAddVehicle}>Vehicle</Addbutton>
      </div>
      {/* Vehicle Table */}
      <motion.div
        className="relative overflow-x-auto w-5/6 shadow-md sm:rounded-lg mt-6 ml-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4, ease: easeIn }}
      >
        <table className="w-full text-sm text-left rtl:text-right text-amber-950">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                License Plate Number
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Fuel Type
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Remarks
              </th>
              <th scope="col" className="px-6 py-3">
                Assigned Staff
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-slate-100 cursor-pointer">
            <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
              <td className="px-6 py-4">wp-5657</td>
              <td className="px-6 py-4">van</td>
              <td className="px-6 py-4">non</td>
              <td className="px-6 py-4">yes</td>
              <td className="px-6 py-4">SF 4</td>
              <td className="px-6 py-4">on</td>
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
              <td className="px-6 py-4">wp-9078</td>
              <td className="px-6 py-4">car</td>
              <td className="px-6 py-4">non</td>
              <td className="px-6 py-4">yes</td>
              <td className="px-6 py-4">SF 4</td>
              <td className="px-6 py-4">on</td>
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
              <td className="px-6 py-4">sp-6756</td>
              <td className="px-6 py-4">bike</td>
              <td className="px-6 py-4">non</td>
              <td className="px-6 py-4">yes</td>
              <td className="px-6 py-4">SF 5</td>
              <td className="px-6 py-4">off</td>
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
              <td className="px-6 py-4">wp-6735</td>
              <td className="px-6 py-4">bus</td>
              <td className="px-6 py-4">non</td>
              <td className="px-6 py-4">yes</td>
              <td className="px-6 py-4">SF 1</td>
              <td className="px-6 py-4">on</td>
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
              <td className="px-6 py-4">sg-6712</td>
              <td className="px-6 py-4">van</td>
              <td className="px-6 py-4">non</td>
              <td className="px-6 py-4">no</td>
              <td className="px-6 py-4">SF 8</td>
              <td className="px-6 py-4">on</td>
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
        <h2>Add New Vehicle</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>License Plate Number</label>
            <input type="text" required />
          </div>
          <div className="mb-4">
            <label>Vehicle Category</label>
            <select name="" id="">
              <option value="" selected>
                Select Vehicle Category
              </option>
              <option value="CAR">Car</option>
              <option value="VAN">Van</option>
              <option value="TRUCK">Truck</option>
            </select>
          </div>
          <div className="mb-4">
            <label>Fuel Type</label>
            <select name="" id="">
              <option value="" selected>
                Select Fuel Type
              </option>
              <option value="DIESEL">Diesel</option>
              <option value="PETROL">Petrol</option>
              <option value="ELECTRIC">Electric</option>
            </select>
          </div>
          <div className="mb-4">
            <label>Vehicle Status</label>
            <select name="" id="">
              <option value="" selected>
                Select Vehicle Status
              </option>
              <option value="AVAILABLE">Available</option>
              <option value="UNAVAILABLE">Unavailable</option>
            </select>
          </div>
          <div className="mb-4">
            <label>Relevant Staff Member</label>
            <select name="" id=""></select>
          </div>
          <div className="mb-4">
            <label>Remarks</label>
            <textarea name="" id="" rows={3}></textarea>
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
