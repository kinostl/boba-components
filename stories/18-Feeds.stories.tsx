import Layout, { LayoutProps } from "layout/Layout";
import { Meta, Story } from "@storybook/react";
import {
  faClock,
  faInbox,
  faLink,
  faSearch,
  faTh,
  faThumbtack,
  faTrash,
  faUnlink,
} from "@fortawesome/free-solid-svg-icons";

import BoardSidebar from "board/LegacyBoardSidebar";
import Button from "buttons/Button";
import CustomCursor from "layout/CustomCursor";
import CycleNewButton from "board/CycleNewButton";
import FeedWithMenu from "feeds/FeedWithMenu";
import MasonryView from "feeds/MasonryView";
import PinnedMenu from "sidemenu/PinnedMenu";
import Post from "post/Post";
import PostingActionButton from "board/PostingActionButton";
import React from "react";
import SideMenu from "sidemenu/SideMenu";
import { action } from "@storybook/addon-actions";
import anime from "./images/anime.png";
import art from "./images/art-crit.png";
import book from "./images/book.png";
import crack from "./images/crack.png";
import debug from "debug";
import goreBackground from "./images/gore.png";
import greedlerAvatar from "./images/greedler.jpg";
import hannibalAvatar from "./images/hannibal.png";
import kinkmeme from "./images/kink-meme.png";
import mamoruAvatar from "./images/mamoru.png";
import meta from "./images/meta.png";
import oncelerAvatar from "./images/oncie.jpg";
import oncelerBoard from "./images/onceler-board.png";
import sparkle from "./images/sparkle.gif";
import tuxedoAvatar from "./images/tuxedo-mask.jpg";
import useBoos from "extra/useBoos";
import { useStateWithCallbackLazy } from "use-state-with-callback";
import villains from "./images/villains.png";
import wand from "./images/sailor_wand.png";

const log = debug("bobaui:stories:layout-log");

const PINNED_BOARDS = [
  {
    slug: "gore",
    muted: true,
    avatar: "/" + goreBackground,
    description: "Love me some bruised bois (and more).",
    color: "#f96680",
    link: { href: "#slug", onClick: action("#slug") },
  },
  {
    slug: "anime",
    avatar: "/" + anime,
    description: "We put the weeb in dweeb.",
    color: "#24d282",
    updates: 2,
    backgroundColor: "#131518",
    link: { href: "#slug", onClick: action("#slug") },
  },
  {
    slug: "crack",
    avatar: "/" + crack,
    description: "What's crackalackin",
    color: "#f9e066",
    updates: 3,
    backgroundColor: "#131518",
    link: { href: "#slug", onClick: action("#slug") },
  },
  {
    slug: "fic-club",
    avatar: "/" + book,
    description: "Come enjoy all the fics!",
    color: "#7724d2",
    updates: 5,
    backgroundColor: "#131518",
    link: { href: "#slug", onClick: action("#slug") },
  },
  {
    slug: "dasdjkasdjaklsdjaklsdjaslkdjaslkjdakldjalksjaslk",
    avatar: "/" + meta,
    description: "In My TiMeS wE CaLlEd It WaNk",
    color: "#f9e066",
    link: { href: "#slug", onClick: action("#slug") },
  },
];
const SEARCH_BOARDS = [
  {
    slug: "villain-thirst",
    avatar: "/" + villains,
    description: "Love to love 'em.",
    color: "#e22b4b",
    link: { href: "#slug", onClick: action("#slug") },
  },
  {
    slug: "art-crit",
    avatar: "/" + art,
    description: "Let's learn together!",
    color: "#27caba",
    link: { href: "#slug", onClick: action("#slug") },
  },
];
const RECENT_BOARDS = [
  {
    slug: "gore",
    avatar: "/" + goreBackground,
    description: "Love me some bruised bois (and more).",
    color: "#f96680",
    link: { href: "#slug", onClick: action("#slug") },
    updates: 10,
  },
  {
    slug: "oncie-den",
    avatar: "/" + oncelerBoard,
    description: "Party like it's 2012",
    color: "#27caba",
    updates: 10,
    outdated: true,
    backgroundColor: "#131518",
    link: { href: "#slug", onClick: action("#slug") },
  },
  {
    slug: "fic-club",
    avatar: "/" + book,
    description: "Come enjoy all the fics!",
    color: "#7724d2",
    updates: 5,
    backgroundColor: "#131518",
    link: { href: "#slug", onClick: action("#slug") },
  },
  {
    slug: "kink-memes",
    avatar: "/" + kinkmeme,
    description: "No limits. No shame.",
    color: "#000000",
    link: { href: "#slug", onClick: action("#slug") },
    updates: 10,
  },
  {
    slug: "crack",
    avatar: "/" + crack,
    description: "What's crackalackin",
    color: "#f9e066",
    updates: 3,
    outdated: true,
    backgroundColor: "#131518",
    link: { href: "#slug", onClick: action("#slug") },
  },
];

