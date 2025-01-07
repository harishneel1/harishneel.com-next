export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="mb-4">© 2025 Harish Neel. All rights reserved.</p>
                    <div className="flex justify-center gap-4">
                        <a href="#privacy" className="hover:text-white">Privacy Policy</a>
                        <a href="#terms" className="hover:text-white">Terms of Service</a>
                        <a href="#contact" className="hover:text-white">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}