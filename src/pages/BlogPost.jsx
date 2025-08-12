import { useParams, Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Tailwind CSS v4: A New Era of Styling",
    date: "2024-08-12",
    content: `After months of anticipation, Tailwind CSS v4 has finally arrived, and it's bringing some game-changing improvements that every frontend developer should know about. Having worked with Tailwind for years, I'm excited to share what makes this release so special.

**The Biggest Change: Native CSS Engine**

The most significant update in v4 is the move away from PostCSS to a custom-built engine written in Rust. This isn't just a technical detail—it translates to dramatically faster build times. In my testing, projects that took 800ms to compile now finish in under 200ms. For large applications, this speed boost is transformative.

**Zero Configuration, Maximum Power**

One of the pain points with earlier versions was the initial setup complexity. V4 introduces true zero-configuration installation. Simply run \`npm install tailwindcss@next\` and you're ready to go. No more wrestling with PostCSS configurations or wondering why your setup isn't working.

**CSS-First Architecture**

The new architecture feels more natural to CSS developers. Instead of relying heavily on JavaScript configuration, v4 embraces CSS with features like:

- CSS imports that work out of the box
- Better integration with existing CSS workflows
- Improved developer experience in CSS-focused editors

**Enhanced Developer Experience**

What really impressed me is the attention to developer experience. The new CLI is intuitive, error messages are clearer, and the compilation process is more reliable. Hot reloading feels snappier, and the overall development flow is smoother.

**Better Performance by Default**

V4 automatically optimizes your CSS output more aggressively. Unused styles are eliminated more efficiently, and the final bundle sizes are noticeably smaller. This isn't just good for performance—it's good for your users' experience.

**Migration Made Simple**

Worried about upgrading? The Tailwind team has done excellent work making the migration path straightforward. Most v3 projects can upgrade with minimal changes, and the migration guide is comprehensive without being overwhelming.

**Looking Forward**

Tailwind CSS v4 feels like a maturation of the framework. It maintains everything we love about utility-first CSS while addressing the pain points that have emerged over years of real-world usage. The performance improvements alone make it worth considering, but the enhanced developer experience seals the deal.

If you're starting a new project, v4 is the obvious choice. If you're on v3, the upgrade is worth planning for—your future self will thank you for the faster build times and smoother development experience.

The future of utility-first CSS looks brighter than ever.`,
    slug: "tailwind-css-v4-new-era",
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