export default {
  title: "Feeds Preview",
  component: FeedWithMenu,
} as Meta;

const menuOptions = {
  menuOptions: [
    {
      id: "boards",
      name: "boards",
      icon: { icon: faTh },
      link: {
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        onClick: action("boards"),
      },
    },
    {
      id: "inbox",
      name: "inbox",
      icon: { icon: faInbox },
      link: {
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        onClick: action("inbox"),
      },
    },
    {
      id: "search",
      name: "search",
      icon: { icon: faSearch },
      link: {
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        onClick: action("search"),
      },
    },
  ],
  selectedMenuOption: "inbox",
};

interface LayoutStoryProps extends LayoutProps {
  mainContent: JSX.Element;
  sideMenuContent: JSX.Element;
  pinnedMenuContent: JSX.Element;
}

const LayoutTemplate: Story<LayoutStoryProps> = (args: LayoutStoryProps) => {
  const { mainContent, sideMenuContent, pinnedMenuContent, ...rest } = args;
  return (
    <>
      <Layout {...rest}>
        <Layout.MainContent>{mainContent}</Layout.MainContent>
        <Layout.SideMenuContent>{sideMenuContent}</Layout.SideMenuContent>
        <Layout.PinnedMenuContent>{pinnedMenuContent}</Layout.PinnedMenuContent>
        <Layout.ActionButton></Layout.ActionButton>
      </Layout>
      <style jsx>
        {`
          :global(body) {
            padding: 0 !important;
          }
        `}
      </style>
    </>
  );
};

export const FeedWithMenuShortPreview = LayoutTemplate.bind({});
FeedWithMenuShortPreview.args = {
  mainContent: (
    <FeedWithMenu>
      <FeedWithMenu.Sidebar>
        {" "}
        <div style={{ height: "1500px", width: "50%", backgroundColor: "red" }}>
          Sidebar Content!!
        </div>
      </FeedWithMenu.Sidebar>
      <FeedWithMenu.FeedContent>
        <div style={{ height: "500px", backgroundColor: "green" }}>
          Feed Content!!
        </div>
      </FeedWithMenu.FeedContent>
    </FeedWithMenu>
  ),
  sideMenuContent: <div>Side menu side menu!</div>,
  title: "!test",
  headerAccent: "purple",
  onUserBarClick: { onClick: action("onUserbarClick") },
  hasNotifications: true,
  hasOutdatedNotifications: false,
};

FeedWithMenuShortPreview.story = {
  name: "feed with menu (short)",
};

const COLORS = ["blue", "green", "pink"];
export const FeedWithMenuPreview = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  // https://dmitripavlutin.com/react-hooks-stale-closures/
  const [feedItemsNumber, setFeedItemsNumber] = React.useState(1);

  return (
    <Layout
      onUserBarClick={{ onClick: action("onUserbarClick") }}
      hasNotifications
      hasOutdatedNotifications={false}
      title="test!"
      titleLink={{ onClick: () => setShowSidebar(true) }}
      headerAccent="purple"
      loading={loading}
    >
      <Layout.ActionButton>
        <CycleNewButton text="Next New" onNext={() => console.log("hi!")} />
      </Layout.ActionButton>
      <Layout.MainContent>
        <FeedWithMenu
          showSidebar={showSidebar}
          onCloseSidebar={() => setShowSidebar(false)}
          onReachEnd={() => {
            log(`Reached end`);
            if (loading) {
              log(`...already loading!`);
              return;
            }
            setTimeout(() => {
              log(`...adding one more number!`);
              setFeedItemsNumber((feedItemsNumber) => feedItemsNumber + 1);
              setLoading(false);
            }, 3000);
            log(`...loading a new one!`);
            setLoading(true);
          }}
        >
          <FeedWithMenu.Sidebar>
            <div
              style={{ height: "100px", width: "50%", backgroundColor: "red" }}
            >
              Sidebar!!
            </div>
          </FeedWithMenu.Sidebar>
          <FeedWithMenu.FeedContent>
            <div
              style={{
                position: "sticky",
                left: "0",
                top: "50%",
                backgroundColor: "lightgray",
              }}
            >
              Loading: {loading ? "true" : "false"}
            </div>
            {Array.from({ length: feedItemsNumber }).map((_, index) => (
              <div
                style={{
                  height: "1500px",
                  backgroundColor: COLORS[index % 3],
                }}
                key={index}
              >
                Feed {index + 1} of {feedItemsNumber}!!
                <Button onClick={() => setShowSidebar(!showSidebar)}>
                  Click!
                </Button>
              </div>
            ))}
          </FeedWithMenu.FeedContent>
        </FeedWithMenu>
      </Layout.MainContent>
    </Layout>
  );
};

