import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import Modal from "../../components/Modal";

function Users() {
  const [userInfo, setUserInfo] = useState([]);
  const [userID, setUserID] = useState([]);
  const [isDelModal, setIsDelModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);

  useEffect(() => {
    const response = async () => {
      await fetch(
        "https://exercise-93691-default-rtdb.firebaseio.com/users.json"
      )
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            setUserInfo(Object.entries(data));
          }
        })
        .catch((error) => console.error("Enter fetching data:" + error));
    };
    response();
  }, []);

  const removeHandler = async () => {
    try {
      const response = await fetch(
        `https://exercise-93691-default-rtdb.firebaseio.com/users/${userID}.json`,
        { method: "DELETE" }
      );
      if (!response.ok) throw new Error("failed to delete user!!!");
      setUserInfo((prevUser) => prevUser.filter(([id]) => id !== userID));
      setIsDelModal(false);
      console.log("user deleting successfully");
    } catch (error) {
      console.error("Error deleting user: ", error);
    }
  };

  const closeDelModal = () => {
    setIsDelModal(false);
  };

  const closeEditModal = () => {
    setIsEditModal(false);
  };

  const editUserHandle = () => {};

  if (userInfo.length === 0) {
    return <h1 className="text-center">Loading...</h1>;
  }

  return (
    <div className="w-full max-w-screen h-[600px] flex justify-center items-center font-Roboto overflow-hidden">
      <div className="w-[600px] h-full overflow-auto scroll-container scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-600 rtl">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-white border border-slate-950">
            <tr>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">First-Name</th>
              <th className="p-2 border">Last-Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userInfo.map((user, index) => (
              <tr
                key={user[0]}
                className={`text-center ${
                  index % 2 ? "bg-slate-200" : "bg-zinc-700 text-white"
                }`}
              >
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{user[1].firstName}</td>
                <td className="p-2 border">{user[1].lastName}</td>
                <td className="p-2 border">{user[1].email}</td>
                <td className="p-2 border">
                  <div className="flex justify-between px-4 py-2">
                    <button
                      className={`cursor-pointer bg-inherit ${
                        index % 2 ? "text-black" : "text-white"
                      }`}
                    >
                      <MdDelete
                        className="size-5"
                        onClick={() => {
                          setIsDelModal(true);
                          setUserID(user[0]);
                        }}
                      />
                    </button>
                    <div className="w-[1px] h-4 bg-slate-500" />
                    <button
                      className={`cursor-pointer bg-inherit ${
                        index % 2 ? "text-black" : "text-white"
                      }`}
                    >
                      <FiEdit
                        className="size-5"
                        onClick={() => {
                          setIsEditModal(true);
                          setUserID(user[0]);
                        }}
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isDelModal}
        toggle={closeDelModal}
        className="justify-between w-full max-w-sm h-full max-h-52"
      >
        <h3 className="h-full flex items-center ">
          Are you sure to delete this user?
        </h3>
        <div className="flex gap-2 w-full p-2 ">
          <button
            type="button"
            className="basis-1/2 p-2 rounded bg-red-500"
            onClick={() => setIsDelModal(false)}
          >
            Close
          </button>
          <button
            type="button"
            className="basis-1/2 p-2 rounded"
            onClick={() => removeHandler()}
          >
            Yes, delete
          </button>
        </div>
      </Modal>
      <Modal
        isOpen={isEditModal}
        toggle={closeEditModal}
        className="justify-between w-full max-w-sm h-full max-h-80"
      >
        <div className=" flex flex-col   ">
          <div className="flex flex-col w-full h-full">
            <label>
              <span className="w-full">FirstName:</span>
              <input className="w-full" type="text" />
            </label>
            <label>
              <span className="w-full">LastName:</span>
              <input className="w-full" type="text" />
            </label>
            <label>
              <span className="w-full">Email:</span>
              <input className="w-full" type="email" />
            </label>
          </div>
          <div className="">
            <button type="button" className=" py-4" onClick={editUserHandle}>
              submit
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Users;
