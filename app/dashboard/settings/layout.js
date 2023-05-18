

export default function SettingsLayout({
    children, // will be a page or nested layout
}) {
    return (
        <section>
            {children}
        </section>
    );
}