FeedWithMenuPreview.story = {
  name: "feed with menu",
};

const POSTS = [
  {
    createdTime: "1 minute ago",
    text: '[{"insert":"A short post."}]',
    secretIdentity: {
      name: "Good Guy",
      avatar: `/${oncelerAvatar}`,
    },
    newPost: true,
    totalComments: 6,
    totalContributions: 5,
    directContributions: 3,
  },
  {
    createdTime: "1 minute ago",
    text: '[{"insert":"A short post."}]',
    secretIdentity: {
      name: "Good Guy",
      avatar: `/${oncelerAvatar}`,
    },
    newPost: true,
    totalComments: 6,
    totalContributions: 5,
    directContributions: 3,
  },
  {
    createdTime: "1 minute ago",
    text: '[{"insert":"A short post."}]',
    secretIdentity: {
      name: "Good Guy",
      avatar: `/${oncelerAvatar}`,
    },
    newPost: true,
    totalComments: 6,
    totalContributions: 5,
    directContributions: 3,
  },
  {
    createdTime: "1 minute ago",
    text: '[{"insert":"A short post."}]',
    secretIdentity: {
      name: "Good Guy",
      avatar: `/${oncelerAvatar}`,
    },
    newPost: true,
    totalComments: 6,
    totalContributions: 5,
    directContributions: 3,
  },
  {
    createdTime: "1 minute ago",
    text: '[{"insert":"A short post."}]',
    secretIdentity: {
      name: "Good Guy",
      avatar: `/${oncelerAvatar}`,
    },
    newPost: true,
    totalComments: 6,
    totalContributions: 5,
    directContributions: 3,
  },
  {
    createdTime: "1 minute ago",
    text: '[{"insert":"A short post."}]',
    secretIdentity: {
      name: "Good Guy",
      avatar: `/${oncelerAvatar}`,
    },
    newPost: true,
    totalComments: 6,
    totalContributions: 5,
    directContributions: 3,
  },
  {
    createdTime: "1 minute ago",
    text: '[{"insert":"A short post."}]',
    secretIdentity: {
      name: "Good Guy",
      avatar: `/${oncelerAvatar}`,
    },
    newPost: true,
    totalComments: 6,
    totalContributions: 5,
    directContributions: 3,
  },
  {
    createdTime: "1 minute ago",
    text: '[{"insert":"A short post."}]',
    secretIdentity: {
      name: "Good Guy",
      avatar: `/${oncelerAvatar}`,
    },
    newPost: true,
    totalComments: 6,
    totalContributions: 5,
    directContributions: 3,
  },
  {
    createdTime: "1 minute ago",
    text: '[{"insert":"A short post."}]',
    secretIdentity: {
      name: "Good Guy",
      avatar: `/${oncelerAvatar}`,
    },
    newPost: true,
    totalComments: 6,
    totalContributions: 5,
    directContributions: 3,
  },
  {
    createdTime: "5 minutes ago",
    text: '[{"insert":"Nishin Masumi Reading Group (Week 2)"},{"attributes":{"header":1},"insert":"\\n"},{"insert":"\\nAs you know, we\'re going through \\"Host is Down\\" this week! \\n\\n"},{"attributes":{"alt":"Host is Down by Mado Fuchiya (Nishin)"},"insert":{"image":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1564868627l/50190748._SX1200_SY630_.jpg"}},{"insert":"\\n\\nThis is the official discussion thread. Feel free to comment, but remember to tag spoilers (or suffer the mods\' wrath).\\n"}]',
    secretIdentity: {
      name: "Good Guy",
      avatar: `/${oncelerAvatar}`,
    },
    newPost: true,
    totalComments: 6,
    totalContributions: 5,
    directContributions: 3,
  },
  {
    createdTime: "10 hours ago",
    text: '[{"insert":"Help a Thirsty, Thirsty Anon"},{"attributes":{"header":1},"insert":"\\n"},{"insert":"\\nI recently discovered "},{"attributes":{"link":"https://myanimelist.net/manga/115345/MADK"},"insert":"MadK"},{"insert":", and I\'ve fallen in love with the combination of beautiful art and great story. I\'ve been trying to put together a list of recs of the angstiest, goriest series out there. It\'s been surprisingly hard to find the Good Shit.\\n\\nWhat\'s your favorite series and why?\\n"}]',
    secretIdentity: {
      name: "Tuxedo Mask",
      avatar: `/${tuxedoAvatar}`,
    },
    userIdentity: {
      name: "SexyDaddy69",
      avatar: `/${mamoruAvatar}`,
    },
    options: {
      wide: true,
    },
    newComments: 5,
    totalComments: 6,
    totalContributions: 5,
    directContributions: 3,
  },
  {
    createdTime: "yesterday",
    text: '[{"insert":"Monthly Art Roundup"},{"attributes":{"header":1},"insert":"\\n"},{"insert":"\\nPost your favorites! As usual, remember to embed the actual posts (unless it\'s your own art, then do as you wish). Reposting is a no-no. \\n\\nI\'ll start with one of my favorite artists:\\n"},{"insert":{"tweet":"https://twitter.com/notkrad/status/1222638147886034945"}}]',
    secretIdentity: {
      name: "Bad Guy",
      avatar: `/${greedlerAvatar}`,
    },
    newComments: 5,
    newContributions: 2,
    totalComments: 6,
    totalContributions: 5,
    directContributions: 3,
  },
  {
    createdTime: "3 days ago",
    text: '[{"insert":{"block-image":"https://media.tenor.com/images/97b761adf7bdc9d72fc1fadbbaa3a4a6/tenor.gif"}},{"insert":"(I got inspired to write a quick cannibalism drabble. Wanted to share it and get your opinion while I decide whether to turn it into a longer fic!)\\n"}]',
    secretIdentity: {
      name: "Nice Therapist",
      avatar: `/${hannibalAvatar}`,
    },
    userIdentity: {
      name: "xXxChesapeakeRipperxXx",
      avatar: `/${hannibalAvatar}`,
    },
    newContributions: 3,
    totalComments: 6,
    totalContributions: 5,
    directContributions: 3,
  },
];

