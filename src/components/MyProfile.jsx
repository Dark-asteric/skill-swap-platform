import { use, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../provider/AuthProvider";

const MyProfile = () => {
    const { user, setUser } = use(AuthContext);
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(user?.displayName || "");
    const [newPhotoURL, setNewPhotoURL] = useState(user?.photoURL || "");
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!newName.trim()) {
            toast.error("Name cannot be empty.");
            return;
        }

        if (newPhotoURL && !/^https?:\/\/.+/i.test(newPhotoURL)) {
            toast.error("Please enter a valid photo URL.");
            return;
        }
        try {
            await updateProfile(user, {
                displayName: newName,
                photoURL: newPhotoURL,
            });
            setUser({ ...user, displayName: newName, photoURL: newPhotoURL });
            toast.success("Profile updated successfully!");
            setIsEditing(false);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    if (loading) return (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white/50 backdrop-blur-sm">
            <span className="loading loading-spinner loading-lg text-purple-600"></span>
        </div>
    );
    const avatarFallback = user?.displayName
        ? user.displayName.charAt(0).toUpperCase()
        : "?";

    return (
        <>
            <Toaster position="top-center" />

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500&display=swap');

        .profile-page {
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .profile-card {
          background: #ffffff;
          border-radius: 2px;
          box-shadow: 8px 8px 0px #1a1a1a;
          border: 2px solid #1a1a1a;
          width: 100%;
          max-width: 420px;
          overflow: hidden;
        }

        .profile-header {
          background: #1a1a1a;
          padding: 2rem;
          text-align: center;
          position: relative;
        }

        .profile-header h1 {
          font-family: 'DM Serif Display', serif;
          color: #f5f2ee;
          font-size: 1.1rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin: 0;
          font-weight: 400;
        }

        .avatar-wrapper {
          margin: 1.5rem auto 0;
          width: 96px;
          height: 96px;
          position: relative;
        }

        .avatar-img {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #f5f2ee;
        }

        .avatar-fallback {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          background: #c8b89a;
          border: 3px solid #f5f2ee;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Serif Display', serif;
          font-size: 2.2rem;
          color: #1a1a1a;
        }

        .profile-body {
          padding: 2rem;
        }

        .info-row {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          padding: 1rem 0;
          border-bottom: 1px solid #e8e3dc;
        }

        .info-row:last-of-type {
          border-bottom: none;
        }

        .info-label {
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #999;
          font-weight: 500;
        }

        .info-value {
          font-size: 1rem;
          color: #1a1a1a;
          font-weight: 400;
          word-break: break-all;
        }

        .info-value.muted {
          color: #aaa;
          font-style: italic;
          font-size: 0.9rem;
        }

        .btn-update {
          width: 100%;
          margin-top: 1.5rem;
          padding: 0.85rem;
          background: #1a1a1a;
          color: #f5f2ee;
          border: 2px solid #1a1a1a;
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          font-weight: 500;
        }

        .btn-update:hover {
          background: #f5f2ee;
          color: #1a1a1a;
        }

        /* Edit form */
        .edit-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          animation: slideDown 0.25s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .field-label {
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #999;
          font-weight: 500;
        }

        .field-input {
          padding: 0.65rem 0.85rem;
          border: 1.5px solid #ddd;
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          color: #1a1a1a;
          outline: none;
          transition: border-color 0.2s;
          background: #faf8f5;
        }

        .field-input:focus {
          border-color: #1a1a1a;
        }

        .form-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .btn-save {
          flex: 1;
          padding: 0.75rem;
          background: #1a1a1a;
          color: #f5f2ee;
          border: 2px solid #1a1a1a;
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          font-weight: 500;
        }

        .btn-save:hover:not(:disabled) {
          background: #333;
        }

        .btn-save:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .btn-cancel {
          flex: 1;
          padding: 0.75rem;
          background: transparent;
          color: #1a1a1a;
          border: 2px solid #1a1a1a;
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          font-weight: 500;
        }

        .btn-cancel:hover {
          background: #1a1a1a;
          color: #f5f2ee;
        }
      `}</style>

            <div className="profile-page">
                <div className="profile-card">

                    {/* Header */}
                    <div className="profile-header">
                        <h1>My Profile</h1>
                        <div className="avatar-wrapper">
                            {user?.photoURL ? (
                                <img
                                    src={user.photoURL}
                                    alt={user.displayName || "User"}
                                    className="avatar-img"
                                    onError={(e) => { e.target.style.display = "none"; }}
                                />
                            ) : (
                                <div className="avatar-fallback">{avatarFallback}</div>
                            )}
                        </div>
                    </div>

                    {/* Body */}
                    <div className="profile-body">
                        {!isEditing ? (
                            <>
                                {/* User info rows */}
                                <div className="info-row">
                                    <span className="info-label">Name</span>
                                    <span className="info-value">
                                        {user?.displayName || <span className="muted">No name set</span>}
                                    </span>
                                </div>

                                <div className="info-row">
                                    <span className="info-label">Email</span>
                                    <span className="info-value">
                                        {user?.email || <span className="muted">No email</span>}
                                    </span>
                                </div>

                                <div className="info-row">
                                    <span className="info-label">Photo URL</span>
                                    <span className="info-value">
                                        {user?.photoURL
                                            ? user.photoURL
                                            : <span className="muted">No photo URL set</span>}
                                    </span>
                                </div>

                                <button
                                    className="btn-update"
                                    onClick={() => {
                                        setNewName(user?.displayName || "");
                                        setNewPhotoURL(user?.photoURL || "");
                                        setIsEditing(true);
                                    }}
                                >
                                    Update Profile
                                </button>
                            </>
                        ) : (
                            <form className="edit-form" onSubmit={handleUpdate}>
                                <div className="field-group">
                                    <label className="field-label">Name</label>
                                    <input
                                        type="text"
                                        className="field-input"
                                        value={newName}
                                        onChange={(e) => setNewName(e.target.value)}
                                        placeholder="Your name"
                                    />
                                </div>

                                <div className="field-group">
                                    <label className="field-label">Photo URL</label>
                                    <input
                                        type="text"
                                        className="field-input"
                                        value={newPhotoURL}
                                        onChange={(e) => setNewPhotoURL(e.target.value)}
                                        placeholder="https://example.com/photo.jpg"
                                    />
                                </div>

                                <div className="form-actions">
                                    <button
                                        type="button"
                                        className="btn-cancel"
                                        onClick={() => setIsEditing(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn-save"
                                        disabled={loading}
                                    >
                                        {loading ? "Saving…" : "Save"}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </>
    );
};

export default MyProfile;