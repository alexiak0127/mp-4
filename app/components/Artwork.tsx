type ArtworkProps = {
  art: {
    id: number;
    title?: string;
    primaryimageurl?: string;
    people?: { name: string }[];
    dated?: string;
  };
};

export default function Artwork({ art }: ArtworkProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white/80 shadow-sm ring-1 ring-slate-200/70">
      {art.primaryimageurl ? (
        <img
          src={art.primaryimageurl}
          alt={art.title || "Artwork"}
          className="h-44 w-full object-cover bg-slate-100"
        />
      ) : (
        <div className="flex h-44 w-full items-center justify-center bg-slate-100/70 text-sm text-slate-400">
          No image
        </div>
      )}

      <div className="space-y-2 px-4 py-4">
        <h4 className="text-base font-semibold leading-tight text-slate-900 line-clamp-2">
          {art.title || "Untitled"}
        </h4>

        {art.people && art.people.length > 0 ? (
          <p className="text-xs text-slate-600">
            By {art.people.map((p) => p.name).join(", ")}
          </p>
        ) : null}

        <div className="flex items-center justify-between">
          {art.dated ? (
            <p className="text-xs text-slate-400">{art.dated}</p>
          ) : (
            <span />
          )}
          <p className="text-[10px] uppercase tracking-wide text-slate-400">
            #{art.id}
          </p>
        </div>
      </div>
    </div>
  );
}
