// Utility Functions

// Check if user is authenticated
async function checkAuth() {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session && !window.location.pathname.endsWith('index.html') && window.location.pathname !== '/') {
        window.location.href = 'index.html';
        return false;
    }
    
    if (session && (window.location.pathname.endsWith('index.html') || window.location.pathname === '/')) {
        window.location.href = 'dashboard.html';
        return false;
    }
    
    return true;
}

// Get current user with profile data
async function getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user)