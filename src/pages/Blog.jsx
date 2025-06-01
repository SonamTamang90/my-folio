import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "How I Built My Portfolio with React & Tailwind",
    date: "2024-06-01",
    excerpt:
      "A behind-the-scenes look at the design and development process of my portfolio website.",
    slug: "building-portfolio-react-tailwind",
  },
  //   {
  //     id: 2,
  //     title: "Tips for Modern Frontend Animations",
  //     date: "2024-05-20",
  //     excerpt:
  //       "My favorite libraries and techniques for adding delightful motion to web interfaces.",
  //     slug: "modern-frontend-animations",
  //   },
  //   {
  //     id: 3,
  //     title: "Why Accessibility Matters in Web Design",
  //     date: "2024-05-10",
  //     excerpt:
  //       "Simple steps to make your site more inclusive and accessible to everyone.",
  //     slug: "accessibility-in-web-design",
  //   },
];

const Blog = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <header className="mb-12 text-center">
        <h1 className="font-bebas text-4xl md:text-5xl mb-3 tracking-wide">
          Blog
        </h1>
        <p className="text-dark-400 text-lg max-w-2xl mx-auto">
          Insights, tutorials, and stories from my journey as a frontend
          developer.
        </p>
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
