import { InstagramEmbed } from "react-social-media-embed";

function InstagramPost({ url }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <InstagramEmbed url={url} width={328} captioned />
    </div>
  );
}

export default InstagramPost;
