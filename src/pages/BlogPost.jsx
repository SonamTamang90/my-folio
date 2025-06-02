import { useParams, Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "How I Built My Portfolio with React & Tailwind",
    date: "2024-06-01",
    content: `Building my portfolio was something I put off for a long time, but I finally decided to just start. I wanted a site that felt modern, clean, and truly mine, so I chose React for its flexibility and Tailwind CSS for fast, beautiful styling.

I began by sketching a simple layout and listing the sections I wanted: About, Projects, Blog, and Contact. Using React made it easy to break everything into components, and Tailwind let me experiment with design without writing custom CSS for every detail.

One of my favorite parts was adding little touches—like smooth animations with Framer Motion and a GitHub activity feed. I also made sure the site works well on mobile and dark mode looks great.

The biggest lesson? Just start. Even if it's not perfect, you'll learn so much by building and iterating. Now, I'm proud to have a portfolio that grows with me and shows who I am as a developer.`,
    slug: "building-portfolio-react-tailwind",
  },
  {
    id: 2,
    title: "Tips for Modern Frontend Animations",
    date: "2024-05-20",
    content: `Here are my favorite libraries and techniques for adding delightful motion to web interfaces. More content coming soon...`,
    slug: "modern-frontend-animations",
  },
  {
    id: 3,
    title: "Why Accessibility Matters in Web Design",
    date: "2024-05-10",
    content: `Simple steps to make your site more inclusive and accessible to everyone. More content coming soon...`,
    slug: "accessibility-in-web-design",
  },
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="mb-6">
          Sorry, we couldn't find the blog post you're looking for.
        </p>
        <Link to="/blog" className="text-purple-400 hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <Link
        to="/blog"
        className="text-[#00796e] hover:underline text-sm mb-6 inline-block"
      >
        ← Back to Blog
      </Link>
      <h1 className="font-bebas text-4xl md:text-5xl mb-3 tracking-wide">
        {post.title}
      </h1>
      <p className="text-xs text-dark-400 mb-6">
        {new Date(post.date).toLocaleDateString()}
      </p>
      <div className="text-dark-400 leading-relaxed whitespace-pre-line">
        {post.content}
      </div>
    </div>
  );
};

export default BlogPost;
