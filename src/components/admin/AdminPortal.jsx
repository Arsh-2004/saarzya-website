import { useState, useEffect } from "react";
import {
  getStoredPosts,
  savePost,
  deletePost,
  resetPostsToDefault,
  getAdminPasscode,
  setAdminPasscode,
  compressImage,
} from "../../utils/postsStorage";
import { navigateTo } from "../../utils/router";
import {
  Lock,
  Plus,
  Edit2,
  Trash2,
  LogOut,
  Key,
  Globe,
  RotateCcw,
  BookOpen,
  Image as ImageIcon,
  CheckCircle2,
  X,
} from "lucide-react";

function AdminPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState("");
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [changePasscodeOpen, setChangePasscodeOpen] = useState(false);
  const [newPasscode, setNewPasscode] = useState("");
  const [passcodeSuccess, setPasscodeSuccess] = useState("");

  // Form State
  const [formData, setFormData] = useState({
    id: "",
    type: "Magazine",
    title: "",
    badge: "Quarterly Edition",
    author: "Saarzya Team",
    image: "",
    pdfUrl: "",
    buttonText: "Know More Or Subscribe",
    description: "",
    content: "",
  });

  useEffect(() => {
    const sessionAuth = sessionStorage.getItem("saarzya_admin_auth");
    if (sessionAuth === "true") {
      setIsAuthenticated(true);
      setPosts(getStoredPosts());
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const currentPasscode = getAdminPasscode();
    if (passcode === currentPasscode) {
      setIsAuthenticated(true);
      sessionStorage.setItem("saarzya_admin_auth", "true");
      setPosts(getStoredPosts());
      setAuthError("");
    } else {
      setAuthError("Incorrect admin passcode. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("saarzya_admin_auth");
    setPasscode("");
  };

  const openCreateModal = () => {
    setFormData({
      id: "",
      type: "Magazine",
      title: "",
      badge: "Quarterly Edition",
      author: "Saarzya Team",
      image: "/assets/logo.jpg",
      pdfUrl: "/assets/saarzya-magazine-issue-01.pdf",
      buttonText: "Know More Or Subscribe",
      description: "",
      content: "",
    });
    setEditingPost(null);
    setIsModalOpen(true);
  };

  const openEditModal = (post) => {
    setFormData({
      id: post.id,
      type: post.type || "Article / Blog",
      title: post.title || "",
      badge: post.badge || "Featured",
      author: post.author || "Saarzya Team",
      image: post.image || "",
      pdfUrl: post.pdfUrl || "",
      buttonText: post.buttonText || (post.type === "Magazine" ? "Know More Or Subscribe" : "Read Article"),
      description: post.description || "",
      content: post.content || "",
    });
    setEditingPost(post);
    setIsModalOpen(true);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const compressedDataUrl = await compressImage(file, 800, 800, 0.75);
        setFormData((prev) => ({ ...prev, image: compressedDataUrl }));
      } catch (err) {
        console.error("Compression failed, fallback to FileReader:", err);
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData((prev) => ({ ...prev, image: reader.result }));
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSavePost = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) {
      alert("Please fill in the title and description.");
      return;
    }
    const updated = savePost(formData);
    setPosts(updated);
    setIsModalOpen(false);
  };

  const handleDeletePost = (id) => {
    if (window.confirm("Are you sure you want to delete this publication?")) {
      const updated = deletePost(id);
      setPosts(updated);
    }
  };

  const handleResetDefaults = () => {
    if (window.confirm("Reset all magazines & blogs to default sample posts?")) {
      const updated = resetPostsToDefault();
      setPosts(updated);
    }
  };

  const handleChangePasscode = (e) => {
    e.preventDefault();
    if (!newPasscode || newPasscode.length < 4) {
      alert("Passcode must be at least 4 characters long.");
      return;
    }
    setAdminPasscode(newPasscode);
    setPasscodeSuccess("Passcode updated successfully!");
    setTimeout(() => {
      setPasscodeSuccess("");
      setChangePasscodeOpen(false);
      setNewPasscode("");
    }, 1500);
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f9f6f0] px-4 py-12">
        <div className="w-full max-w-md rounded-3xl border border-moss/20 bg-white p-8 shadow-xl">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-moss/10 text-moss">
              <Lock size={32} />
            </div>
            <h1 className="font-heading text-3xl text-slate">Saarzya Admin Portal</h1>
            <p className="mt-2 text-sm text-slate/70">
              Enter your passcode to manage magazines, blogs & resources.
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label htmlFor="admin-passcode" className="block text-xs font-semibold uppercase tracking-wider text-slate/70">
                Admin Passcode
              </label>
              <input
                id="admin-passcode"
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode"
                className="mt-2 w-full rounded-2xl border border-moss/20 bg-cream/40 px-4 py-3 text-slate outline-none focus:border-moss"
              />
              {authError && <p className="mt-2 text-xs text-red-600">{authError}</p>}
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-moss py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-sage"
            >
              Unlock Portal
            </button>
          </form>

          <div className="mt-6 flex items-center justify-between border-t border-moss/15 pt-5 text-xs text-slate/60">
            <span>Default passcode: <code className="rounded bg-slate/10 px-1.5 py-0.5">saarzya2026</code></span>
            <button onClick={() => navigateTo("/")} className="font-semibold text-moss hover:underline">
              Return to Site
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard Screen
  return (
    <div className="min-h-screen bg-[#f9f6f0] text-slate">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 border-b border-moss/15 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.jpg" alt="Saarzya logo" className="h-10 w-10 rounded-xl border border-moss/20 object-contain" />
            <div>
              <h1 className="font-heading text-xl text-moss">Saarzya Admin</h1>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate/60">Magazines & Blogs Management</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateTo("/")}
              className="inline-flex items-center gap-1.5 rounded-full border border-moss/20 px-4 py-2 text-xs font-semibold text-slate hover:bg-moss/10"
            >
              <Globe size={14} /> View Site
            </button>
            <button
              onClick={() => setChangePasscodeOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-full border border-moss/20 px-4 py-2 text-xs font-semibold text-slate hover:bg-moss/10"
            >
              <Key size={14} /> Change Passcode
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-4 py-2 text-xs font-semibold text-red-600 hover:bg-red-100"
            >
              <LogOut size={14} /> Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-heading text-3xl text-slate">Manage Publications</h2>
            <p className="mt-1 text-sm text-slate/70">
              Create, edit, or remove magazines, articles, and resource guides live on Saarzya.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleResetDefaults}
              className="inline-flex items-center gap-2 rounded-full border border-moss/20 bg-white px-4 py-2.5 text-xs font-semibold text-slate hover:bg-cream"
            >
              <RotateCcw size={14} /> Reset Defaults
            </button>
            <button
              onClick={openCreateModal}
              className="inline-flex items-center gap-2 rounded-full bg-moss px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-sage"
            >
              <Plus size={16} /> Create New Post
            </button>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col justify-between rounded-3xl border border-moss/20 bg-white p-6 shadow-sm">
              <div>
                <div className="relative mb-4 h-48 w-full overflow-hidden rounded-2xl border border-moss/10 bg-cream">
                  <img src={post.image || "/assets/logo.jpg"} alt={post.title} className="h-full w-full object-cover object-top" />
                  <span className="absolute right-3 top-3 rounded-full bg-moss px-3 py-1 text-xs font-semibold text-white shadow">
                    {post.badge}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-moss font-semibold uppercase tracking-wider">
                  <span>{post.type}</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="mt-2 font-heading text-xl text-slate">{post.title}</h3>
                <p className="mt-2 line-clamp-3 text-xs leading-6 text-slate/75">{post.description}</p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-moss/10 pt-4">
                <span className="text-xs text-slate/60">By {post.author}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openEditModal(post)}
                    className="rounded-full border border-moss/20 p-2 text-moss hover:bg-moss/10"
                    title="Edit Post"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="rounded-full border border-red-200 p-2 text-red-600 hover:bg-red-50"
                    title="Delete Post"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Create / Edit Post Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-moss/15 pb-4">
              <h3 className="font-heading text-2xl text-slate">
                {editingPost ? "Edit Publication" : "Create New Publication"}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="rounded-full p-2 hover:bg-slate/10">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSavePost} className="mt-6 space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate/70">Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Saarzya Wellness Edition Vol. 2"
                  className="mt-2 w-full rounded-2xl border border-moss/20 bg-cream/30 px-4 py-3 text-slate outline-none focus:border-moss"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate/70">Category / Type</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="mt-2 w-full rounded-2xl border border-moss/20 bg-cream/30 px-3 py-3 text-slate outline-none focus:border-moss"
                  >
                    <option value="Magazine">Magazine</option>
                    <option value="Article / Blog">Article / Blog</option>
                    <option value="Resource Guide">Resource Guide</option>
                    <option value="News & Tip">News & Tip</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate/70">Badge Label</label>
                  <input
                    type="text"
                    value={formData.badge}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                    placeholder="e.g. Latest Release"
                    className="mt-2 w-full rounded-2xl border border-moss/20 bg-cream/30 px-4 py-3 text-slate outline-none focus:border-moss"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate/70">Author</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    placeholder="e.g. Aarzoo & Sanyukta"
                    className="mt-2 w-full rounded-2xl border border-moss/20 bg-cream/30 px-4 py-3 text-slate outline-none focus:border-moss"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate/70">Cover Showcase Image</label>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="block w-full text-xs text-slate/70 file:mr-4 file:rounded-full file:border-0 file:bg-moss/10 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-moss hover:file:bg-moss/20"
                  />
                  <span className="text-xs text-slate/50">or URL:</span>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="Image URL"
                    className="w-full rounded-2xl border border-moss/20 bg-cream/30 px-3 py-2 text-xs outline-none focus:border-moss"
                  />
                </div>
                {formData.image && (
                  <div className="mt-3 flex items-center gap-3">
                    <img src={formData.image} alt="Preview" className="h-16 w-16 rounded-xl border border-moss/20 object-cover object-top" />
                    <span className="text-xs text-slate/60">Front Cover Preview</span>
                  </div>
                )}
              </div>

              {/* Magazine PDF Link & Button Text */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate/70">Full Magazine PDF Link / URL</label>
                  <input
                    type="text"
                    value={formData.pdfUrl}
                    onChange={(e) => setFormData({ ...formData, pdfUrl: e.target.value })}
                    placeholder="e.g. /assets/saarzya-magazine-issue-01.pdf"
                    className="mt-2 w-full rounded-2xl border border-moss/20 bg-cream/30 px-4 py-3 text-xs outline-none focus:border-moss"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate/70">Button Label on Front Page</label>
                  <input
                    type="text"
                    value={formData.buttonText}
                    onChange={(e) => setFormData({ ...formData, buttonText: e.target.value })}
                    placeholder="e.g. Know More Or Subscribe"
                    className="mt-2 w-full rounded-2xl border border-moss/20 bg-cream/30 px-4 py-3 text-xs outline-none focus:border-moss"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate/70">Short Summary *</label>
                <textarea
                  required
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Brief 1-2 sentence teaser summary..."
                  className="mt-2 w-full rounded-2xl border border-moss/20 bg-cream/30 px-4 py-3 text-slate outline-none focus:border-moss"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate/70">Full Article Content</label>
                <textarea
                  rows={6}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Write the full article body, guided exercises, or magazine highlights here..."
                  className="mt-2 w-full rounded-2xl border border-moss/20 bg-cream/30 px-4 py-3 text-slate outline-none focus:border-moss leading-relaxed"
                />
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-moss/15 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full border border-moss/20 px-6 py-2.5 text-xs font-semibold text-slate hover:bg-slate/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-moss px-7 py-2.5 text-xs font-semibold text-white shadow hover:bg-sage"
                >
                  {editingPost ? "Save Changes" : "Publish Post"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Change Passcode Modal */}
      {changePasscodeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-moss/15 pb-3">
              <h3 className="font-heading text-xl text-slate">Change Admin Passcode</h3>
              <button onClick={() => setChangePasscodeOpen(false)} className="rounded-full p-1.5 hover:bg-slate/10">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleChangePasscode} className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate/70">New Passcode</label>
                <input
                  type="password"
                  required
                  value={newPasscode}
                  onChange={(e) => setNewPasscode(e.target.value)}
                  placeholder="Enter new passcode"
                  className="mt-2 w-full rounded-2xl border border-moss/20 bg-cream/30 px-4 py-3 text-slate outline-none focus:border-moss"
                />
              </div>

              {passcodeSuccess && (
                <div className="flex items-center gap-2 text-xs font-semibold text-green-600">
                  <CheckCircle2 size={16} /> {passcodeSuccess}
                </div>
              )}

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setChangePasscodeOpen(false)}
                  className="rounded-full border border-moss/20 px-5 py-2 text-xs font-semibold text-slate"
                >
                  Cancel
                </button>
                <button type="submit" className="rounded-full bg-moss px-6 py-2 text-xs font-semibold text-white">
                  Update Passcode
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPortal;