const BOARD_INFO = {
  slug: "gore",
  avatarUrl: `/${goreBackground}`,
  tagline: "Love me some bruised bois (and more).",
  accentColor: "#f96680",
  boardWideTags: [
    { name: "gore", color: "#f96680" },
    { name: "guro", color: "#e22b4b" },
    { name: "nsfw", color: "#27caba" },
    { name: "dead dove", color: "#f9e066" },
  ],
  canonicalTags: [
    { name: "request", color: "#27caba" },
    { name: "blood", color: "#f96680" },
    { name: "knifeplay", color: "#93b3b0" },
    { name: "aesthetic", color: "#24d282" },
    { name: "impalement", color: "#27caba" },
    { name: "skullfuck", color: "#e22b4b" },
    { name: "hanging", color: "#f9e066" },
    { name: "torture", color: "#f96680" },
    { name: "necrophilia", color: "#93b3b0" },
    { name: "shota", color: "#e22b4b" },
    { name: "fanfiction", color: "#27caba" },
    { name: "rec", color: "#f9e066" },
    { name: "doujinshi", color: "#f96680" },
    { name: "untagged", color: "#93b3b0" },
  ],
  contentRulesTags: [
    { name: "shota", allowed: true },
    { name: "nsfw", allowed: true },
    { name: "noncon", allowed: true },
    { name: "IRL", allowed: false },
    { name: "RP", allowed: false },
  ],
  otherRules: (
    <div>
      <ul>
        <li>
          Shota <strong>must</strong> be tagged.
        </li>
        <li>
          Requests go in the appropriate tag. If the same request has been made
          less than a month ago, it will be deleted by the mods.
        </li>
        <li>
          Mods might add any TWs tag as they see fit. If you need help, add
          #untagged and a mod will take care of it.
        </li>
      </ul>
    </div>
  ),
  previewOptions: [
    { name: "opt1", link: { onClick: action("optionOne") } },
    { name: "opt2", link: { onClick: action("option2") } },
  ],
};

