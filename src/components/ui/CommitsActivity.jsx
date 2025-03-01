import { useState, useEffect } from "react";
import { GitCommit, AlertCircle, Loader } from "lucide-react";

const CommitActivity = ({ repositories, token }) => {
  const [commits, setCommits] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const results = await Promise.allSettled(
          repositories.map(async ({ owner, repo }) => {
            const repoPath = `${owner}/${repo}`;
            try {
              const response = await fetch(
                `https://api.github.com/repos/${repoPath}/events`,
                {
                  headers: {
                    ...(token ? { Authorization: `token ${token}` } : {}),
                    Accept: "application/vnd.github.v3+json",
                  },
                }
              );

              if (!response.ok) {
                // Get more detailed error information
                const errorData = await response.json().catch(() => ({}));
                const errorMsg =
                  errorData.message ||
                  response.statusText ||
                  `Status: ${response.status}`;
                throw new Error(
                  `Failed to fetch commits for ${repoPath}: ${errorMsg}`
                );
              }

              const data = await response.json();
              return { repoPath, data };
            } catch (error) {
              // Store the error for this specific repository
              setErrors((prev) => ({ ...prev, [repoPath]: error.message }));
              // Return empty array for this repo but don't fail the whole request
              return { repoPath, data: [] };
            }
          })
        );

        // Process successful results
        const allEvents = results
          .filter(
            (result) =>
              result.status === "fulfilled" && result.value.data.length > 0
          )
          .map((result) => result.value.data)
          .flat();

        const commitEvents = allEvents
          .filter(
            (event) =>
              event.type === "PushEvent" || event.type === "PullRequestEvent"
          )
          .map((event) => ({
            id: event.id,
            type: event.type === "PushEvent" ? "pushed" : "merged",
            message:
              event.type === "PushEvent"
                ? event.payload.commits?.[0]?.message || "No commit message"
                : event.payload.pull_request?.title || "No PR title",
            count: event.payload.commits?.length || 1,
            repo: `${event.repo.name}`,
            date: new Date(event.created_at).toLocaleDateString(),
          }))
          .sort((a, b) => new Date(b.date) - new Date(a.date));

        setCommits(commitEvents);
      } catch (err) {
        setErrors((prev) => ({ ...prev, general: err.message }));
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
    // Polling less frequently to avoid rate limits
    const interval = setInterval(fetchCommits, 300000); // 5 minutes

    return () => clearInterval(interval);
  }, [repositories, token]);

  if (loading) {
    return (
      <div className="bg-gray-900 p-6 rounded-lg flex items-center justify-center">
        <Loader className="animate-spin text-gray-400" size={24} />
      </div>
    );
  }

  // Show errors but still render available commits
  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div className="relative bg-dashed ring-1 h-80 overflow-hidden ring-dark-300 p-6 rounded-lg mb-11">
      {hasErrors && (
        <div className="mb-4 p-3 bg-red-900/20 rounded-md text-red-400 text-sm">
          <div className="flex items-center gap-2 mb-1">
            <AlertCircle size={16} />
            <span>Some repositories couldn't be fetched:</span>
          </div>
          <ul className="list-disc pl-6">
            {Object.entries(errors).map(([repo, message]) => (
              <li key={repo} className="text-xs">
                {repo}: {message}
              </li>
            ))}
          </ul>
        </div>
      )}

      {commits.length > 0 ? (
        <ul className="space-y-4">
          {commits.map((commit) => (
            <li
              key={commit.id}
              className="flex items-start gap-3 text-dark-400"
            >
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
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-gray-500">
          <GitCommit size={32} className="mb-2 opacity-50" />
          <p>No commit activity found</p>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent" />
    </div>
  );
};

export default CommitActivity;
