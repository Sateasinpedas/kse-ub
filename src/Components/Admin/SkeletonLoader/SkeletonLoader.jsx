import ContentLoader from "react-content-loader";

export default function SkeletonLoader({ preset }) {
    return (
        <ContentLoader
            speed={2}
            width={400}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            {
                preset === 'facebook'
                    ? (
                        <>
                            <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
                            <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
                            <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
                            <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
                            <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
                            <circle cx="20" cy="20" r="20" />
                        </>
                    )
                    :
                    preset === 'instagram'
                        ? (
                            <>
                                <circle cx="31" cy="31" r="15" />
                                <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
                                <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
                                <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
                            </>
                        )
                        :
                        preset === 'faq' ?
                            <>
                                <circle cx="27" cy="27" r="18" />
                                <rect x="53" y="14" rx="3" ry="3" width="180" height="13" />
                                <rect x="53" y="30" rx="3" ry="3" width="10" height="10" />
                                <rect x="67" y="30" rx="3" ry="3" width="74" height="10" />
                                <circle cx="305" cy="27" r="8" />
                                <rect x="0" y="53" rx="0" ry="0" width="320" height="1" />
                                <rect x="219" y="146" rx="0" ry="0" width="0" height="0" />
                            </>
                            :
                            preset === 'news' ?
                                <>
                                    <rect x="15" y="15" rx="4" ry="4" width="100%" height="25" />
                                    <rect x="15" y="50" rx="2" ry="2" width="100%" height="150" />
                                    <rect x="15" y="230" rx="2" ry="2" width="170" height="20" />
                                    <rect x="60" y="230" rx="2" ry="2" width="170" height="20" />
                                </>
                                :
                                ''
            }
        </ContentLoader>
    );
}