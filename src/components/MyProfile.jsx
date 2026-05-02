import { use, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";

const MyProfile = () => {
    const { user, setUser, updateUser } = use(AuthContext);
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(user?.displayName || "");
    const [newPhotoURL, setNewPhotoURL] = useState(user?.photoURL || "");
    const [loading, setLoading] = useState(false);
    console.log(user)

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        updateUser({ displayName: newName, photoURL: newPhotoURL })
            .then(() => {
                setUser({ ...user, displayName: newName, photoURL: newPhotoURL });
                toast.success("Profile updated successfully!");
                setIsEditing(false);
                setTimeout(() => {
                    setLoading(false);
                }, 600);
            })
            .catch((error) => {
                console.error("Update failed:", error);
                toast.error(error.message);
            })
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
            <div className="font-sans min-h-screen bg-white flex items-center justify-center p-8">
                <div className="bg-white rounded-xs shadow-[8px_8px_0px_#1a1a1a] border-2 border-[#1a1a1a] w-full max-w-105 overflow-hidden">

                    {/* Header */}
                    <div className="bg-[#1a1a1a] p-8 text-center relative">
                        <h1 className="font-serif text-[#f5f2ee] text-[1.1rem] tracking-[0.15em] uppercase font-normal m-0">
                            My Profile
                        </h1>

                        <div className="mt-6 mx-auto w-24 h-24 relative">
                            {user?.photoURL ? (
                                <img
                                    src={user.photoURL}
                                    alt={user.displayName || "User"}
                                    className="w-24 h-24 rounded-full object-cover border-[3px] border-[#f5f2ee]"
                                    onError={(e) => { e.target.style.display = "none"; }}
                                />
                            ) : (
                                <div className="w-24 h-24 rounded-full bg-[#c8b89a] border-[3px] border-[#f5f2ee] flex items-center justify-center font-serif text-[2.2rem] text-[#1a1a1a]">
                                    {avatarFallback}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="p-8">
                        {!isEditing ? (
                            <>
                                <div className="flex flex-col gap-[0.3rem] py-4 border-b border-[#e8e3dc] last:border-b-0">
                                    <span className="text-[0.7rem] tracking-[0.12em] uppercase text-[#999] font-medium">
                                        Name
                                    </span>
                                    <span className="text-base text-[#1a1a1a] break-all">
                                        {user?.displayName || (
                                            <span className="text-[#aaa] italic text-[0.9rem]">No name set</span>
                                        )}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-[0.3rem] py-4 border-b border-[#e8e3dc] last:border-b-0">
                                    <span className="text-[0.7rem] tracking-[0.12em] uppercase text-[#999] font-medium">
                                        Email
                                    </span>
                                    <span className="text-base text-[#1a1a1a] break-all">
                                        {user?.email || (
                                            <span className="text-[#aaa] italic text-[0.9rem]">No email</span>
                                        )}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-[0.3rem] py-4 border-b border-[#e8e3dc] last:border-b-0">
                                    <span className="text-[0.7rem] tracking-[0.12em] uppercase text-[#999] font-medium">
                                        Photo URL
                                    </span>
                                    <span className="text-base text-[#1a1a1a] break-all">
                                        {user?.photoURL ? (
                                            user.photoURL
                                        ) : (
                                            <span className="text-[#aaa] italic text-[0.9rem]">
                                                No photo URL set
                                            </span>
                                        )}
                                    </span>
                                </div>

                                <button
                                    className="w-full mt-6 py-[0.85rem] hover:cursor-pointer bg-[#1a1a1a] text-[#f5f2ee] border-2 border-[#1a1a1a] rounded-xs text-[0.85rem] tracking-[0.12em] uppercase font-medium transition-colors duration-200 hover:bg-[#f5f2ee] hover:text-[#1a1a1a]"
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
                            <form
                                className="flex flex-col gap-4 animate-[slideDown_0.25s_ease]"
                                onSubmit={handleUpdate}
                            >
                                <div className="flex flex-col gap-[0.4rem]">
                                    <label className="text-[0.7rem] tracking-[0.12em] uppercase text-[#999] font-medium">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="px-[0.85rem] py-[0.65rem] border border-[#ddd] rounded-xs text-[0.95rem] text-[#1a1a1a] outline-none bg-[#faf8f5] focus:border-[#1a1a1a] transition-colors"
                                        value={newName}
                                        onChange={(e) => setNewName(e.target.value)}
                                        placeholder="Your name"
                                    />
                                </div>

                                <div className="flex flex-col gap-[0.4rem]">
                                    <label className="text-[0.7rem] tracking-[0.12em] uppercase text-[#999] font-medium">
                                        Photo URL
                                    </label>
                                    <input
                                        type="text"
                                        className="px-[0.85rem] py-[0.65rem] border border-[#ddd] rounded-xs text-[0.95rem] text-[#1a1a1a] outline-none bg-[#faf8f5] focus:border-[#1a1a1a] transition-colors"
                                        value={newPhotoURL}
                                        onChange={(e) => setNewPhotoURL(e.target.value)}
                                        placeholder="https://example.com/photo.jpg"
                                    />
                                </div>

                                <div className="flex gap-3 mt-2">
                                    <button
                                        type="button"
                                            className="flex-1 py-3 bg-transparent hover:cursor-pointer text-[#1a1a1a] border-2 border-[#1a1a1a] rounded-xs text-[0.8rem] tracking-widest uppercase font-medium transition-colors hover:bg-[#1a1a1a] hover:text-[#f5f2ee]"
                                        onClick={() => setIsEditing(false)}
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="flex-1 py-3 bg-[#1a1a1a] hover:cursor-pointer text-[#f5f2ee] border-2 border-[#1a1a1a] rounded-xs text-[0.8rem] tracking-widest uppercase font-medium transition-colors hover:bg-[#333] disabled:opacity-50 disabled:cursor-not-allowed"
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