export const Attempt1 = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const { styles } = useBoos({ startActive: true });
  return (
    <>
      <CustomCursor
        cursorImage={wand}
        cursorTrail={sparkle}
        offset={{
          x: 30,
          y: 40,
        }}
      />
      <Layout
        headerAccent="#f96680"
        title="!goreisthebestweloveit"
        titleLink={{ onClick: () => setShowSidebar(!showSidebar) }}
        onUserBarClick={{ onClick: action("onUserbarClick") }}
        hasNotifications
        hasOutdatedNotifications
        onCompassClick={() => setShowSidebar(!showSidebar)}
        loggedInMenuOptions={[
          {
            name: "no href",
            icon: { icon: faUnlink },
            link: {
              onClick: action("noHrefClick"),
            },
          },
          {
            name: "with href",
            icon: { icon: faLink },
            link: {
              onClick: action("withHref"),
              href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            },
          },
        ]}
        {...menuOptions}
      >
        <Layout.SideMenuContent>
          <SideMenu
            pinnedBoards={PINNED_BOARDS}
            showPinned={true}
            menuOptions={[
              {
                name: "no href",
                link: {
                  onClick: action("noHrefClick"),
                },
              },
              {
                name: "with href",
                link: {
                  onClick: action("withHref"),
                  href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                },
              },
            ]}
          >
            <SideMenu.BoardsMenuSection
              title="recent unreads"
              icon={faClock}
              boards={RECENT_BOARDS}
              emptyTitle="Congratulations!"
              emptyDescription="You read 'em all."
            />
            <SideMenu.BoardsMenuSection
              title="empty section"
              icon={faTrash}
              emptyTitle="Congratulations!"
              emptyDescription="You read 'em all."
            />
            <SideMenu.BoardsMenuSection
              title="all boards"
              icon={faTh}
              boards={[...PINNED_BOARDS, ...RECENT_BOARDS, ...SEARCH_BOARDS]}
              emptyTitle="There's no board here."
              emptyDescription="Somehow, that feels wrong."
            />
          </SideMenu>
        </Layout.SideMenuContent>
        <Layout.PinnedMenuContent>
          <PinnedMenu>
            <PinnedMenu.Section
              icon={faThumbtack}
              sectionId="pinned boards"
              items={PINNED_BOARDS}
            />
          </PinnedMenu>
        </Layout.PinnedMenuContent>
        <Layout.MainContent>
          <FeedWithMenu
            showSidebar={showSidebar}
            onCloseSidebar={() => setShowSidebar(false)}
            onReachEnd={() => {
              log(`Reached end`);
            }}
          >
            <FeedWithMenu.Sidebar>
              <BoardSidebar {...BOARD_INFO} slug="goreisthebestweloveit" />
            </FeedWithMenu.Sidebar>
            <FeedWithMenu.FeedContent>
              <>
                {POSTS.map((post) => (
                  <div
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      maxWidth: "100%",
                      display: "inline-block",
                    }}
                    key={post.text}
                  >
                    <Post
                      newPost={post.newPost}
                      createdTime={post.createdTime}
                      text={post.text}
                      secretIdentity={post.secretIdentity}
                      userIdentity={post.userIdentity}
                      newComments={post.newComments}
                      totalComments={post.totalComments}
                      totalContributions={post.totalContributions}
                      directContributions={post.directContributions}
                      onNewContribution={action("onNewContribution")}
                      onNewComment={action("onNewComment")}
                      notesLink={{
                        onClick: action("notesLink"),
                        href: "#href",
                      }}
                      createdTimeLink={{
                        onClick: action("createdTime"),
                        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                      }}
                    />
                  </div>
                ))}
              </>
            </FeedWithMenu.FeedContent>
          </FeedWithMenu>
        </Layout.MainContent>
        <Layout.ActionButton>
          <PostingActionButton
            accentColor="#f96680"
            onNewPost={() => console.log("hi!")}
          />
        </Layout.ActionButton>
      </Layout>
      {styles}
      <style jsx>
        {`
          :global(body) {
            padding: 0 !important;
          }
        `}
      </style>
    </>
  );
};

