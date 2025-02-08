import { enableInput, message, token } from "./index.js";
import { showJobs } from "./jobs.js";

export const deleteJob = async (jobId) => {
  enableInput(false);

  try {
    const response = await fetch(`/api/v1/jobs/${jobId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (response.status === 200) {
      message.textContent = "The job entry was deleted.";
      showJobs();
    } else {
      message.textContent = data.msg || "Failed to delete the job.";
    }
  } catch (err) {
    console.log(err);
    message.textContent = "A communication error occurred.";
  }

  enableInput(true);
};
