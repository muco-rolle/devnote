import NextHead from 'next/head';

type DocumentHeadProps = {
    title?: string;
};

export const DocumentHead = ({ title }: DocumentHeadProps) => {
    return (
        <NextHead>
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />

            {/* Inter font */}
            <link rel="preconnect" href="https://fonts.gstatic.com" />

            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
                rel="stylesheet"
            />
            {/* Pacifico font */}
            <link
                href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
                rel="stylesheet"
            />
            <meta name="theme-color" content="#3182ce" />

            <title>Devnote | {title || 'Home'}</title>
        </NextHead>
    );
};
