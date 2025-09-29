import VideoEmbed from '../VideoEmbed';

export default function VideoEmbedExample() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <VideoEmbed
        provider="youtube"
        id="dQw4w9WgXcQ"
        title="AI Governance and Accessible Futures | Dr. Dédé Tetsubayashi | TEDx"
      />
    </div>
  );
}