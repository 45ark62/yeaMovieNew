import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={160}
    height={300}
    viewBox="0 0 160 300"
    backgroundColor="#1e88e5"
    foregroundColor="#e6e5e5">
    <rect x="546" y="532" rx="3" ry="3" width="88" height="6" />
    <rect x="376" y="525" rx="3" ry="3" width="410" height="6" />
    <rect x="462" y="519" rx="3" ry="3" width="380" height="6" />
    <rect x="515" y="516" rx="3" ry="3" width="178" height="6" />
    <circle cx="615" cy="348" r="125" />
    <rect x="533" y="359" rx="0" ry="0" width="280" height="24" />
    <rect x="0" y="420" rx="0" ry="0" width="88" height="27" />
    <rect x="125" y="413" rx="30" ry="30" width="151" height="43" />
    <rect x="0" y="310" rx="10" ry="10" width="280" height="83" />
    <rect x="0" y="0" rx="20" ry="20" width="160" height="240" />
    <rect x="0" y="250" rx="0" ry="0" width="153" height="20" />
    <rect x="0" y="280" rx="0" ry="0" width="104" height="18" />
  </ContentLoader>
);

export default Skeleton;
