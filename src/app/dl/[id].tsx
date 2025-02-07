export default function AppClipPage() {
  return (
    <>
      <head>
        <meta 
          name="apple-itunes-app" 
  content="app-clip-bundle-id=net.dinecloud.customers.Clip, app-clip-display=card"
        />
      </head>
      <div>
        <script dangerouslySetInnerHTML={{
          __html: `
            setTimeout(() => {
              window.location.href = 'https://web.dinecloud.net' + window.location.pathname;
            }, 2000);
          `
        }} />
      </div>
    </>
  );
}

// This is needed to make the page static
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  };
}

export async function getStaticProps() {
  return {
    props: {}
  };
}