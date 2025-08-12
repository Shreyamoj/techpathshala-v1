import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Adding a utility function to call the /ping endpoint
export async function checkHealth() {
  try {
    const response = await fetch("http://localhost:8000/ping");
    if (!response.ok) {
      throw new Error("Health check failed");
    }
    return await response.json();
  } catch (error) {
    console.error("Error checking health:", error);
    throw error;
  }
}

// Utility function to fetch courses from the backend API endpoint /courses
export async function fetchCourses() {
  try {
    const response = await fetch("http://localhost:8000/courses");
    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
}
