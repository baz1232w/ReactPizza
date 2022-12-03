import React from "react"
import ContentLoader from "react-content-loader"

export const SceletonItem = () => (
    <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="158" y="107" rx="0" ry="0" width="1" height="1" />
        <rect x="121" y="45" rx="0" ry="0" width="30" height="0" />
        <circle cx="140" cy="128" r="123" />
        <rect x="62" y="270" rx="13" ry="13" width="158" height="33" />
        <rect x="151" y="282" rx="0" ry="0" width="1" height="3" />
        <rect x="7" y="317" rx="17" ry="17" width="266" height="94" />
        <rect x="7" y="425" rx="8" ry="8" width="81" height="28" />
        <rect x="192" y="425" rx="8" ry="8" width="81" height="28" />
    </ContentLoader>
)


