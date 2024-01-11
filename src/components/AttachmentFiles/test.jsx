import { RiAttachment2 } from "react-icons/ri";
import Modal from "../Modal/Modal";
import { useState } from "react";
import axios from "axios";

const AttachmentFiles = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    setFiles([...files, ...Array.from(selectedFiles)]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      files.forEach((file, index) => {
        formData.append(`files[${index}]`, file);
      });

      const response = await axios.post('http://localhost:8000/picture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      setFiles([]); // Clear files after successful upload
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2 bg-slate-100 px-1 py-2 rounded-lg">
        <label>
          <RiAttachment2
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="text-3xl cursor-pointer"
            modal="my_modal_2"
          />
        </label>

        <p>{files.length}</p>
        <Modal>
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                {file.name} ({file.type})
              </li>
            ))}
          </ul>
          <button onClick={handleUpload} className="btn btn-outline">
            Upload
          </button>
        </Modal>
      </div>

      {/* modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <div>
            <h3 className="font-bold text-lg">Upload File</h3>
            <input
              type="file"
              name=""
              id=""
              className="my-4"
              multiple
              onChange={handleFileChange}
            />
          </div>
          <button onClick={handleUpload} className="btn btn-outline">
            Upload
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default AttachmentFiles;
