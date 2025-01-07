import './globals.css'
import './styles.css'
import Header from "../components/layout/Header"
import Footer from '../components/layout/Footer'

export const metadata = {
  title: 'Harish Neel - AI Implementation Expert',
  description: 'AI Implementation and Consulting Services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}