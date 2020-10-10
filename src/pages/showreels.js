import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Lead from "../components/lead/lead";
import Player from "../components/player/player";

const Showreels = ({ location }) => (
  <Layout location={location}>
    <SEO title="Showreels" />
    <Lead title="Showreels" />
    <div className="bg-white py-16">
      <Player
        title="Commercial showreel"
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        image="https://images.pexels.com/photos/4652258/pexels-photo-4652258.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      />
    </div>
  </Layout>
);

export default Showreels;
