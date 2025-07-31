document.addEventListener("DOMContentLoaded", function() {
    const courseName = JSON.parse(localStorage.getItem("courseName")); 
    const localKey = "courseDetails";

    let courseHeading = document.querySelector(".main-heading");
    let video = document.querySelector(".video");
    let downloadLink = document.querySelector(".downloadable-link");
    let pastCommentsContainer = document.querySelector(".past-comments");

    // Function to load data from JSON
    async function loadCoursesFromJSON() {
        try {
            const response = await fetch("courses.json");
            if (!response.ok) throw new Error("Failed to load JSON");
            const data = await response.json();
            localStorage.setItem(localKey, JSON.stringify(data));
            return data;
        } catch (error) {
            console.error("Error loading courses:", error);
            return null;
        }
    }

    // Function to get courses (from localStorage or JSON)
    async function getCourses() {
        let coursesData = JSON.parse(localStorage.getItem(localKey));
        
        if (!coursesData) {
            coursesData = await loadCoursesFromJSON();
        }

        console.log("courses data:", coursesData);
        
        // Extract the courses array from the data structure
        return coursesData ? coursesData.courses : null;
    }

    // Function to find course by name
    async function findCourseByName(name) {
        const courses = await getCourses();

        if (!Array.isArray(courses)) {
            console.error("Expected an array but got:", courses);
            return null;
        }

        return courses.find(course => course.id.toLowerCase() === name.toLowerCase());
    }

    // Function to render comments
    function renderComments(comments) {
        if (!pastCommentsContainer || !Array.isArray(comments)) return;
        
        // Clear existing comments
        pastCommentsContainer.innerHTML = '';
        
        comments.forEach((comment, index) => {
            const commentBox = document.createElement('div');
            commentBox.className = 'comment-box';
            commentBox.innerHTML = `
                <p class="comment-user">User ${index + 1}</p>
                <p class="comment-text">${comment}</p>
            `;
            pastCommentsContainer.appendChild(commentBox);
        });
    }

    // Function to update page content
    function updatePageContent(course) {
        // Update heading
        if (courseHeading) {
            courseHeading.textContent = `${course.name} Course`;
        }

        // Update video source
        if (video) {
            if (video) {
                video.src = course.videoLink;
            } 
        }

        // Update download link
        if (downloadLink) {
            downloadLink.download = `${course.name}_notes.pdf`
            downloadLink.href = course.notesLink;
        }

        // Render comments
        renderComments(course.comments);
    }

    // Main execution
    if (!courseName) {
        console.error("No course name found in localStorage");
        return;
    }

    findCourseByName(courseName).then(course => {
        if (course) {
            console.log("Matched Course:", course);
            updatePageContent(course);
        } else {
            console.warn("Course not found!");
            // Optional: Show error message to user
            if (courseHeading) {
                courseHeading.textContent = "Course not found";
            }
        }
    }).catch(error => {
        console.error("Error finding course:", error);
    });
});