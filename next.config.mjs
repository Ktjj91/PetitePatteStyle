/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: false,
    output: 'standalone',
    eslint: {
        ignoreDuringBuilds: true,

    },
    async headers() {
        const csp = process.env.NODE_ENV === 'production'
            ? "script-src 'self' 'unsafe-inline' https://static.axept.io;"
            : "";

        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: csp,
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
