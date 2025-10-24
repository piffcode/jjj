
import React from 'react';
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Press() {
  const fullGraphJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://piffmarti.com/#website",
        "url": "https://piffmarti.com",
        "name": "Piff Marti — Official Site",
        "inLanguage": "en",
        "publisher": { "@id": "https://piffmarti.com/#org" }
      },
      {
        "@type": "WebPage",
        "@id": "https://piffmarti.com/press/",
        "url": "https://piffmarti.com/press/",
        "name": "Who is Piff Marti? — Official Press Page",
        "inLanguage": "en",
        "isPartOf": { "@id": "https://piffmarti.com/#website" },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "@id": "https://i.imgur.com/2TEDDq0.jpg",
          "url": "https://i.imgur.com/2TEDDq0.jpg",
          "width": 1200,
          "height": 630
        },
        "breadcrumb": { "@id": "https://piffmarti.com/press/#breadcrumb" },
        "about": { "@id": "https://piffmarti.com/#artist" },
        "mainEntity": { "@id": "https://piffmarti.com/press/#article" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://piffmarti.com/press/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://piffmarti.com/" },
          { "@type": "ListItem", "position": 2, "name": "Press", "item": "https://piffmarti.com/press/" }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://piffmarti.com/#org",
        "name": "Piff Marti",
        "url": "https://piffmarti.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://piffmarti.com/assets/logo.png",
          "width": 600,
          "height": 60
        }
      },
      {
        "@type": "Person",
        "@id": "https://piffmarti.com/#person",
        "name": "Shaquille Edwards",
        "description": "Real name of artist Piff Marti",
        "url": "https://piffmarti.com/about/",
        "worksFor": { "@id": "https://piffmarti.com/#artist" }
      },
      {
        "@type": "MusicGroup",
        "@id": "https://piffmarti.com/#artist",
        "name": "Piff Marti",
        "url": "https://piffmarti.com",
        "genre": ["Hip-Hop","Rap"],
        "member": { "@id": "https://piffmarti.com/#person" },
        "sameAs": [
          "https://open.spotify.com/artist/4yJPiziKjwvjKUnsnsOixM",
          "https://instagram.com/piffmarti",
          "https://x.com/piffmarti",
          "https://www.youtube.com/@piffmartiTV"
        ],
        "mentions": [
          { "@id": "https://piffmarti.com/#artist-drake" },
          { "@id": "https://piffmarti.com/#artist-centralcee" },
          { "@id": "https://piffmarti.com/#artist-dave" },
          { "@id": "https://piffmarti.com/#artist-kendrick" },
          { "@id": "https://piffmarti.com/#artist-babykeem" }
        ],
        "isPartOf": { "@id": "https://piffmarti.com/#website" },
        "hasPart": [
          { "@id": "https://piffmarti.com/music/#track-bounce" },
          { "@id": "https://piffmarti.com/music/#track-fade" }
        ]
      },
      {
        "@type": "MusicGroup",
        "@id": "https://piffmarti.com/#artist-drake",
        "name": "Drake",
        "sameAs": [
          "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4",
          "https://www.wikidata.org/wiki/Q1299"
        ]
      },
      {
        "@type": "MusicGroup",
        "@id": "https://piffmarti.com/#artist-centralcee",
        "name": "Central Cee",
        "sameAs": [
          "https://open.spotify.com/artist/5H4yInM5zmHqpKIoMNAx4r",
          "https://www.wikidata.org/wiki/Q105719216"
        ]
      },
      {
        "@type": "MusicGroup",
        "@id": "https://piffmarti.com/#artist-dave",
        "name": "Dave",
        "sameAs": [
          "https://open.spotify.com/artist/6Ip8FS7vWT1uKkJSweANQK",
          "https://www.wikidata.org/wiki/Q27983000"
        ]
      },
      {
        "@type": "MusicGroup",
        "@id": "https://piffmarti.com/#artist-kendrick",
        "name": "Kendrick Lamar",
        "sameAs": [
          "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg",
          "https://www.wikidata.org/wiki/Q312290"
        ]
      },
      {
        "@type": "MusicGroup",
        "@id": "https://piffmarti.com/#artist-babykeem",
        "name": "Baby Keem",
        "sameAs": [
          "https://open.spotify.com/artist/5SXuuuRpukkTvsLuUknva1",
          "https://www.wikidata.org/wiki/Q67294339"
        ]
      },
      {
        "@type": "NewsArticle",
        "@id": "https://piffmarti.com/press/#article",
        "headline": "Piff: Redefining Rap in the Age of Authenticity",
        "description": "Official press feature on Piff Marti — a Bronx/Harlem rapper of Jamaican heritage who blends vulnerability with uptempo bounce under the Stay Dangerous philosophy.",
        "inLanguage": "en",
        "datePublished": "2025-10-02",
        "dateModified": "2025-10-02",
        "articleSection": "Press Feature",
        "wordCount": 1480,
        "mainEntityOfPage": { "@id": "https://piffmarti.com/press/" },
        "image": { "@id": "https://i.imgur.com/2TEDDq0.jpg" },
        "publisher": { "@id": "https://piffmarti.com/#org" },
        "author": { "@id": "https://piffmarti.com/#person" },
        "about": { "@id": "https://piffmarti.com/#artist" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://piffmarti.com/press/#faq",
        "inLanguage": "en",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who is Piff Marti?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Piff Marti — real name Shaquille Edwards — is a Bronx- and Harlem-raised rapper of Jamaican heritage who blends raw vulnerability with uptempo bounce under the Stay Dangerous philosophy."
            }
          },
          {
            "@type": "Question",
            "name": "What does Stay Dangerous mean?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Stay Dangerous is Piff Marti's philosophy: live authentically even when it feels unsafe. The music encourages people to face themselves while still moving with rhythm and joy."
            }
          },
          {
            "@type": "Question",
            "name": "What is unique about Piff Marti's style?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A fusion of Bronx urgency, Harlem style, and Jamaican rhythm — serious truth with party energy — turning pain into movement."
            }
          },
          {
            "@type": "Question",
            "name": "What artists does Piff Marti sound like?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Piff Marti's sound shares DNA with Drake's emotional honesty, Central Cee and Dave's UK drill sophistication, and Kendrick Lamar's introspective intensity, filtered through a Bronx-Harlem-Jamaica lens."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Piff Marti from?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Piff Marti was raised across the Bronx and Harlem in New York City, with deep Jamaican heritage that influences his musical style."
            }
          }
        ]
      },
      {
        "@type": "MusicRecording",
        "@id": "https://piffmarti.com/music/#track-bounce",
        "name": "Bounce",
        "url": "https://open.spotify.com/track/0YWmeJtd7Fp1tH3978qUIH",
        "inAlbum": { "@type": "MusicAlbum", "name": "Single" },
        "byArtist": { "@id": "https://piffmarti.com/#artist" },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "similarTo",
            "value": [
              {
                "@type": "MusicRecording",
                "name": "Which One",
                "byArtist": [
                  { "@id": "https://piffmarti.com/#artist-drake" },
                  { "@id": "https://piffmarti.com/#artist-centralcee" }
                ],
                "url": "https://open.spotify.com/track/5n0PLpUkqH3W5vBIpdPJKt"
              },
              {
                "@type": "MusicRecording",
                "name": "Sprinter",
                "byArtist": [
                  { "@id": "https://piffmarti.com/#artist-centralcee" },
                  { "@id": "https://piffmarti.com/#artist-dave" }
                ],
                "url": "https://open.spotify.com/track/3TGRt1STbuVJQp5yJ1zgEg"
              }
            ]
          },
          {
            "@type": "PropertyValue",
            "name": "audioFeaturesDataset",
            "value": "https://piffmarti.com/press/audio.json"
          }
        ],
        "mainEntityOfPage": { "@id": "https://piffmarti.com/press/" }
      },
      {
        "@type": "MusicRecording",
        "@id": "https://piffmarti.com/music/#track-fade",
        "name": "Fade",
        "url": "https://open.spotify.com/track/13SZbybWQRfwcZUGLVxVoA",
        "inAlbum": { "@type": "MusicAlbum", "name": "Single" },
        "byArtist": { "@id": "https://piffmarti.com/#artist" },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "similarTo",
            "value": [
              {
                "@type": "MusicRecording",
                "name": "Peekaboo",
                "byArtist": { "@id": "https://piffmarti.com/#artist-kendrick" },
                "url": "https://open.spotify.com/track/4QZXpsC1NshqsK6h28F99G"
              },
              {
                "@type": "MusicRecording",
                "name": "Family Ties",
                "byArtist": [
                  { "@id": "https://piffmarti.com/#artist-kendrick" },
                  { "@id": "https://piffmarti.com/#artist-babykeem" }
                ],
                "url": "https://open.spotify.com/track/4FMY7OkJAPK5V7gXJRnYoP"
              }
            ]
          },
          {
            "@type": "PropertyValue",
            "name": "audioFeaturesDataset",
            "value": "https://piffmarti.com/press/audio.json"
          }
        ],
        "mainEntityOfPage": { "@id": "https://piffmarti.com/press/" }
      },
      {
        "@type": "MusicPlaylist",
        "@id": "https://piffmarti.com/music/#playlist-bounce-context",
        "name": "Bounce — Context & Similar Energy",
        "description": "A contextual playlist grouping Piff Marti's Bounce with adjacent records for energy and feel.",
        "numTracks": 3,
        "url": "https://open.spotify.com/playlist/YOUR_PLAYLIST_ID",
        "track": [
          { "@id": "https://piffmarti.com/music/#track-bounce" },
          {
            "@type": "MusicRecording",
            "name": "Which One",
            "byArtist": [
              { "@id": "https://piffmarti.com/#artist-drake" },
              { "@id": "https://piffmarti.com/#artist-centralcee" }
            ],
            "url": "https://open.spotify.com/track/5n0PLpUkqH3W5vBIpdPJKt"
          },
          {
            "@type": "MusicRecording",
            "name": "Sprinter",
            "byArtist": [
              { "@id": "https://piffmarti.com/#artist-centralcee" },
              { "@id": "https://piffmarti.com/#artist-dave" }
            ],
            "url": "https://open.spotify.com/track/3TGRt1STbuVJQp5yJ1zgEg"
          }
        ],
        "mainEntityOfPage": { "@id": "https://piffmarti.com/press/" }
      },
      {
        "@type": "MusicPlaylist",
        "@id": "https://piffmarti.com/music/#playlist-fade-context",
        "name": "Fade — Context & Similar Energy",
        "description": "A contextual playlist grouping Piff Marti's Fade with adjacent records for intensity and tone.",
        "numTracks": 3,
        "url": "https://open.spotify.com/playlist/YOUR_PLAYLIST_ID",
        "track": [
          { "@id": "https://piffmarti.com/music/#track-fade" },
          {
            "@type": "MusicRecording",
            "name": "Peekaboo",
            "byArtist": { "@id": "https://piffmarti.com/#artist-kendrick" },
            "url": "https://open.spotify.com/track/4QZXpsC1NshqsK6h28F99G"
          },
          {
            "@type": "MusicRecording",
            "name": "Family Ties",
            "byArtist": [
              { "@id": "https://piffmarti.com/#artist-kendrick" },
              { "@id": "https://piffmarti.com/#artist-babykeem" }
            ],
            "url": "https://open.spotify.com/track/4FMY7OkJAPK5V7gXJRnYoP"
          }
        ],
        "mainEntityOfPage": { "@id": "https://piffmarti.com/press/" }
      },
      {
        "@type": "Dataset",
        "@id": "https://piffmarti.com/press/#audio-dataset",
        "name": "Piff Marti — Audio Feature Comparisons",
        "description": "Feature vectors and similarity comparisons between Piff Marti tracks and reference tracks.",
        "creator": { "@id": "https://piffmarti.com/#artist" },
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "inLanguage": "en",
        "distribution": {
          "@type": "DataDownload",
          "encodingFormat": "application/json",
          "contentUrl": "https://piffmarti.com/press/audio.json"
        }
      }
    ]
  };

  return (
    <>
      {/* Structured Data for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fullGraphJsonLd) }}
      />

      <style>{`
        :root { --maxw: 860px; --accent: #ff0000; }
        .press-page-body { font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; background: #000; color: #fff; }
        .press-page-main { max-width: var(--maxw); margin: 0 auto; padding: 32px 20px 64px; }
        .press-page-main header h1 { font-family: "Archivo Black", Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; font-size: 2.25rem; line-height: 1.2; margin: 12px 0 6px; color: var(--accent); }
        .press-page-main header .dek { color:#c7c7c7; margin: 0 0 16px; font-size: 1.05rem; }
        .press-page-main article h2 { font-size: 1.25rem; margin: 28px 0 12px; color: #fff; }
        .press-page-main article p { line-height: 1.75; margin: 0 0 16px; color:#e9e9e9; }
        .press-page-main .rule { border: 0; height: 1px; background: linear-gradient(90deg, rgba(255,0,0,.4), rgba(255,0,0,.05)); margin: 26px 0; }
        .press-page-main .breadcrumbs { font-size:.9rem; color:#f2e7b1; }
        .press-page-main .breadcrumbs a { color:#9a9a9a; text-decoration:none; }
        .press-page-main .breadcrumbs a:hover { color:#fff; text-decoration:underline; }
        
        .photo-embed { margin: 32px 0; text-align: center; }
        .video-container--vertical {
          position: relative;
          padding-bottom: 177.78%;
          height: 0;
          overflow: hidden;
          max-width: 360px;
          margin: 0 auto;
          border-radius: 8px;
        }
        .video-container--vertical iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 8px;
        }
        .photo-caption { color: #8a8a8a; font-size: 0.9rem; margin-top: 8px; font-style: italic; }
        
        .photo-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
          gap: 16px; 
          margin: 32px 0; 
        }
        .photo-grid .video-container--vertical {
          max-width: 100%;
        }
      `}</style>
      <div className="press-page-body">
        <main className="press-page-main">

          <nav className="" aria-label="Breadcrumbs">

          </nav>

          <header>
            <h1 className="text-[#f2e7b1]">Who is Piff Marti?</h1>
            <hr className="rule" />
          </header>

          {/* === PHOTO EMBED === */}
          {/* To change the image, replace the `src` URL below with a link to your photo. */}
          <div className="my-8">
            <img 
              src="https://i.imgur.com/2TEDDq0.jpg" 
              alt="Piff Marti performing at Rock The Daisies Festival in South Africa"
              className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-xl mx-auto"
            />
            <p className="photo-caption text-center mt-2">
              Piff Marti performing at Rock The Daisies Festival in South Africa
            </p>
          </div>
          {/* === END PHOTO EMBED === */}

          <article>
            <p>In today's rap landscape, artists rise and fall in the glare of constant visibility. Algorithms reward repetition, TikTok rewards spectacle, and the line between persona and self blurs daily. Some artists respond by disappearing, cultivating mystique through scarcity. Others lean all the way in, building empires on relatability and nonstop output.</p>

            <p><strong>Piff, whose real name is Shaquille Edwards,</strong> is carving out a third lane - one rooted in energy, truth, and transformation. He isn't interested in spectacle for its own sake, nor does he chase obscurity. Instead, he uses vulnerability as his weapon, rhythm as his shield, and community as his focus.</p>
            <div className="photo-embed">
              <div className="video-container--vertical">
                <iframe
                  src="https://player.vimeo.com/video/1126688054"
                  title="Boys Do Cry by Piff Marti"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen>
                </iframe>
              </div>
              <p className="photo-caption">Boys Do Cry by Piff Marti</p>
            </div>
            <hr className="rule" />
            <h2>The Push and Pull of Rap Identities Today</h2>

            <p>Since 2017, rap has seen artists define themselves as much by their relationship to visibility as by their music. Playboi Carti built a brand on silence and scarcity, letting fans mythologize him. Central Cee and Lil Baby, on the other hand, thrived on relentless presence, turning streets and struggle into anthems the world could stream. Kendrick Lamar - one of the few to straddle both lanes - proved with <em>DAMN.</em> and <em>Mr. Morale &amp; the Big Steppers</em> that vulnerability could headline arenas.</p>

            <p>Piff belongs to this moment, but he's not replicating anyone's blueprint. His music blends Bronx urgency, Harlem style, and Jamaican bounce. His philosophy, <em>Stay Dangerous</em>, is less about image and more about survival: a call to live authentically even when it costs.</p>

            <p>"Being authentic is risky as hell," Piff admits. "It takes so much to bare my soul in songs about addiction, child abuse, depression, lust. But if I don't speak the truth, I can't see it. Music is how I face myself."</p>

            <hr className="rule" />
            <h2>The Rhythm of Three Worlds</h2>

            <p>Piff grew up between the Bronx and Harlem, raised by Jamaican parents who filled the home with rhythm and memory. The Bronx instilled urgency: a need to speak directly, to waste no words. Harlem gave him flare and style, sharpening how he carried himself. Jamaica gave him rhythm - the uptempo pulse of reggae and dancehall, the "special sauce" that lives in his beats even when he's rapping over hip-hop drums.</p>

            <p>On College Avenue, the soundtrack was everywhere: reggae and dancehall spilling from corner speakers, kids "getting lite" on the block, his mom's Saturday cleaning ritual of Al Green, Jackie Moore, and the Isley Brothers echoing through the house. Cyphers with friends were part play, part survival - freestyle verses traded back and forth like sparks, shaping a voice that was sharp before it was fully grown.</p>

            <p>"That bounce, that uptempo feel - it's in me," he explains. "Even when I'm talking about heavy things, I want people to feel energy, to alchemize their pain through movement. That's the Jamaican part of me. We turn struggle into rhythm."</p>

            <div className="photo-grid">
              <div className="video-container--vertical">
                <iframe src="https://player.vimeo.com/video/1126688109" title="Bounce by Piff Marti" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
            <p className="photo-caption" style={{ textAlign: 'center', marginTop: '-24px' }}>Bounce by Piff Marti</p>

            <hr className="rule" />
            <h2>The Risk of Vulnerability</h2>

            <p>In rap, where bravado is often the default, vulnerability can feel like exposure. Piff has leaned into that exposure deliberately, making his own scars the raw material of his art. Songs that touch on depression, abuse, and addiction are not outliers in his catalog - they're anchors.</p>

            <p>"The hardest truth I had to accept about myself is that I kind of have to speak the truth or else I won't see it," he says. "Music is my way of facing myself. And when people connect with it, I realize I'm not alone."</p>

            <p>The messages he receives confirm it. One fan told him that <em>Boys Do Cry</em> gave him the courage to talk to his father about feelings for the first time in his life. Others write about how Piff's openness gave them language to explain experiences they had carried silently. "That's bigger than streams," Piff reflects. "That's healing."</p>

            <hr className="rule" />
            <h2>Connection Beyond Clout</h2>

            <p>At a time when virality can overshadow depth, Piff is more focused on connection than clout. His live shows embody that philosophy. They're not just concerts; they feel like Bronx block parties - high-energy, interactive, communal. Fans dance, chant lyrics, and let loose.</p>

            <p>"I love when they dance, man," Piff says. "We're all here for a common reason, and I feed off that energy."</p>

            <p>Afterward, he doesn't retreat backstage. He makes it a point to meet each fan - shaking hands, taking pictures, sharing words. "It's important to me to look them in the eye and say thank you," he explains. "Because if they gave me their time and their energy, the least I can do is give them mine."</p>

            <p>This emphasis on presence transforms shows into more than entertainment. They become moments of healing, where people leave not only remembering the beat but carrying a piece of the courage Piff modeled on stage.</p>

            <div className="photo-embed">
              <div className="video-container--vertical">
                <iframe src="https://player.vimeo.com/video/1126687699" title="Piff Marti meeting fans after a show" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
              </div>
              <p className="photo-caption">I Ain't Trippin by Piff Marti</p>
            </div>

            <hr className="rule" />
            <h2>The Alchemy of Pain and Joy</h2>

            <p>What sets Piff apart musically is his refusal to separate heaviness from joy. He doesn't reserve one type of track for personal confession and another for club energy. Instead, he fuses them.</p>

            <p>"I like to blend the realness of serious topics with the bounce and energy of a jovial spirit," he says. "Because people want to alchemize their pain. They want to feel it, but also move through it."</p>

            <p>That balance defines his catalog: songs that don't shy away from darkness but carry an uptempo rhythm that insists on motion. The music is at once medicine and movement - proof that even when life deals heavy cards, the body can still dance.</p>

            <hr className="rule" />
            <h2>Building Toward Legacy</h2>

            <p>Shaquille Edwards is candid about his struggles: fear of abandonment, trust issues, the battle to stay consistent. But instead of hiding them, he threads them into his music. That honesty turns his art into a mirror, showing listeners that their flaws and wounds are not disqualifications but shared human terrain.</p>

            <p>"Five years from now, I don't just want fans who know my catalog," he says. "I want fans who grew with me, who faced themselves differently because of my music."</p>

            <p>His philosophy, <em>Stay Dangerous</em>, functions both as brand and manifesto. On one level, it's a rallying cry - a reminder to live fully expressed. On another, it's a warning: authenticity is never safe, but it is necessary.</p>

            <p>"Stay Dangerous means living authentically even when it feels unsafe," he explains. "It's saying the thing you're afraid to say, creating without apology, standing in truth even when it hurts."</p>

            <hr className="rule" />
            <h2>Looking Ahead</h2>

            <p>As rap continues to evolve, Piff is proving that vulnerability itself can be performance, and authenticity itself can be spectacle. His shows are parties, his lyrics are confessions, his presence is a challenge: to be real, no matter the cost.</p>

            <p>He knows the headline he wants written about him one day: "Piff helped a generation face themselves without losing their rhythm."</p>

            <p>Until then, he will keep building, keep performing, keep transforming pain into bounce. In a moment where rap often confuses visibility with value, Piff - Shaquille Edwards - reminds us that the most radical thing an artist can do is simply to be real.</p>
          </article>
        </main>
      </div>
    </>
  );
}
