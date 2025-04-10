export default function Project({ title, image, description, repo, demo }) {
    return (
      <div className="border rounded p-4 shadow">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded mb-2" />
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{description}</p>
        <div className="mt-2">
          <a href={repo} className="text-blue-500 mr-4" target="_blank">GitHub</a>
          <a href={demo} className="text-blue-500" target="_blank">Live Demo</a>
        </div>
      </div>
    );
  }
  