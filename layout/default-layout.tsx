import Footer from "@/components/footer";
import Header from "@/components/header";


export default function DefaultLayout({ children }: { children: any }) {
    return (
        <>
            <Header />

            <main>
                <div className="container">
                    {children}
                </div>
            </main>

            <Footer />
        </>
    )
}
