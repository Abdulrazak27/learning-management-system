import api from "./api";

async function getEnrollments(userId) {
  try {
    const { data } = await api.get(`/api/learning/${userId}`);
    const list = Array.isArray(data) ? data : [];  // ← THIS LINE ADDED
    return { success: true, data: list };
  } catch (error) {
    console.error("Error fetching enrollments:", error);
    return { success: false, data: [] };
  }
}

async function enrollCourse(userId, courseId) {
  try {
    const { data } = await api.post("/api/learning", { userId, courseId });
    return { success: true, data };
  } catch (error) {
    console.error("Enrollment error:", error);
    return { success: false, error: "Could not enroll in course" };
  }
}

export const learningService = {
  getEnrollments,
  enrollCourse,
};