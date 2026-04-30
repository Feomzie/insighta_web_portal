let currentUser = null;

async function checkAuthAndInitPage() {
    // 1. Check if logged in
    const response = await apiFetch('/auth/me');
    if (!response) return; // apiFetch handles the 401 redirect

    currentUser = response.data;

    // 2. Populate Navigation Bar
    document.getElementById('nav-username').innerText = currentUser.username;
    document.getElementById('nav-avatar').src = currentUser.avatar_url || `https://ui-avatars.com/api/?name=${currentUser.username}`;

    // 3. Enforce UI Roles (Hide elements meant only for admins)
    if (currentUser.role !== 'admin') {
        document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'none');
    }

    // 4. Trigger page-specific data loading if the function exists
    if (typeof loadPageData === "function") {
        loadPageData();
    }
}

// Run immediately
checkAuthAndInitPage();