Attempt1.story = {
  name: "there was an attempt",
};

export const MasonryLayout = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const masonryRef = React.useRef<{ reposition: () => void }>(null);
  const [showMax, setShowMax] = useStateWithCallbackLazy(1);

  const closeSidebar = React.useCallback(() => setShowSidebar(false), []);
  return (
    <>
      <Layout
        headerAccent="#f96680"
        title="!gore"
        logoLink={{
          onClick: action("logo!"),
        }}
        titleLink={{
          onClick: () => setShowSidebar(!showSidebar),
        }}
        onUserBarClick={{ onClick: action("onUserbarClick") }}
        hasNotifications
        hasOutdatedNotifications
        onCompassClick={() => setShowSidebar(!showSidebar)}
        loggedInMenuOptions={[
          {
            name: "no href",
            icon: { icon: faUnlink },
            link: {
              onClick: action("noHrefClick"),
            },
          },
          {
            name: "with href",
            icon: { icon: faLink },
            link: {
              onClick: action("withHref"),
              href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            },
          },
        ]}
      >
        <Layout.ActionButton>
          <PostingActionButton
            accentColor="#f96680"
            onNewPost={() => console.log("hi!")}
          />
        </Layout.ActionButton>
        <Layout.SideMenuContent>
          <SideMenu
            pinnedBoards={PINNED_BOARDS}
            showPinned={true}
            menuOptions={[
              {
                name: "no href",
                link: {
                  onClick: action("noHrefClick"),
                },
              },
              {
                name: "with href",
                link: {
                  onClick: action("withHref"),
                  href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                },
              },
            ]}
          >
            <SideMenu.BoardsMenuSection
              title="recent unreads"
              icon={faClock}
              boards={RECENT_BOARDS}
              emptyTitle="Congratulations!"
              emptyDescription="You read 'em all."
            />
            <SideMenu.BoardsMenuSection
              title="empty section"
              icon={faTrash}
              emptyTitle="Congratulations!"
              emptyDescription="You read 'em all."
            />
            <SideMenu.BoardsMenuSection
              title="all boards"
              icon={faTh}
              boards={[...PINNED_BOARDS, ...RECENT_BOARDS, ...SEARCH_BOARDS]}
              emptyTitle="There's no board here."
              emptyDescription="Somehow, that feels wrong."
            />
          </SideMenu>
        </Layout.SideMenuContent>
        <Layout.MainContent>
          <FeedWithMenu
            showSidebar={showSidebar}
            onCloseSidebar={closeSidebar}
            forceHideSidebar={true}
            reachToBottom={showMax < POSTS.length}
            onReachEnd={React.useCallback((more) => {
              setShowMax(
                (showMax) => showMax + 1,
                (showMax: number) => {
                  more(showMax < POSTS.length);
                }
              );
              log(`Reached end`);
            }, [])}
          >
            <FeedWithMenu.FeedContent>
              <Button onClick={() => masonryRef.current?.reposition()}>
                Reposition Masonry View
              </Button>
              <MasonryView ref={masonryRef}>
                {POSTS.filter((post, index) => index < showMax).map((post) => (
                  <div
                    key={post.text}
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      maxWidth: "500px",
                    }}
                  >
                    <Post
                      newPost={post.newPost}
                      createdTime={post.createdTime}
                      text={post.text}
                      secretIdentity={post.secretIdentity}
                      userIdentity={post.userIdentity}
                      newComments={post.newComments}
                      totalComments={post.totalComments}
                      totalContributions={post.totalContributions}
                      directContributions={post.directContributions}
                      onNewContribution={action("onNewContribution")}
                      onNewComment={action("onNewComment")}
                      notesLink={{
                        onClick: action("notesLink"),
                        href: "#href",
                      }}
                      createdTimeLink={{
                        onClick: action("createdTime"),
                        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                      }}
                    />
                  </div>
                ))}
              </MasonryView>
            </FeedWithMenu.FeedContent>
          </FeedWithMenu>
        </Layout.MainContent>
      </Layout>
    </>
  );
};

MasonryLayout.story = {
  name: "masonry layout",
};
