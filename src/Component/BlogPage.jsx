const Blog = () => {
  return (
    <div>
      <h1>Blog Page</h1>
      <p>Read my latest blog posts:</p>
      <ul>
        <li>
          <a href="/blog/1" className="hover:underline">
            Understanding React Router
          </a>
        </li>
        <li>
          <a href="/blog/2" className="hover:underline">
            Styling with Tailwind CSS
          </a>
        </li>
        <li>
          <a href="/blog/3" className="hover:underline">
            Building a Portfolio Website
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Blog;
