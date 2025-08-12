import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Tailwind CSS v4: A New Era of Styling",
    date: "2024-08-12",
    excerpt:
      "Exploring the game-changing improvements in Tailwind CSS v4, from the new Rust engine to zero-configuration setup.",
    slug: "tailwind-css-v4-new-era",
  },
  {
    id: 2,
    title: "Tips for Modern Frontend Animations",
    date: "2024-05-20",
    excerpt:
      "My favorite libraries and techniques for adding delightful motion to web interfaces.",
    slug: "modern-frontend-animations",
  },
  {
    id: 3,
    title: "Why Accessibility Matters in Web Design",
    date: "2024-05-10",
    excerpt:
      "Simple steps to make your site more inclusive and accessible to everyone.",
    slug: "accessibility-in-web-design",
  },
];

const Blog = () => {
  return (
    <div className="max-w-5xl mx-auto px-11 py-16">
      <header className="mb-12">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { y: -50, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
          className="font-bebas text-6xl tracking-wide mb-5"
        >
          Blog
        </motion.h1>
        <motion.p 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { y: -20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut", delay: 0.1 },
            },
          }}
          className="text-dark-400 text-lg max-w-2xl"
        >
          Exploring modern web development through practical experiences, technical deep-dives, and lessons learned from building real-world applications.
        </motion.p>
      </header>
      <section className="grid gap-8 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-dark-800 bg-dashed ring-1 ring-dark-300 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2 text-white">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            {/* <p className="text-xs text-dark-400 mb-3">
              {new Date(post.date).toLocaleDateString()}
            </p> */}
            <p className="text-gray-200 mb-4">{post.excerpt}</p>
            <Link
              to={`/blog/${post.slug}`}
              className="text-[#00796e] hover:underline text-sm font-medium"
            >
              Read more →
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Blog;
