import { RiAttachment2 } from "react-icons/ri";
import Modal from "../Modal/Modal";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AttachmentFiles = () => {
  // Use useQuery hook to fetch photo data
  const { data: photos = [], refetch } = useQuery({
    queryKey: ["picture"],
    queryFn: async () => {
      const res = await axios.get(
        "https://task-for-frontend-developer-server.vercel.app/photo"
      );
      // console.log(res.data);
      return res.data;
    },
  });

  // Handle the upload of files
  const handleUpload = async (event) => {
    event.preventDefault();
    // Get the selected files from the input
    const files = event.target[0].files;

    for (const file of files) {
      // Create FormData and append the file
      const formData = new FormData();
      formData.append("image", file);

      // Upload the file to image hosting API
      const res = await axios.post(image_hosting_api, formData);

      if (res.data.success) {
        // Extract information about the uploaded image
        const imgData = {
          name: res.data.data.image.name,
          extension: res.data.data.image.extension,
          mime: res.data.data.image.mime,
          image: res.data.data.image.display_url,
        };

        // Send data for each file individually to your server
        const imageUpload = await axios.post(
          "https://task-for-frontend-developer-server.vercel.app/photo",
          imgData
        );

        if (imageUpload.data.insertedId) {
          // Log success message and show a notification
          // console.log(`Upload successful for ${imgData.name}`);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Photo uploaded",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }

    // Clear the file input by resetting the form
    event.target.reset();

    // Close the modal
    document.getElementById("my_modal_2").close();

    // Trigger a refetch after processing all files to update the data from the server
    refetch();
  };

  return (
    <div>
      {/* Container for the attachment button, count display, and modal */}
      <div className="flex items-center gap-2 bg-slate-100 px-1 py-2 rounded-lg">
        {/* Attachment button */}
        <label>
          <RiAttachment2
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="text-3xl cursor-pointer"
            modal="my_modal_2"
          />
        </label>

        {/* Display the count of items */}
        <p>{photos.length}</p>

        {/* Modal component */}
        <Modal>
          {/* Button to trigger file upload */}
          <button onClick={handleUpload} className="btn btn-outline">
            Upload
          </button>
        </Modal>
      </div>

      {/* Modal for file upload */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <div>
            {/* Heading for file upload */}
            <h3 className="font-bold text-2xl">Upload Files</h3>
            <div className="divider"></div>

            {/* show list in photo details start*/}
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Extension</th>
                    <th>Mime</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {photos.map((item, index) => (
                    <tr key={item._id}>
                      <th>{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.extension}</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">
                          {item.mime}
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* show list in photo details end*/}

            {/* Form for file upload */}
            <form onSubmit={handleUpload}>
              {/* Input for selecting files */}
              <input
                type="file"
                name="file"
                id=""
                className="file-input file-input-bordered w-full max-w-xs my-2 mt-10"
                multiple
              />{" "}
              <br />
              {/* Button to submit the form and upload files */}
              <input
                type="submit"
                value="Upload"
                className="btn btn-outline my-2"
              />
            </form>
          </div>
        </div>
        {/* Close button for the modal */}
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => document.getElementById("my_modal_2").close()}>
            close
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default AttachmentFiles;
