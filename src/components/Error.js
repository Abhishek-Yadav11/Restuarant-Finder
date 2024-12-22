const Error = () => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "#ffa500",
            color: "#fff",
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
            padding: "20px",
            animation: "fadeIn 1.5s ease-in"
        }}>
            <div>
                <h1 style={{ fontSize: "10rem", fontWeight: "bold" }}>404</h1>
                <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Oops! Page Not Found</h2>
                <p style={{ fontSize: "1.2rem", maxWidth: "400px", margin: "20px auto" }}>
                    The page you're looking for might have been removed or is temporarily unavailable. Try going back to the home page.
                </p>
                <button 
                    onClick={() => window.location.href = '/'} 
                    style={{
                        padding: "15px 30px",
                        fontSize: "1.5rem",
                        color: "#ffa500",
                        backgroundColor: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        transition: "background-color 0.3s ease"
                    }}
                >
                    Go Home
                </button>
            </div>

            {/* Adding Keyframes for Fade In Animation */}
            <style>
                {`
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                            transform: scale(0.9);
                        }
                        to {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }
                `}
            </style>
        </div>
    )
};

export default Error;
