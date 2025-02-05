import { useState, useEffect } from "react";
import { GitCommit, AlertCircle, Loader } from "lucide-react";

const CommitActivity = ({ repositories, token }) => {
  const [commits, setCommits] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const allEvents = await Promise.all(
          repositories.map(async ({ owner, repo }) => {
            const response = await fetch(
              `https://api.github.com/repos/${owner}/${repo}/events`,
              {
                headers: token
                  ? {
                      Authorization: `Bearer ${token}`,
                    }
                  : {},
              }
            );

            if (!response.ok) {
              throw new Error(`Failed to fetch commits for ${owner}/${repo}`);
            }

            return response.json();
          })
        );

        const commitEvents = allEvents
          .flat()
          .filter(
            (event) =>
              event.type === "PushEvent" || event.type === "PullRequestEvent"
          )
          .map((event) => ({
            id: event.id,
            type: event.type === "PushEvent" ? "pushed" : "merged",
            message:
              event.type === "PushEvent"
                ? event.payload.commits[0]?.message
                : event.payload.pull_request?.title,
            count: event.payload.commits?.length || 1,
            repo: `${event.repo.name}`,
            date: new Date(event.created_at).toLocaleDateString(),
          }))
          .sort((a, b) => new Date(b.date) - new Date(a.date));

        setCommits(commitEvents);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
    const interval = setInterval(fetchCommits, 60000);

    return () => clearInterval(interval);
  }, [repositories, token]);

  if (loading) {
    return (
      <div className="bg-gray-900 p-6 rounded-lg flex items-center justify-center">
        <Loader className="animate-spin text-gray-400" size={24} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-900 p-6 rounded-lg flex items-center gap-2 text-red-400">
        <AlertCircle size={16} />
        <span>Error: {error}</span>
      </div>
    );
  }

  return (
    <div className="relative bg-dashed ring-1 h-80 overflow-hidden ring-dark-300 p-6 rounded-lg mb-11">
      <ul className="space-y-4">
        {commits.map((commit) => (
          <li key={commit.id} className="flex items-start gap-3 text-dark-400">
            <div className="mt-1">
              {commit.type === "pushed" ? (
                <GitCommit size={18} className="text-white" />
              ) : (
                <div className="w-4 h-4 rounded-full border-2 border-purple-500" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between">
                <div className="flex items-center gap-2">
                  {commit.type === "pushed" && (
                    <span className="text-sm">
                      Pushed {commit.count}{" "}
                      {commit.count === 1 ? "commit" : "commits"} to
                    </span>
                  )}
                  {commit.type === "merged" && (
                    <span className="text-sm">Merged</span>
                  )}
                  <span className="text-sm font-medium text-gray-200">
                    {commit.repo}
                  </span>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap">
                  {commit.date}
                </span>
              </div>
              <p className="text-sm text-dark-400 mt-1 truncate">
                {commit.message}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent" />
    </div>
  );
};

export default CommitActivity;
